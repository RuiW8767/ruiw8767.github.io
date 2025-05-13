// src/pages/projects/ProjectDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';
import projects from '../../data/projectsData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <div className="page-container"><h2>Project not found.</h2></div>;
  }

  return (
    <div className="page-container">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.body}</p>

      <div>
        {project.links.itch && (
          <a href={project.links.itch} target="_blank" rel="noopener noreferrer">
            Play on Itch.io
          </a>
        )}
        {' | '}
        {project.links.video && (
          <a href={project.links.video} target="_blank" rel="noopener noreferrer">
            Watch Gameplay
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
