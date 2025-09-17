import React, { useState } from "react";
import "../styles/Stackedbarplot.css";

export default function StackedBarplots() {
  const [showExplainer, setShowExplainer] = useState(false);

  const plots = [
    { src: "/Visualization/StackedBarplots/PRODUCTLINE_vs_DEALSIZE_stackedbar.png", title: "PRODUCTLINE vs DEALSIZE" },
    { src: "/Visualization/StackedBarplots/PRODUCTLINE_vs_TERRITORY_stackedbar.png", title: "PRODUCTLINE vs TERRITORY" },
    { src: "/Visualization/StackedBarplots/STATUS_vs_DEALSIZE_stackedbar.png", title: "STATUS vs DEALSIZE" },
    { src: "/Visualization/StackedBarplots/STATUS_vs_PRODUCTLINE_stackedbar.png", title: "STATUS vs PRODUCTLINE" },
    { src: "/Visualization/StackedBarplots/STATUS_vs_TERRITORY_stackedbar.png", title: "STATUS vs TERRITORY" },
    { src: "/Visualization/StackedBarplots/TERRITORY_vs_DEALSIZE_stackedbar.png", title: "TERRITORY vs DEALSIZE" },
  ];

  return (
    <div className="stackedbar-container">
      {/* Title + AI Guide Toggle */}
      <div className="title-row">
        <h2>Stacked Barplots</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      <p className="subtitle">
        Comparing categorical variables with stacked bar charts.
      </p>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Stacked Barplots</h4>
          <ul>
            <li>
              <strong>Definition:</strong> A stacked barplot displays bars divided into segments,
              representing proportions of subcategories within each category.
            </li>
            <li>
              <strong>Category Comparison:</strong> The total bar length shows the overall size of
              each category, while the segments show distribution across subcategories.
            </li>
            <li>
              <strong>Color Encoding:</strong> Different colors distinguish the subgroups stacked
              within each bar.
            </li>
            <li>
              <strong>Use Cases:</strong> Useful for analyzing relationships between two categorical
              variables (e.g., product line vs. territory).
            </li>
            <li>
              <strong>Limitations:</strong> Harder to compare subcategory values across bars since
              only the first segment shares a common baseline.
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
              <img src={plot.src} alt={plot.title} className="stackedbar-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
