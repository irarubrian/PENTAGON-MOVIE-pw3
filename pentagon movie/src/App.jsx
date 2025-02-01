import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home"; // Correct path
import Movies from "./components/Movie"; // Correct path
import AddMovie from "./components/AddMovie";
import About from "./components/About";
import Navbar from "./components/NavBar";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;