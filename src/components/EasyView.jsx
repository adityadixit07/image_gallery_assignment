import React, { useState, useRef, useEffect } from "react";
import { config } from "../config";
import LazyImage from "../utils/LazyLoadImage";
import ShimmerCard from "../utils/ShimmerCard";

const EasyView = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchCats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${config.REACT_APP_BASE_URL}search?limit=5&page=10&order=Desc`
      );
      if (!response.ok) throw new Error("Failed to fetch cats");
      const data = await response.json();
      setCats(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-[1200px] mx-auto p-4">
      <button
        onClick={fetchCats}
        disabled={loading}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300 disabled:cursor-not-allowed"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 mr-3 inline-block"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
        {loading ? "Loading..." : "Fetch Cats"}
      </button>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {loading ? (
          Array(5)
            .fill(null)
            .map((_, index) => <ShimmerCard key={`shimmer-${index}`} />)
        ) : cats.length === 0 ? (
          <p className="col-span-full text-center">
            No cats to display. Click the button to fetch some!
          </p>
        ) : (
          cats.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <LazyImage src={cat.url} alt="Cat" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default EasyView;
