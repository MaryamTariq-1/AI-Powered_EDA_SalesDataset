import React, { useState } from "react";
import AiExplainer from "../components/AiExplainer";
import "../styles/Univariate.css";

export default function Univariate() {
  const [activeExplanation, setActiveExplanation] = useState(null);

  // All images with titles
  const plots = [
    { src: "/Visualization/Univariate/COUNTRY_countplot.png", title: "COUNTRY Countplot", chartType: "countplot" },
    { src: "/Visualization/Univariate/DEALSIZE_countplot.png", title: "DEALSIZE Countplot", chartType: "countplot" },
    { src: "/Visualization/Univariate/PRODUCTLINE_countplot.png", title: "PRODUCTLINE Countplot", chartType: "countplot" },
    { src: "/Visualization/Univariate/STATE_countplot.png", title: "STATE Countplot", chartType: "countplot" },
    { src: "/Visualization/Univariate/STATUS_countplot.png", title: "STATUS Countplot", chartType: "countplot" },
    { src: "/Visualization/Univariate/TERRITORY_countplot.png", title: "TERRITORY Countplot", chartType: "countplot" },
    { src: "/Visualization/Univariate/PRICEEACH_hist_box.png", title: "PRICEEACH Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/MONTH_ID_hist_box.png", title: "MONTH_ID Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/MSRP_hist_box.png", title: "MSRP Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/ORDERLINENUMBER_hist_box.png", title: "ORDERLINENUMBER Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/ORDERNUMBER_hist_box.png", title: "ORDERNUMBER Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/QTR_ID_hist_box.png", title: "QTR_ID Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/QUANTITYORDERED_hist_box.png", title: "QUANTITYORDERED Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/SALES_hist_box.png", title: "SALES Histogram & Boxplot", chartType: "histogram_boxplot" },
    { src: "/Visualization/Univariate/YEAR_ID_hist_box.png", title: "YEAR_ID Histogram & Boxplot", chartType: "histogram_boxplot" },
  ];

  const toggleExplanation = (index) => {
    setActiveExplanation(activeExplanation === index ? null : index);
  };

  return (
    <div className="univariate-container">
      <h2>Univariate Analysis</h2>
      <p className="subtitle">Exploring single-variable distributions and insights.</p>

      <div className="grid">
        {plots.map((plot, index) => (
          <div key={index} className="card">
            <h4>{plot.title}</h4>
            <div className="image-container">
              <img src={plot.src} alt={plot.title} className="uni-image" />
            </div>

            {/* AI Guide Toggle */}
            <div className="ai-explainer-toggle">
              <button
                className="ai-toggle-btn"
                onClick={() => toggleExplanation(index)}
              >
                {activeExplanation === index ? "Hide AI Guide" : "AI Guide →"}
              </button>
            </div>

            {/* AI Explainer */}
            {activeExplanation === index && (
              <div className="ai-explainer-container">
                <AiExplainer
                  title={plot.title}
                  imagePath={plot.src}
                  chartType={plot.chartType}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}