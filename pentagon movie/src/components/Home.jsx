// Home.jsx
import React from "react";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

/**
 * Homepage Component
 * This serves as the main landing page of Pentagon Prime Movies.
 * It provides navigation options to browse movies or learn more about the platform.
 */

const Homepage = () => {
  const navigate = useNavigate(); // Hook to navigate between pages

  return (
    <div className="homepage-container">
      <Navigation /> {/* Renders the navigation bar */}

      <main className="homepage-content">
        <section className="homepage-hero">
          {/* Application Title */}
          <h1 className="homepage-title">PENTAGON PRIME MOVIES</h1>

          {/* Short introduction */}
          <p className="homepage-description">
            Your premier destination for discovering and exploring the finest movies.
            Browse our curated collection, add your favorites, and join our community of movie enthusiasts.
          </p>

          {/* Action buttons for navigation */}
          <div className="homepage-buttons">
            <Button onClick={() => navigate("/movies")} className="homepage-button-primary">
              Browse Movies
            </Button>
            <Button onClick={() => navigate("/about")} className="homepage-button-secondary">
              Learn More
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
