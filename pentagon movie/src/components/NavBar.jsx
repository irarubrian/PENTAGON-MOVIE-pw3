//lennox
import React from 'react';
import './Navbar.css';  // For custom styling, create a separate CSS file for the navbar.

const Navbar = ({ onSearch, searchTerm, setSearchTerm }) => {
  // Handles the change in the search bar input
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);  // Updates the search term in parent App component
  };

  // Handles the form submission (search)
  const handleSubmit = (event) => {
    event.preventDefault();  // Prevent form refresh
    onSearch(searchTerm);  // Pass the search term back to App component to trigger search
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h2 className="navbar-title">Movie Finder</h2>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="navbar-search">
          <input
            type="text"
            value={searchTerm}
            onChange={handleInputChange}  // Update the search term as user types
            placeholder="Search for a movie..."
            className="navbar-input"
          />
          <button type="submit" className="navbar-button">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;

