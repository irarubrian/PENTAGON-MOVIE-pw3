import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  // State to manage the search query input
  const [query, setQuery] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Check if the query is empty or contains only whitespace
    if (!query.trim()) {
      alert("Please enter a search term."); // Show an alert if the query is empty
      return; // Exit the function early
    }

    try {
      // Fetch data from the OMDB API using the search query
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=a025f74a&s=${encodeURIComponent(query)}`
      );

      // Check if the network response is not OK 
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Check if the API response indicates an error 
      if (data.Response === "False") {
        alert(data.Error || "No results found."); 
      } else {
        onSearch(data.Search || []); // Pass the search results to the parent component
      }
    } catch (error) {
      // Log the error to the console for debugging
      console.error("Fetch error:", error);
      // Show a user-friendly error message
      alert("An error occurred while fetching data. Please try again.");
    } finally {
      // Clear the search input after submission, regardless of success or failure
      setQuery("");
    }
  };

  return (
    // Form container with an onSubmit handler
    <form onSubmit={handleSubmit} className="search-bar-container">
      {/* Input field for the search query */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update the query state on input change
        className="search-input"
      />
      {/* Submit button to trigger the search */}
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};

export default SearchBar;