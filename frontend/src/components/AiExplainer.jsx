// frontend/src/components/AiExplainer.jsx
import { useState } from 'react';

const AiExplainer = ({ title, imagePath, chartType = "visualization" }) => {
  const [explanation, setExplanation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchExplanation = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:8001/api/explain-chart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          image_path: imagePath,
          chart_type: chartType,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `API error: ${response.status}`);
      }

      const data = await response.json();
      setExplanation(data.analysis);
    } catch (err) {
      setError(err.message || 'Failed to generate explanation');
      console.error('Error fetching AI explanation:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4 p-4 bg-white rounded-lg shadow-md border border-gray-200">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-800">AI Chart Analysis</h3>
        <button
          onClick={fetchExplanation}
          disabled={loading}
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-blue-400 text-sm"
        >
          {loading ? 'Analyzing...' : 'Analyze Chart'}
        </button>
      </div>

      {error && (
        <div className="text-red-500 text-sm mb-3 p-2 bg-red-50 rounded">
          Error: {error}
        </div>
      )}

      {loading && (
        <div className="text-gray-600 italic p-2 bg-gray-50 rounded">
          AI is analyzing your chart...
        </div>
      )}

      {explanation && !loading && (
        <div className="space-y-4">
          {explanation.chart_type && (
            <div>
              <h4 className="font-medium text-gray-700">Chart Type</h4>
              <p className="text-gray-600">{explanation.chart_type}</p>
            </div>
          )}

          {explanation.key_insights && explanation.key_insights.length > 0 && (
            <div>
              <h4 className="font-medium text-gray-700">Key Insights</h4>
              <ul className="list-disc list-inside text-gray-600 pl-2">
                {explanation.key_insights.map((insight, index) => (
                  <li key={index}>{insight}</li>
                ))}
              </ul>
            </div>
          )}

          {explanation.trends && (
            <div>
              <h4 className="font-medium text-gray-700">Trends & Patterns</h4>
              <p className="text-gray-600">{explanation.trends}</p>
            </div>
          )}

          {explanation.data_quality && (
            <div>
              <h4 className="font-medium text-gray-700">Data Quality</h4>
              <p className="text-gray-600">{explanation.data_quality}</p>
            </div>
          )}

          {explanation.recommendations && (
            <div>
              <h4 className="font-medium text-gray-700">Recommendations</h4>
              <p className="text-gray-600">{explanation.recommendations}</p>
            </div>
          )}

          {explanation.raw_analysis && (
            <div>
              <h4 className="font-medium text-gray-700">Analysis</h4>
              <p className="text-gray-600">{explanation.raw_analysis}</p>
            </div>
          )}

          <div className="flex justify-between items-center mt-4">
            <span className="text-sm text-gray-500">
              Analyzing: {imagePath}
            </span>
            <button
              onClick={fetchExplanation}
              className="px-3 py-1 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 text-sm"
            >
              Re-analyze
            </button>
          </div>
        </div>
      )}

      {!explanation && !loading && !error && (
        <div className="text-gray-500 italic text-sm">
          Click "Analyze Chart" to get AI insights about this visualization.
        </div>
      )}
    </div>
  );
};

export default AiExplainer;