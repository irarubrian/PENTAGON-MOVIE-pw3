import React, { useState, useEffect } from 'react';

const AddMovie = () => {
  const [movie, setMovie] = useState({
    title: '',
    description: '',
    releaseDate: ''
  });

  // Load saved movie data from localStorage when the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") { // Check if running in the browser
      const savedMovie = localStorage.getItem("movieData");
      if (savedMovie) {
        setMovie(JSON.parse(savedMovie));
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save movie data to localStorage
    if (typeof window !== "undefined") { // Check if running in the browser
      localStorage.setItem("movieData", JSON.stringify(movie));
    }

    console.log('Movie Data:', movie);
    alert('Movie Added Successfully!');

    // Reset the form after submission
    setMovie({
      title: '',
      description: '',
      releaseDate: ''
    });
  };

  return (
    <div className="add-movie">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={movie.description}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="releaseDate">Release Date:</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
};

export default AddMovie;