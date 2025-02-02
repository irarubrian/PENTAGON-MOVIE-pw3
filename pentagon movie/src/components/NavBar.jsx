//lennox
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchMovie";
function Navbar() {
  return (
    <nav>
      <Link to="/" className='Home'>Home</Link>
      <Link to="/movies" className="Movies">Movies</Link>
      <Link to="/add-movie" className="Add Movie">Add Movie</Link>
      <Link to="/about" className="About">About</Link>
      <SearchBar/>
    </nav>
  );
}

export default Navbar;