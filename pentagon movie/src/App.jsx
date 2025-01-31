import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movies from "./Movies";
import AddMovie from "./AddMovie";
import About from "./About";
import SearchMovie from "./SearchMovie";
import Navbar from "./Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<SearchMovie />} />
      </Routes>
    </Router>
  );
}

export default App;
//Jeremiah