import React, { useState } from "react";
import "../styles/Histogram.css";

export default function Histogram() {
  const [showExplainer, setShowExplainer] = useState(false);

  const plots = [
    { src: "/Visualization/Histograms_byCategory/MONTH_ID_by_DEALSIZE_hist.png", title: "MONTH_ID by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/MONTH_ID_by_PRODUCTLINE_hist.png", title: "MONTH_ID by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/MONTH_ID_by_STATUS_hist.png", title: "MONTH_ID by STATUS" },
    { src: "/Visualization/Histograms_byCategory/MONTH_ID_by_TERRITORY_hist.png", title: "MONTH_ID by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/MSRP_by_DEALSIZE_hist.png", title: "MSRP by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/MSRP_by_PRODUCTLINE_hist.png", title: "MSRP by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/MSRP_by_STATUS_hist.png", title: "MSRP by STATUS" },
    { src: "/Visualization/Histograms_byCategory/MSRP_by_TERRITORY_hist.png", title: "MSRP by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/ORDERLINENUMBER_by_DEALSIZE_hist.png", title: "ORDERLINENUMBER by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/ORDERLINENUMBER_by_PRODUCTLINE_hist.png", title: "ORDERLINENUMBER by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/ORDERLINENUMBER_by_STATUS_hist.png", title: "ORDERLINENUMBER by STATUS" },
    { src: "/Visualization/Histograms_byCategory/ORDERLINENUMBER_by_TERRITORY_hist.png", title: "ORDERLINENUMBER by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/ORDERNUMBER_by_DEALSIZE_hist.png", title: "ORDERNUMBER by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/ORDERNUMBER_by_PRODUCTLINE_hist.png", title: "ORDERNUMBER by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/ORDERNUMBER_by_STATUS_hist.png", title: "ORDERNUMBER by STATUS" },
    { src: "/Visualization/Histograms_byCategory/ORDERNUMBER_by_TERRITORY_hist.png", title: "ORDERNUMBER by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/PRICEEACH_by_DEALSIZE_hist.png", title: "PRICEEACH by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/PRICEEACH_by_PRODUCTLINE_hist.png", title: "PRICEEACH by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/PRICEEACH_by_STATUS_hist.png", title: "PRICEEACH by STATUS" },
    { src: "/Visualization/Histograms_byCategory/PRICEEACH_by_TERRITORY_hist.png", title: "PRICEEACH by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/QTR_ID_by_DEALSIZE_hist.png", title: "QTR_ID by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/QTR_ID_by_PRODUCTLINE_hist.png", title: "QTR_ID by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/QTR_ID_by_STATUS_hist.png", title: "QTR_ID by STATUS" },
    { src: "/Visualization/Histograms_byCategory/QTR_ID_by_TERRITORY_hist.png", title: "QTR_ID by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/QUANTITYORDERED_by_DEALSIZE_hist.png", title: "QUANTITYORDERED by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/QUANTITYORDERED_by_PRODUCTLINE_hist.png", title: "QUANTITYORDERED by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/QUANTITYORDERED_by_STATUS_hist.png", title: "QUANTITYORDERED by STATUS" },
    { src: "/Visualization/Histograms_byCategory/QUANTITYORDERED_by_TERRITORY_hist.png", title: "QUANTITYORDERED by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/SALES_by_DEALSIZE_hist.png", title: "SALES by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/SALES_by_PRODUCTLINE_hist.png", title: "SALES by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/SALES_by_STATUS_hist.png", title: "SALES by STATUS" },
    { src: "/Visualization/Histograms_byCategory/SALES_by_TERRITORY_hist.png", title: "SALES by TERRITORY" },
    { src: "/Visualization/Histograms_byCategory/YEAR_ID_by_DEALSIZE_hist.png", title: "YEAR_ID by DEALSIZE" },
    { src: "/Visualization/Histograms_byCategory/YEAR_ID_by_PRODUCTLINE_hist.png", title: "YEAR_ID by PRODUCTLINE" },
    { src: "/Visualization/Histograms_byCategory/YEAR_ID_by_STATUS_hist.png", title: "YEAR_ID by STATUS" },
    { src: "/Visualization/Histograms_byCategory/YEAR_ID_by_TERRITORY_hist.png", title: "YEAR_ID by TERRITORY" },
  ];

  return (
    <div className="histogram-container">
      {/* Title + AI Guide Toggle */}
      <div className="title-row">
        <h2>Histograms by Category</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      <p className="subtitle">
        Analyzing distribution of numeric variables across categorical variables.
      </p>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Histograms</h4>
          <ul>
            <li>
              <strong>Definition:</strong> Histograms group numeric data into bins
              and display frequencies as bars.
            </li>
            <li>
              <strong>Distribution Shape:</strong> Helps identify skewness,
              symmetry, and modality (e.g., normal vs. bimodal distribution).
            </li>
            <li>
              <strong>Comparison by Category:</strong> Here, histograms are split
              by categorical variables (e.g., sales by product line).
            </li>
            <li>
              <strong>Insights:</strong> Useful for detecting ranges with high
              concentration, variability, and differences across groups.
            </li>
            <li>
              <strong>Limitations:</strong> Sensitive to bin size choice — too few
              bins hide detail, too many bins add noise.
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
              <img src={plot.src} alt={plot.title} className="histogram-image" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
