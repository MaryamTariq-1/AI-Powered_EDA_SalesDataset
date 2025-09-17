import React, { useState } from "react";
import "../styles/ViolinPlots.css";

export default function ViolinPlots() {
  const [showExplainer, setShowExplainer] = useState(false);

  const plots = [
    { src: "/Visualization/Violinplots/MONTH_ID_violin.png", title: "MONTH_ID Violin Plot" },
    { src: "/Visualization/Violinplots/MSRP_violin.png", title: "MSRP Violin Plot" },
    { src: "/Visualization/Violinplots/ORDERLINENUMBER_violin.png", title: "ORDERLINENUMBER Violin Plot" },
    { src: "/Visualization/Violinplots/ORDERNUMBER_violin.png", title: "ORDERNUMBER Violin Plot" },
    { src: "/Visualization/Violinplots/PRICEEACH_violin.png", title: "PRICEEACH Violin Plot" },
    { src: "/Visualization/Violinplots/QTR_ID_violin.png", title: "QTR_ID Violin Plot" },
    { src: "/Visualization/Violinplots/QUANTITYORDERED_violin.png", title: "QUANTITYORDERED Violin Plot" },
    { src: "/Visualization/Violinplots/SALES_violin.png", title: "SALES Violin Plot" },
    { src: "/Visualization/Violinplots/YEAR_ID_violin.png", title: "YEAR_ID Violin Plot" },
  ];

  return (
    <div className="violin-container">
      {/* Title + AI Guide Toggle */}
      <div className="title-row">
        <h2>Violin Plots</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      <p className="subtitle">
        Distribution of numerical variables with density estimation.
      </p>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Violin Plots</h4>
          <ul>
            <li>
              <strong>Definition:</strong> A violin plot combines a box plot with a kernel density plot,
              showing both summary statistics and the distribution shape.
            </li>
            <li>
              <strong>Median & Quartiles:</strong> The white dot (median) and thick bar (IQR) show central tendency and spread.
            </li>
            <li>
              <strong>Density:</strong> The width of the “violin” indicates the data distribution at different values.
            </li>
            <li>
              <strong>Comparison:</strong> Useful for comparing distributions across multiple categories.
            </li>
            <li>
              <strong>Outliers:</strong> Unlike box plots, violin plots show underlying distribution rather than only extreme points.
            </li>
          </ul>
        </div>
      )}

      {/* Visualization Grid */}
      <div className="grid">
        {plots.map((plot, index) => (
          <div key={index} className="card">
            <h4>{plot.title}</h4>
            <div className="image-container">
              <img src={plot.src} alt={plot.title} className="violin-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
