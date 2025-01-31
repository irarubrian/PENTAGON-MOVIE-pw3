import { title } from "process";
import React, { useEffect, useState } from "react";

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
  // hold our fetch movies
  const [Movies, setMovies] = useState([])

  //useeffect to fetch movies

  useEffect(() => {
    // where the fetch movies are stored
    const fetchedMovies = []
    // loop  all through the random titles
    // use promise.all to fetch all the titles
    const fetchMovies = async () => {
      try{
        const responses = await Promise.all(
          randomTitles.map(title => fetch(`http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`))
        );
        //turn the responses into json
        const data = await Promise.all(responses.map(res => res.json()));

         //filter the vaild movies
        const validMovies = data.filter(movie => movie.Response === "True");
        //set the movies state with valid movies
        setMovies(validMovies);
        // catch errors
      }catch(error){
        console.error('faild to fetch movies',error);}

      fetchMovies();
    }
  },[])// to run only once




  return (
    <div>
      <h1>Random Movie List</h1>
      <div>
        {Movies.map((movie, Title) => (
          <MovieCard key={Title} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Movies;

//Jeremiah