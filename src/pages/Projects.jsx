import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';
import projects from '../data/projectsData';

const Projects = () => {
  return (
    <div className="page-container">
      <h1>Projects</h1>

      <div className="project-list">
        {projects.map((project) => (
          <div key={project.slug} className="project-item">
            <Link to={`/projects/${project.slug}`}>
              <h2>{project.title}</h2>
            </Link>
            <p>{project.description}</p>
          </div>
        ))}

        <div className="project-item placeholder">
          <h2>More coming soon...</h2>
          <p>New projects are in progress.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
