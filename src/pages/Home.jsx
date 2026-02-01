import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="content">
        <h1 className="title">Rui Wang</h1>
        <p className="subtitle">Computer Science Student @ UNSW Sydney</p>

        <div className="main-buttons">
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="resume-button">
          <a
            href="https://drive.google.com/file/d/16yepcPgFtpUbUMU_MxjnQL0mS9CKGPeQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>

      <div className="mascot-area">
        {/* Mascot will go here later */}
      </div>
    </div>
  );
};

export default Home;
