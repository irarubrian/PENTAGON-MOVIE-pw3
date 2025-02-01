import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <strong><h1>PENTAGON PRIME MOVIES</h1></strong>
      <strong><p>Your prime destination for discovering and exploring the finest movies.</p></strong>
      <div>
        <button onClick={() => navigate("/movies")}>Browse Movies</button>
        <button onClick={() => navigate("/about")}>Learn More</button>
      </div>
      <strong><p>Check</p></strong>
    </div>
  );
}

export default Home;
