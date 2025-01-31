import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>PENTAGON PRIME MOVIES</h1>
            <p>Your prime destination for discovering and exploring the finest movies.</p>
            <div>
                {/* Navigation buttons for movie browsing and learning more */}
                <button onClick={() => navigate("/movies")}>Browse Movies</button>
                <button onClick={() => navigate("/about")}>Learn More</button>
            </div>
        </div>
    );
}
//Anwar 