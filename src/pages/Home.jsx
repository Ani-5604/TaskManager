import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; // Import the CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Welcome to Task Manager</h1>
        <p className="home-quote">
  <span className="highlight">Organize</span> your tasks 
  <span className="highlight">effortlessly</span>
</p>
<p> Sign up or log in to get started!</p>
        <div className="button-group">
          <Link to="/login" className="home-button login-button">
            Login
          </Link>
          <Link to="/signup" className="home-button signup-button">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
