import React, { useState } from "react";
import "../styles/Bivariate.css"; // reuse same styles

export default function Bivariate() {
  const [showExplainer, setShowExplainer] = useState(false);

  const plots = [
    { src: "/Visualization/Bivariate/correlation_heatmap.png", title: "Correlation Heatmap" },
    { src: "/Visualization/Bivariate/MONTH_ID_by_DEALSIZE_boxplot.png", title: "MONTH_ID by DEALSIZE (Boxplot)" },
    { src: "/Visualization/Bivariate/MONTH_ID_by_PRODUCTLINE_boxplot.png", title: "MONTH_ID by PRODUCTLINE (Boxplot)" },
    { src: "/Visualization/Bivariate/MONTH_ID_by_STATUS_boxplot.png", title: "MONTH_ID by STATUS (Boxplot)" },
    { src: "/Visualization/Bivariate/MONTH_ID_vs_MSRP_scatter.png", title: "MONTH_ID vs MSRP (Scatterplot)" },
    { src: "/Visualization/Bivariate/MONTH_ID_vs_YEAR_ID_scatter.png", title: "MONTH_ID vs YEAR_ID (Scatterplot)" },
    // ... keep all your other plots here (same as before, just without chartType for now)
    { src: "/Visualization/Bivariate/YEAR_ID_vs_MSRP_scatter.png", title: "YEAR_ID vs MSRP (Scatterplot)" },
  ];

  return (
    <div className="bivariate-container">
      {/* Title Row with AI Guide Toggle */}
      <div className="title-row">
        <h2>Bivariate Analysis</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      <p className="subtitle">
        Exploring relationships between two variables to uncover insights.
      </p>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Bivariate Analysis</h4>
          <ul>
            <li>
              <strong>Correlation Heatmap:</strong> Displays how strongly two
              variables are linearly related.
            </li>
            <li>
              <strong>Boxplots:</strong> Compare distributions across categories
              (e.g., Product Line vs Sales).
            </li>
            <li>
              <strong>Scatterplots:</strong> Show direct relationships and trends
              between two continuous variables.
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
              <img src={plot.src} alt={plot.title} className="bi-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
