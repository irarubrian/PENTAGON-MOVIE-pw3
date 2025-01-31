import React from "react";
import {useNavigate} from "react-router-dom";
export default function Home() {
    const navigate = useNavigate();
    return (
        <div>
            <h1>PENTAGON PRIME MOVIES</h1>
            <p> Your prime destination for discovering and exploring the finest movies.
            </p>
        <div>
            <button onClick={() => navigate ("/Movies")}>Browse Movies</button>
            <button onClick={() => navigate ("/About")}>Learn  more</button>
        </div>
    </div>
    )
}