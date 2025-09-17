# backend/main.py
from pathlib import Path
import os
import json
import pandas as pd
from typing import Dict
from fastapi import FastAPI, Query, Body, UploadFile, File, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import JSONResponse
from dotenv import load_dotenv
import cv2
import numpy as np
from PIL import Image
import io

# ---- OpenAI Client ---- #
from openai import OpenAI

# ---------------- Load Environment ---------------- #
load_dotenv()
OPENROUTER_API_KEY = os.getenv("OPENROUTER_API_KEY")
if not OPENROUTER_API_KEY:
    raise RuntimeError("OPENROUTER_API_KEY not found in environment variables")

client = OpenAI(
    base_url="https://openrouter.ai/api/v1",
    api_key=OPENROUTER_API_KEY
)

# ---------------- App Setup ---------------- #
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---------------- Data Setup ---------------- #
data_path = Path(__file__).parent.parent / "data" / "cleaned_data.csv"
df = pd.read_csv(data_path)

viz_path = Path(__file__).parent.parent / "Visualization"
app.mount("/Visualization", StaticFiles(directory=str(viz_path)), name="Visualization")

# ---------------- Basic Endpoints ---------------- #
@app.get("/")
def root():
    return {"message": "Backend is working"}

@app.get("/data")
def get_data():
    return df.to_dict(orient="records")

@app.get("/head")
def get_head(n: int = Query(5, ge=1, le=100)):
    return df.head(n).to_dict(orient="records")

@app.get("/summary")
def get_summary():
    return {"rows": len(df), "columns": list(df.columns), "describe": df.describe(include="all").to_dict()}

@app.get("/metadata")
def get_metadata():
    cols = [
        {
            "column": c,
            "non_null_count": int(df[c].count()),
            "dtype": str(df[c].dtype),
            "memory_bytes": int(df[c].memory_usage(deep=True))
        } for c in df.columns
    ]
    return {"columns": cols, "total_memory_bytes": int(df.memory_usage(deep=True).sum())}

@app.get("/missing")
def get_missing():
    missing = df.isnull().sum()
    missing_pct = (df.isnull().mean() * 100).round(2)
    return {"missing": [{"column": c, "missing_count": int(missing[c]), "missing_pct": float(missing_pct[c])}
                        for c in df.columns if missing[c] > 0]}

@app.get("/uniques")
def get_uniques():
    return {"nunique": df.nunique().to_dict()}

@app.get("/sales_by_month")
def sales_by_month():
    grouped = df.groupby("MONTH_ID")["SALES"].sum().reset_index().sort_values("MONTH_ID")
    return grouped.to_dict(orient="records")

@app.get("/columns")
def get_columns():
    return {"columns": df.columns.tolist()}

# ---------------- Image Analysis Helpers ---------------- #
def analyze_image_content(image_bytes):
    try:
        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_COLOR)
        h, w, c = img.shape
        avg_color = np.mean(img, axis=(0, 1))
        return {"dimensions": {"width": w, "height": h}, "channels": c,
                "average_color": avg_color.tolist(), "analysis_type": "chart_visualization"}
    except Exception as e:
        return {"error": str(e)}

# ---------------- AI Helper ---------------- #
def analyze_with_openrouter(prompt: str):
    """
    Uses OpenAI Python client (via OpenRouter) to analyze chart/image
    """
    try:
        completion = client.chat.completions.create(
            model="google/gemini-2.5-flash-image-preview",
            messages=[{"role": "user", "content": prompt}]
        )
        message = completion.choices[0].message.content
        try:
            return json.loads(message)
        except json.JSONDecodeError:
            return {"analysis": message}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"OpenRouter API call failed: {str(e)}")

# ---------------- AI Endpoints ---------------- #
@app.post("/api/explain-image")
async def explain_image(file: UploadFile = File(None), image_path: str = Body(None), title: str = Body("Chart Analysis")):
    if file:
        image_bytes = await file.read()
    elif image_path:
        rel_path = image_path.replace("/Visualization/", "")
        full_path = viz_path / rel_path
        if not full_path.exists():
            raise HTTPException(status_code=404, detail=f"Image not found: {image_path}")
        with open(full_path, "rb") as f:
            image_bytes = f.read()
    else:
        raise HTTPException(status_code=400, detail="Provide either file or image_path")

    image_info = analyze_image_content(image_bytes)

    prompt = f"""
    Analyze this chart titled "{title}".
    Image dimensions: {image_info.get('dimensions', {})}
    Analysis type: {image_info.get('analysis_type', 'visualization')}

    Provide chart_type, key_insights, trends, data_quality, recommendations in JSON format.
    """

    analysis = analyze_with_openrouter(prompt)
    return {"title": title, "image_info": image_info, "analysis": analysis}


@app.post("/api/explain-chart")
def explain_chart_from_path(payload: Dict = Body(...)):
    image_path = payload.get("image_path", "")
    title = payload.get("title", "Chart Analysis")
    if not image_path:
        raise HTTPException(status_code=400, detail="image_path is required")

    rel_path = image_path.replace("/Visualization/", "")
    full_path = viz_path / rel_path
    if not full_path.exists():
        raise HTTPException(status_code=404, detail=f"Image not found: {image_path}")

    with open(full_path, "rb") as f:
        image_bytes = f.read()

    image_info = analyze_image_content(image_bytes)

    prompt = f"""
    Analyze this chart titled "{title}" located at {image_path}.
    Image dimensions: {image_info.get('dimensions', {})}
    Analysis type: {image_info.get('analysis_type', 'visualization')}

    Provide chart_type, key_insights, trends, data_quality, recommendations in JSON format.
    """

    analysis = analyze_with_openrouter(prompt)
    return {"title": title, "image_path": image_path, "image_info": image_info, "analysis": analysis}

# ---------------- Health Check ---------------- #
@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "chart-analysis-api"}
