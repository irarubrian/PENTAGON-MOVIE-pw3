import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import AddMovie from "./AddMovie";

function Movies() {
  const API_KEY = "a025f74a";
  const randomTitles = ["The Silent Forest", "Echoes of Tomorrow", "Crimson Horizon"];

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          randomTitles.map(title => fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`))
        );
        const data = await Promise.all(responses.map(res => res.json()));
        const validMovies = data.filter(movie => movie.Response === "True");
        setMovies(validMovies);
      } catch (error) {
        console.error('Failed to fetch movies', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleAddMovie = (newMovie) => {
    setMovies(prevMovies => [...prevMovies, newMovie]);
  };

  return (
    <div>
     
      {loading ? (
        <p>Loading movies...</p>
      ) : (
        <div>
          {movies.map(movie => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Movies;
