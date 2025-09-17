import React, { useState } from "react";
import "../styles/Multivariate.css"; // CSS file

export default function Multivariate() {
  const [showExplainer, setShowExplainer] = useState(false);

  const plots = [
    { src: "/Visualization/Multivariate/clustered_correlation_heatmap.png", title: "Clustered Correlation Heatmap" },
    { src: "/Visualization/Multivariate/facetgrid_sales.png", title: "FacetGrid of Sales" },
    { src: "/Visualization/Multivariate/heatmap_sales_country_dealsize.png", title: "Sales Heatmap (Country vs DealSize)" },
    { src: "/Visualization/Multivariate/pairplot_numeric.png", title: "Pairplot of Numeric Variables" },
    { src: "/Visualization/Multivariate/sales_by_productline_dealsize.png", title: "Sales by ProductLine and DealSize" },
  ];

  return (
    <div className="multivariate-container">
      {/* Page Title + AI Guide Button */}
      <div className="title-row">
        <h2>Multivariate Analysis</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      <p className="subtitle">
        Exploring relationships among three or more variables to uncover deeper patterns.
      </p>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Multivariate Analysis</h4>
          <ul>
            <li>
              <strong>Clustered Correlation Heatmap:</strong> Groups similar
              variables together for easier interpretation.
            </li>
            <li>
              <strong>FacetGrid:</strong> Allows comparing multiple categories
              at once (e.g., sales across regions).
            </li>
            <li>
              <strong>Heatmap:</strong> Shows intensity of relationships between
              multiple categorical and numerical variables.
            </li>
            <li>
              <strong>Pairplot:</strong> Visualizes pairwise relationships and
              distributions of all numeric variables.
            </li>
            <li>
              <strong>Grouped Bar Chart:</strong> Compares numerical values
              across categories and sub-categories.
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
              <img src={plot.src} alt={plot.title} className="multi-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
