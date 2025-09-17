import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./Dashboard";
import Overview from "./pages/Overview";
import Univariate from "./pages/Univariate";
import Bivariate from "./pages/Bivariate";     // lowercase file
import Multivariate from "./pages/Multivariate"; // lowercase file
import Outliers from "./pages/Outliers";
import PieCharts from "./pages/PieCharts";
import Histogram from "./pages/Histogram";
import Barplots from "./pages/Barplots";
import Treemap from "./pages/Treemap";
import ViolinPlots from "./pages/ViolinPlots"; // lowercase 'v'
import StackedBarplots from "./pages/StackedBarplots"
function App() {
  return (
    <Router>
      <Dashboard>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/univariate" element={<Univariate />} />
          <Route path="/bivariate" element={<Bivariate />} />
          <Route path="/multivariate" element={<Multivariate />} />
          <Route path="/outliers" element={<Outliers />} />
          <Route path="/piecharts" element={<PieCharts />} />
          <Route path="/histograms" element={<Histogram />} /> {/* plural */}
          <Route path="/stacked-barplots" element={<StackedBarplots />} /> {/* matches sidebar */}
          <Route path="/treemap" element={<Treemap />} />
          <Route path="/violinplots" element={<ViolinPlots />} />
          <Route path="/barplots" element={<Barplots />} />
        </Routes>
      </Dashboard>
    </Router>
  );
}

export default App;
