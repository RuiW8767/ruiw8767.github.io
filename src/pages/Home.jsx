import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1 className="hero-title">Rui Wang</h1>
        <p className="hero-subtitle">Computer Science Student @ UNSW Sydney</p>
        <div className="nav-buttons">
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      {/* Future Mascot Slot */}
      <div className="mascot-placeholder">
        {/* Mascot will go here later */}
      </div>
    </div>
  );
};

export default Home;
