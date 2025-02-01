import { useState } from "react"; // Import useState hook

const SearchBar = ({ onSearch }) => { // Functional component for the search bar
  const [query, setQuery] = useState(""); // State to store the search query

  const handleSubmit = async (e) => { // Function to handle form submission
    e.preventDefault(); // Prevent default form submission
    if (!query.trim()) { // Check if the query is empty
      alert("Please enter a search term."); // Show alert if empty
      return;
    }

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=a025f74a&s=${encodeURIComponent(query)}`); // Fetch search results
      if (!response.ok) { // Check if the response is okay
        throw new Error(`Network response was not ok: ${response.statusText}`); // Handle error
      }

      const data = await response.json(); // Parse the response JSON
      if (data.Response === "False") { // Check if no results found
        alert(data.Error || "No results found."); // Alert message for no results
      } else {
        onSearch(data.Search || []); // Pass search results to parent
      }
    } catch (error) {
      console.error("Fetch error:", error); // Log any errors
      alert("An error occurred while fetching data. Please try again."); // Show alert for error
    } finally {
      setQuery(""); // Clear the search field
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-container"> {/* Search form */}
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      /> {/* Search input */}
      <button type="submit" className="search-button">Search</button> {/* Search button */}
    </form>
  );
};

export default SearchBar; // Export SearchBar component
