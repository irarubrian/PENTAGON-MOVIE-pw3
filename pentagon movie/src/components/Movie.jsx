import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard"; // Ensure MovieCard is imported
import AddMovie from "./AddMovie"; // Import AddMovie component

function Movies() {
  const API_KEY = "a025f74a";

  // State variables
  const [movies, setMovies] = useState([]); // Holds fetched movies
  const [loading, setLoading] = useState(false); // Loading state
  const [searchTerm, setSearchTerm] = useState(""); // Search input value
  const [error, setError] = useState(null); // Error state

  // Function to fetch movies based on the search term
  const fetchMovies = async (title) => {
    try {
      setLoading(true); // Set loading to true before fetching
      const response = await fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const data = await response.json();
      if (data.Response === "True") {
        setMovies([data]); // Update movies state with the searched movie
        setError(null); // Clear any previous errors
      } else {
        setMovies([]); // No movie found
        setError("No movie found with that title.");
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
      setError("An error occurred while fetching the movie.");
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value); // Update the search term state
    if (value.trim() === "") {
      setMovies([]); // Clear movies if the search input is empty
      setError(null); // Clear any previous errors
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting
    if (searchTerm.trim() !== "") {
      fetchMovies(searchTerm); // Fetch movie based on the search term
    }
  };

  // Function to add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  return (
    <div>
      <h1>Movie Search</h1>

      {/* Search Form */}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>

      {/* Error Message */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Loading Indicator */}
      {loading && <p>Loading...</p>}

      {/* Movie List */}
      {movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : !loading && searchTerm.trim() !== "" ? (
        <p>No movies found.</p>
      ) : null}

      {/* Add Movie Component */}
      
    </div>
  );
}

export default Movies;