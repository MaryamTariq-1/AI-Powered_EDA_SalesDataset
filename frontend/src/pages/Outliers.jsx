import React, { useState } from "react";
import "../styles/Outliers.css";

export default function Outliers() {
  const [showExplainer, setShowExplainer] = useState(false);

  const plots = [
    { src: "/Visualization/Outliers/MONTH_ID_outliers.png", title: "MONTH_ID Outliers" },
    { src: "/Visualization/Outliers/MSRP_outliers.png", title: "MSRP Outliers" },
    { src: "/Visualization/Outliers/ORDERLINENUMBER_outliers.png", title: "ORDERLINENUMBER Outliers" },
    { src: "/Visualization/Outliers/ORDERNUMBER_outliers.png", title: "ORDERNUMBER Outliers" },
    { src: "/Visualization/Outliers/PRICEEACH_outliers.png", title: "PRICEEACH Outliers" },
    { src: "/Visualization/Outliers/QTR_ID_outliers.png", title: "QTR_ID Outliers" },
    { src: "/Visualization/Outliers/QUANTITYORDERED_outliers.png", title: "QUANTITYORDERED Outliers" },
    { src: "/Visualization/Outliers/SALES_outliers.png", title: "SALES Outliers" },
    { src: "/Visualization/Outliers/YEAR_ID_outliers.png", title: "YEAR_ID Outliers" },
  ];

  return (
    <div className="outliers-container">
      {/* Page Title + AI Guide Button */}
      <div className="title-row">
        <h2>Outlier Analysis</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      <p className="subtitle">
        Identifying and visualizing outliers in your dataset across multiple variables.
      </p>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Outlier Analysis</h4>
          <ul>
            <li>
              <strong>Box Plots:</strong> Visualize the distribution of data and identify
              outliers as points beyond the whiskers (typically 1.5×IQR from the quartiles).
            </li>
            <li>
              <strong>Outlier Detection:</strong> Points that fall significantly outside
              the normal range of the data may indicate errors, special cases, or interesting phenomena.
            </li>
            <li>
              <strong>Impact Assessment:</strong> Outliers can skew statistical analyses
              and machine learning models, so it's important to identify and handle them appropriately.
            </li>
            <li>
              <strong>Treatment Options:</strong> Consider removing, transforming, or
              winsorizing outliers based on your analysis goals and domain knowledge.
            </li>
            <li>
              <strong>Context Matters:</strong> Some outliers represent valuable information
              rather than noise - investigate their causes before deciding how to handle them.
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
              <img src={plot.src} alt={plot.title} className="outlier-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}