import React, { useState } from "react";
import "../styles/Treemaps.css";

export default function Treemap() {
  const [showExplainer, setShowExplainer] = useState(false);

  const plots = [
    { src: "/Visualization/Treemaps/COUNTRY_treemap.png", title: "COUNTRY Treemap" },
    { src: "/Visualization/Treemaps/DEALSIZE_treemap.png", title: "DEALSIZE Treemap" },
    { src: "/Visualization/Treemaps/PRODUCTLINE_treemap.png", title: "PRODUCTLINE Treemap" },
    { src: "/Visualization/Treemaps/STATE_treemap.png", title: "STATE Treemap" },
    { src: "/Visualization/Treemaps/STATUS_treemap.png", title: "STATUS Treemap" },
    { src: "/Visualization/Treemaps/TERRITORY_treemap.png", title: "TERRITORY Treemap" },
  ];

  return (
    <div className="treemap-container">
      {/* Title + AI Guide Toggle */}
      <div className="title-row">
        <h2>Treemaps</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      <p className="subtitle">
        Visualizing hierarchical categorical data using treemaps.
      </p>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Treemaps</h4>
          <ul>
            <li>
              <strong>Definition:</strong> A treemap displays hierarchical data as
              nested rectangles, where size and color represent attributes.
            </li>
            <li>
              <strong>Area:</strong> The size of each rectangle corresponds to a
              quantitative value (e.g., sales, revenue, frequency).
            </li>
            <li>
              <strong>Color:</strong> Often used to encode another variable,
              highlighting differences or categories.
            </li>
            <li>
              <strong>Hierarchy:</strong> Treemaps are great for showing
              categorical breakdowns (e.g., product line → sub-category → sales).
            </li>
            <li>
              <strong>Use Cases:</strong> Market share visualization, sales
              distribution by category, or resource allocation insights.
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
              <img src={plot.src} alt={plot.title} className="treemap-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
