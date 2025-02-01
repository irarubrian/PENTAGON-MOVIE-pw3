import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Movies from "./Movies";
import NavBar from "./NabBar";

function App() {
  return (
    <div className="all">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
    </div>
  );
}

export default App;
