// Importing necessary libraries from React
import React, { useState, useEffect } from "react";
import "./App.css"; // Import external CSS file

// Defining the main App component
const App = () => {
  // State to store fetched movies and loading status
  const [movies, setMovies] = useState([]); // Array of movies fetched from the API
  const [loading, setLoading] = useState(false); // Loading indicator

  // Function to fetch movies from the OMDB API
  const fetchMovies = async () => {
    setLoading(true); // Set loading to true when fetching starts
    try {
      // Fetch data from the APi endpoint
      const response = await fetch(
        "http://www.omdbapi.com/?s=Avengers&apikey=b7cf647d"
      );
      const data = await response.json(); // Convert response to JSON

      // Check if the API response contains movies
      if (data.Search) {
        setMovies(data.Search); // Update state with the movies
      } else {
        setMovies([]); // Reset movies if no results found
      }
    } catch (error) {
      console.error("Error fetching movies:", error); // Log any errors
    } finally {
      setLoading(false); // Set loading to false when fetching is complete
    }
  };

  // useEffect hook to fetch movies when the component mounts
  useEffect(() => {
    fetchMovies(); 
  }, []); //enmpty dependency array insures these runs once

  return (
    <div className="container">
      <h3 className="title">MOVIE LIST</h3> //web-page title
      {loading ? (
        <p className="loading">Loading movies...</p> // Display loading message while fetching
      ) : (
        <ul className="movie-list">
        {movies.length > 0 ? (  // Check if the movies array has elements
          movies.map((movie) => ( // Loop through each movie object in the array
            <li key={movie.imdbID} className="movie-item"> // Unique key for each list item
              <h4>{movie.Title} ({movie.Year})</h4> // Display movie title and release year
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" /> // Show movie poster
            </li>
          ))
        ) : (
          <p className="no-movies">No movies found.</p> // Display these message if no movie found
        )}
      </ul>
      
      )}
    </div>
  );
};

export default App;
