// src/Dashboard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaChartBar,
  FaChartPie,
  FaProjectDiagram,
  FaRandom,
  FaTree,
} from "react-icons/fa";
import { BiScatterChart } from "react-icons/bi";
import { GiViolin } from "react-icons/gi";
import "./styles/dashboard.css";

export default function Dashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <input type="checkbox" id="check" checked={sidebarOpen} readOnly />
      <label htmlFor="check">
        <FaBars id="btn" onClick={toggleSidebar} />
        <FaTimes id="cancel" onClick={toggleSidebar} />
      </label>

      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <header>Dashboard</header>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/overview" onClick={toggleSidebar}>
              <FaChartBar /> Overview
            </Link>
          </li>
          <li>
            <Link to="/univariate" onClick={toggleSidebar}>
              <FaChartBar /> Univariate
            </Link>
          </li>
          <li>
            <Link to="/bivariate" onClick={toggleSidebar}>
              <BiScatterChart /> Bivariate
            </Link>
          </li>
          <li>
            <Link to="/multivariate" onClick={toggleSidebar}>
              <FaProjectDiagram /> Multivariate
            </Link>
          </li>
          <li>
            <Link to="/outliers" onClick={toggleSidebar}>
              <FaRandom /> Outliers
            </Link>
          </li>
          <li>
            <Link to="/piecharts" onClick={toggleSidebar}>
              <FaChartPie /> Pie Charts
            </Link>
          </li>
          <li>
            <Link to="/histograms" onClick={toggleSidebar}>
              <FaChartBar /> Histograms
            </Link>
          </li>
          <li>
            <Link to="/stacked-barplots" onClick={toggleSidebar}>
              <FaChartBar /> Stacked Barplots
            </Link>
          </li>
          <li>
            <Link to="/treemap" onClick={toggleSidebar}>
              <FaTree /> Tree Map
            </Link>
          </li>
          <li>
            <Link to="/violinplots" onClick={toggleSidebar}>
              <GiViolin /> Violin Plots
            </Link>
          </li>
          <li>
            <Link to="/Barplots" onClick={toggleSidebar}>
              <FaChartBar /> Bar Plots
            </Link>
          </li>
        </ul>
      </div>

      <section className={`main-content ${sidebarOpen ? "shifted" : ""}`}>
        {children}
      </section>
    </>
  );
}
