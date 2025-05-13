import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="site-navbar">
      <div className="nav-center">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="nav-resume">
        <a
          href="https://drive.google.com/file/d/1VNHvYy962GVSe8eGWX3O9PKkvvEoBDcQ/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-resume-button"
        >
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
