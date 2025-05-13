import React from 'react';
import './About.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <div className="page-container about-page">
      <h1>About Me</h1>

      <div className="about-intro">
        <img src={profileImg} alt="Rui Wang" className="about-photo" />
        <p>
          Hi! I'm Rui Wang, a Computer Science student at UNSW Sydney with a passion for game development and software engineering.
          I enjoy building fun, functional, and creative experiences—especially when I get to explore Unreal Engine, C++, and animation systems.
        </p>
      </div>

      <div className="about-section">
        <h2>Skills & Technologies</h2>
        <ul className="tags">
          <li>C++ (learning)</li>
          <li>Blueprint (Unreal Engine)</li>
          <li>Python</li>
          <li>HTML/CSS/JS</li>
          <li>React</li>
          <li>Git</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Hobbies & Other Skills</h2>
        <ul className="tags">
          <li>Art</li>
          <li>Gaming</li>
          <li>Mandarin Language</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
