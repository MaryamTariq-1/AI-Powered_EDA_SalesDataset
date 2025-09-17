import React, { useState } from "react";
import AiExplainer from "../components/AiExplainer"; // Reusable AI Explainer
import "../styles/PieChart.css";

export default function PieCharts() {
  const [activeExplanation, setActiveExplanation] = useState(null);

  const plots = [
    { src: "/Visualization/Piecharts/DEALSIZE_piechart.png", title: "DEALSIZE Pie Chart" },
    { src: "/Visualization/Piecharts/PRODUCTLINE_piechart.png", title: "PRODUCTLINE Pie Chart" },
    { src: "/Visualization/Piecharts/STATUS_piechart.png", title: "STATUS Pie Chart" },
    { src: "/Visualization/Piecharts/TERRITORY_piechart.png", title: "TERRITORY Pie Chart" },
  ];

  const toggleExplanation = (index) => {
    setActiveExplanation(activeExplanation === index ? null : index);
  };

  return (
    <div className="piecharts-container">
      <h2>Pie Charts Analysis</h2>
      <p className="subtitle">
        Visual representation of categorical variable distributions using pie charts.
      </p>

      <div className="grid">
        {plots.map((plot, index) => (
          <div key={index} className="card">
            <h4>{plot.title}</h4>
            <div className="image-container">
              <img
                src={plot.src}
                alt={plot.title}
                className="piechart-image"
              />
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
                  chartType="piechart"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
