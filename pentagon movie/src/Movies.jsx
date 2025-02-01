import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies() {
  const API_KEY = "a025f74a";
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

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          randomTitles.map(title =>
            fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`)
              .then(res => {
                if (!res.ok) throw new Error(`Failed to fetch ${title}`);
                return res.json();
              })
          )
        );
        const validMovies = responses.filter(movie => movie.Response === "True");
        setMovies(validMovies);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Random Movie List</h1>
      {loading ? (
        <p>Loading movies...</p>
      ) : movies.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default Movies;
