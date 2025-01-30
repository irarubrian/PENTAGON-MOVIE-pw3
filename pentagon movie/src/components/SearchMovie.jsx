//Lennoximport React, { useState } from 'react';

// Search component
const Search = ({ onSearch }) => {
    const [query, setQuery] = useState(''); // State to store the user's input
  
    // Handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
      if (query) {
        onSearch(query); // Call the onSearch function passed from App.js with the query
      }
    };
  
    return (
      <div className="search-container">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)} // Update the query state with the input value
            placeholder="Search for a movie..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    );
  };
  
  export default Search;
  
