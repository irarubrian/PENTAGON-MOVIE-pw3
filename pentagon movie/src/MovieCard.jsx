import React, { useState } from "react";

function MovieCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div onClick={handleCardClick} style={{ cursor: "pointer", margin: "10px" }}>
      {showDetails ? (
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p>{movie.Plot}</p>
          <button onClick={(e) => { e.stopPropagation(); setShowDetails(false); }}>
            Back to List
          </button>
        </div>
      ) : (
        <div>
          <img src={movie.Poster} alt={movie.Title} style={{ width: "150px" }} />
          <h2>{movie.Title}</h2>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
