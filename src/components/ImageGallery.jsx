import React, { useState, useEffect } from "react";
import { FaCat, FaExclamationTriangle } from "react-icons/fa";
import "../assets/css/ImageGallery.css";
import { config } from "../config";
import LazyImage from "../utils/LazyLoadImage";

const ImageGallery = () => {
  const [cats, setCats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Function to fetch the next set of cat images
  const fetchCats = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `${config.REACT_APP_BASE_URL}search?limit=10&page=${page}&order=Desc`
      );
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setCats((prevCats) => [...prevCats, ...data]);
      setHasMore(data.length > 0);
      setPage((prevPage) => prevPage + 1);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchCats();
  }, []);

  // Function to load more cats (called on button click)
  const loadMore = () => {
    if (!loading && hasMore) {
      fetchCats();
    }
  };

  // Shimmer loading effect placeholder
  const ShimmerCard = () => (
    <div className="cat-card shimmer">
      <div className="cat-image shimmer-bg"></div>
      <div className="cat-info">
        <div className="shimmer-text"></div>
      </div>
    </div>
  );

  return (
    <div className="cat-gallery">
      <div className="cat-grid">
        {cats.map((cat) => (
          <div key={cat.id} className="cat-card">
            <LazyImage src={cat.url} alt="Cat" />
            <div className="cat-info">
              <p>
                <FaCat /> ID: {cat.id}
              </p>
            </div>
          </div>
        ))}
        {loading &&
          [...Array(6)].map((_, index) => (
            <ShimmerCard key={`shimmer-${index}`} />
          ))}
      </div>

      {error && (
        <div className="error">
          <FaExclamationTriangle /> {error}
        </div>
      )}

      {/* Load More Button */}
      {!loading && hasMore && (
        <button className="load-more" onClick={loadMore} disabled={loading}>
          Load More
        </button>
      )}

      {/* No more cats to load */}
      {!hasMore && <p className="no-more">No more cats to load</p>}
    </div>
  );
};

export default ImageGallery;
