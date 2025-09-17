# AI-Powered\_EDA\_SalesDataset 

An **Interactive EDA Dashboard** built with **React + FastAPI**, visualizing datasets and providing **AI-powered insights** for data exploration.

---

### 🔹 Backend
[![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/) – High-performance Python web framework for building APIs  
[![Uvicorn](https://img.shields.io/badge/Uvicorn-4B8BBE?logo=python&logoColor=white)](https://www.uvicorn.org/) – ASGI server for running FastAPI  
[![Python](https://img.shields.io/badge/Python-3776AB?logo=python&logoColor=white)](https://www.python.org/) – Main programming language used  
[![Pandas](https://img.shields.io/badge/Pandas-150458?logo=pandas&logoColor=white)](https://pandas.pydata.org/) – Data manipulation and analysis  
[![NumPy](https://img.shields.io/badge/NumPy-013243?logo=numpy&logoColor=white)](https://numpy.org/) – Numerical computing library  
[![Matplotlib](https://img.shields.io/badge/Matplotlib-11557C?logo=matplotlib&logoColor=white)](https://matplotlib.org/) – Low-level plotting library  
[![Seaborn](https://img.shields.io/badge/Seaborn-4C72B0?logo=seaborn&logoColor=white)](https://seaborn.pydata.org/) – High-level statistical plots  
[![Jupyter](https://img.shields.io/badge/Jupyter-F37626?logo=jupyter&logoColor=white)](https://jupyter.org/) – Framework to run `.ipynb` notebooks  
[![IPykernel](https://img.shields.io/badge/IPykernel-777BB4?logo=python&logoColor=white)](https://ipython.org/ipykernel/) – Kernel to execute Python code inside Jupyter  
[![Notebook](https://img.shields.io/badge/Notebook-F37626?logo=jupyter&logoColor=white)](https://jupyter.org/) – Classic Jupyter Notebook interface  
[![OpenRouter API](https://img.shields.io/badge/OpenRouter-5A0FC8?logo=openai&logoColor=white)](https://openrouter.ai/) – AI-powered explanation API  

**Other Libraries & Utilities Used:**  
- `fastapi.middleware.cors` → Enable Cross-Origin requests  
- `fastapi.staticfiles` → Serve static files  
- `fastapi.responses.JSONResponse` → Return structured JSON responses  
- `dotenv` → Load environment variables  
- `pathlib.Path` & `os` → File and path management  
- `json` → Read/write JSON data  
- `cv2` (OpenCV) → Image processing  
- `PIL.Image` → Handle images  
- `io` → Stream files and images


---

### 🔹 Frontend
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/) – JavaScript library for building user interfaces  
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/) – Frontend build tool for fast development  
[![Axios](https://img.shields.io/badge/Axios-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/) – Promise-based HTTP client for API calls  
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) – Utility-first CSS framework for styling

---

### 🔹 Dev Tools
[![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)](https://git-scm.com/) – Version control  
[![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github&logoColor=white)](https://github.com/) – Git repository hosting  
[![npm](https://img.shields.io/badge/npm-CB3837?logo=npm&logoColor=white)](https://www.npmjs.com/) – JS package manager  
[![pip](https://img.shields.io/badge/pip-3776AB?logo=python&logoColor=white)](https://pypi.org/project/pip/) – Python package manager  
[![Virtualenv](https://img.shields.io/badge/Virtualenv-3A3A3A?logo=python&logoColor=white)](https://virtualenv.pypa.io/) – Python isolated environment  
[![PyCharm](https://img.shields.io/badge/PyCharm-000000?logo=pycharm&logoColor=white)](https://www.jetbrains.com/pycharm/) – Python IDE for coding, debugging & testing  
[![Chrome](https://img.shields.io/badge/Chrome-4285F4?logo=google-chrome&logoColor=white)](https://www.google.com/chrome/) – Browser & frontend debugging tools

---

## Required Dependencies

### Backend

```bash
pip install fastapi uvicorn[standard] python-dotenv pandas numpy matplotlib seaborn jupyter ipykernel notebook opencv-python pillow python-multipart

```

### Frontend

```bash
npm install react react-dom axios react-icons tailwindcss postcss autoprefixer && npx tailwindcss init -p

```

---

## Table of Contents

* [Features](#-features)
* [Tech Stack](#-tech-stack)
* [Setup Instructions](#-setup-instructions)
* [Project Structure](#-project-structure)
* [How It Works](#-how-it-works)
* [Author](#-author)
* [License](#-license)

---

## Features

* Interactive **Univariate, Bivariate, Multivariate, Histograms, Stacked Barplots, Barplots, PieCharts, TreeMaps, Histograms, Outliers, Violin Plots**
* **AI explanations** for each visualization
* Dataset summary: head, metadata, missing values, and unique values
* Reusable **React components** for cards, charts, and explainers

---

## Tech Stack

* **Backend:** FastAPI (API framework), Pandas & NumPy (data manipulation and numerical computing)
* **Frontend:** React & Vite (interactive UI), Axios (HTTP client for API requests)

* **Visualizations:** Matplotlib, Seaborn, Missingno

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MaryamTariq-1/AI-Powered_EDA_SalesDataset.git
cd AI-Powered_EDA_SalesDataset
```

---

### 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
# source venv/bin/activate # Mac/Linux
uvicorn main:app --reload
```

Runs at: `http://127.0.0.1:8001`

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

Runs at: `http://localhost:5173`

---

## 🔎 How It Works

1. **Dataset Loaded** → CSV or Excel file
2. **EDA Analysis** → Overview, Univariate, Bivariate, Multivariate plots and many other.
3. **AI Explanations** → Click on a guide Button to get insights powered by backend AI
4. **Interactive Dashboard** → Explore trends, correlations, and missing values

---

## 👩‍💻 Author

**Maryam Tariq**

---

## 📜 License

This project is licensed under the MIT License.

---

