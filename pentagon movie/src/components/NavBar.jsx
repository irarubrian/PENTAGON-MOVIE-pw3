//lennox
import React from "react"; import { Link } from "react-router-dom";

function Navbar() { return ( <nav className="navbar"> <Link to="/" className="home">Home</Link> <Link to="/movies" className="movie">Movies</Link> <Link to="/add-movie" className="add movie">Add Movie</Link> <Link to="/about" className="about">About</Link> </nav> ); }

export default Navbar