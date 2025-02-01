import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard"; // Ensure MovieCard is imported
import AddMovie from "./AddMovie"; // Import AddMovie component

function Movies() {
  const API_KEY = "a025f74a";

  // Predefined random movie titles
  const randomTitles = [
    "The Silent Forest", "Echoes of Tomorrow", "Crimson Horizon", "Whispers in the Dark",
    "The Last Ember", "Fading Shadows", "Beyond the Veil", "The Forgotten Path",
    "Shattered Skies", "The Eternal Flame", "Midnight Mirage", "The Hidden Kingdom",
    "Rising Tides", "The Lost Compass", "Frozen Echoes", "The Phantom Tide",
    "Beneath the Stars", "The Burning Sands", "The Crystal Cavern", "The Final Hour",
    "The Shadowed Peak", "The Golden Mask", "The Broken Clock", "The Silent Storm",
    "The Last Voyage", "The Forgotten City", "The Crimson Crown", "The Hollow Mountain",
    "The Endless Road", "The Silver Locket", "The Darkened Sky", "The Lost Relic",
    "The Frozen Abyss", "The Phantom's Curse", "The Shattered Mirror", "The Burning Horizon",
    "The Silent River", "The Hidden Truth", "The Last Guardian", "The Forgotten Dream",
    "The Crimson Blade", "The Shadowed Forest", "The Final Stand", "The Broken Chain",
    "The Silent Echo", "The Lost Temple", "The Frozen Heart", "The Phantom's Shadow",
    "The Shattered Sky", "The Burning Light"
  ];

  // State to hold fetched movies
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  // useEffect to fetch movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true); // Set loading to true before fetching
        const responses = await Promise.all(
          randomTitles.map(title => fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`))
        );
        // Turn the responses into JSON
        const data = await Promise.all(responses.map(res => res.json()));

        // Filter the valid movies
        const validMovies = data.filter(movie => movie.Response === "True");

        // Set the movies state with valid movies
        setMovies(validMovies);
      } catch (error) {
        console.error('Failed to fetch movies', error);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchMovies(); // Call the fetchMovies function immediately
  }, []); // Empty dependency array to run only once

  // Function to add a new movie to the list
  const handleAddMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <div>
      <h1>Random Movie List</h1>
      <AddMovie onAddMovie={handleAddMovie} /> {/* Pass handleAddMovie to AddMovie */}
      {loading ? (
        <p>Loading movies...</p> // Show loading message while fetching
      ) : (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} /> // Use movie.imdbID as the key
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
