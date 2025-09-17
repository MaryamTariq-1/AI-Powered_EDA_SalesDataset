// frontend/src/pages/Overview.jsx
import React, { useEffect, useState } from "react";
import { getSummary, getHead, getMetadata, getUniques } from "../api";
import Card from "../components/Card";
import AiExplainer from "../components/AiExplainer";
import "../styles/Overview.css";

export default function Overview() {
  const [summary, setSummary] = useState(null);
  const [head, setHead] = useState([]);
  const [meta, setMeta] = useState(null);
  const [uniques, setUniques] = useState({});
  const [showExplainer, setShowExplainer] = useState(false);

  // Static columns
  const numericCols = [
    "ORDERNUMBER",
    "QUANTITYORDERED",
    "PRICEEACH",
    "ORDERLINENUMBER",
    "SALES",
    "QTR_ID",
    "MONTH_ID",
    "YEAR_ID",
    "MSRP",
  ];
  const categoricalCols = [
    "STATUS",
    "PRODUCTLINE",
    "PRODUCTCODE",
    "CUSTOMERNAME",
    "PHONE",
    "ADDRESSLINE1",
    "CITY",
    "STATE",
    "POSTALCODE",
    "COUNTRY",
    "TERRITORY",
    "CONTACTLASTNAME",
    "CONTACTFIRSTNAME",
    "DEALSIZE",
  ];

  useEffect(() => {
    getSummary().then((r) => setSummary(r.data)).catch(console.error);
    getHead(8).then((r) => setHead(r.data || [])).catch(console.error);
    getMetadata().then((r) => setMeta(r.data)).catch(console.error);
    getUniques().then((r) => setUniques(r.data?.nunique || {})).catch(console.error);
  }, []);

  return (
    <div className="overview-container space-y-6">
      {/* Page Title + AI Guide Button */}
      <div className="title-row">
        <h2>Dataset Overview</h2>
        <button
          className="ai-toggle-btn"
          onClick={() => setShowExplainer(!showExplainer)}
        >
          {showExplainer ? "Hide AI Guide" : "Show AI Guide"}
        </button>
      </div>

      {/* AI Guide Section */}
      {showExplainer && (
        <div className="ai-explainer-container">
          <h4>AI Guide: Understanding Dataset Overview</h4>
          <ul>
            <li>
              <strong>Sample Rows:</strong> Shows the first few rows of your dataset to help you understand the data structure and content.
            </li>
            <li>
              <strong>Missing Values:</strong> Indicates whether your data has any null or missing values that need to be addressed.
            </li>
            <li>
              <strong>Column Metadata:</strong> Provides information about each column including data types and non-null counts.
            </li>
            <li>
              <strong>Unique Values:</strong> Shows how many distinct values exist in each column, helping identify categorical variables.
            </li>
            <li>
              <strong>Numeric vs Categorical:</strong> Separates columns into numeric (continuous) and categorical (discrete) types for appropriate analysis.
            </li>
          </ul>
        </div>
      )}

      {/* Sample Rows Table */}
      <Card className="card full-width-card">
        <h4>Sample Rows (Head)</h4>
        <div className="overflow-auto">
          {head.length > 0 ? (
            <table>
              <thead>
                <tr>
                  {Object.keys(head[0]).map((k) => (
                    <th key={k}>{k}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {head.map((row, i) => (
                  <tr key={i}>
                    {Object.values(row).map((v, j) => (
                      <td key={j}>{String(v)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No sample rows available.</p>
          )}
        </div>
      </Card>

      {/* Columns Grid */}
      {summary?.columns && (
        <Card className="card">
          <h4>Columns</h4>
          <div className="columns-scroll">
            {summary.columns.map((c) => <span key={c} className="badge">{c}</span>)}
          </div>
        </Card>
      )}

      {/* Missing Data Card */}
      <Card className="card">
        <h4>Missing Values</h4>
        <p className="text-green-600">Data is cleaned. No missing values.</p>

        {/* Image */}
        <div className="image-container">
          <img
            src="public/Visualization/Univariate/missing_data_matrix_after_cleaning.png"
            alt="Missing Data Matrix After Cleaning"
          />
        </div>
      </Card>

      {/* Metadata Table */}
      {meta?.columns && (
        <Card className="card">
          <h4>Column Metadata</h4>
          <div className="overflow-auto max-h-72">
            <table>
              <thead>
                <tr><th>Column</th><th>Non-null</th><th>Type</th></tr>
              </thead>
              <tbody>
                {meta.columns.map((c) => (
                  <tr key={c.column}>
                    <td>{c.column}</td>
                    <td>{c.non_null_count}</td>
                    <td>{c.dtype}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Unique values */}
      {Object.keys(uniques).length > 0 && (
        <Card className="card">
          <h4>Number of Unique Values</h4>
          <div className="overflow-auto max-h-72">
            <table>
              <thead>
                <tr><th>Column</th><th>Unique Count</th></tr>
              </thead>
              <tbody>
                {Object.entries(uniques).map(([col, val]) => (
                  <tr key={col}><td>{col}</td><td>{val}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      )}

      {/* Numeric Columns */}
      <Card className="card">
        <h4>Numeric Columns</h4>
        <div className="overflow-auto">
          <table>
            <thead><tr><th>Column</th></tr></thead>
            <tbody>{numericCols.map((c) => <tr key={c}><td>{c}</td></tr>)}</tbody>
          </table>
        </div>
      </Card>

      {/* Categorical Columns */}
      <Card className="card">
        <h4>Categorical Columns</h4>
        <div className="overflow-auto">
          <table>
            <thead><tr><th>Column</th></tr></thead>
            <tbody>{categoricalCols.map((c) => <tr key={c}><td>{c}</td></tr>)}</tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}