import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return alert("Please enter a search term.");

    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=a025f74a&s=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      if (data.Response === "False") return alert(data.Error || "No results found.");
      onSearch(data.Search || []);
    } catch {
      alert("An error occurred while fetching data. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar-container">
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
      />
      <button type="submit" className="search-button">Search</button>
    </form>
  );
};

export default SearchBar;
