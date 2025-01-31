import React, { useState } from "react";

function MovieCard({ movie }) {
  const [showDetails, setShowDetails] = useState(false);

  const handleCardClick = () => {
    setShowDetails(!showDetails); // Toggle between details and basic view
  };

  return (
    <div onClick={handleCardClick}>
      {showDetails ? (// Show details if showDetails is true
        <div>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Director:</strong> {movie.Director}</p>
          <p>{movie.Plot}</p>
          <button onClick={() => setShowDetails(false)}>Back to List</button>
        </div>
      ) : (// Show basic view if showDetails is false
        <div>
          <img src={movie.Poster} alt={movie.Title} style={{ width: "150px" }} />
          <h2>{movie.Title}</h2>
        </div>
      )}
    </div>
  );
}

export default MovieCard;
//Jeremiah