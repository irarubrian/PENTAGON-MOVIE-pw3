//Bryan
//bryan

import { useState } from "react";

function AddMovie({ onAddMovie }) {
  // State to store the input values for new movie
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Create a new movie object
    const newMovie = {
      id: Date.now(), // Generate a unique ID
      title,
      genre,
      rating,
    };

    // Call the onAddMovie function passed as a prop
    onAddMovie(newMovie);
    
    // Reset the input fields after submission
    setTitle("");
    setGenre("");
    setRating("");
  };

  return (
    <div>
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        {/* Input for movie title */}
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        {/* Input for movie genre */}
        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />

        {/* Input for movie rating */}
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="10"
          required
        />

        {/* Submit button */}
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddMovie;

