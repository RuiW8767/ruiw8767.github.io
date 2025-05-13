import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../../data/projectsData';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const backButton = document.querySelector('.back-button');
      if (backButton) {
        const rect = backButton.getBoundingClientRect();
        setShowTopButton(rect.bottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!project) return <div className="page-container"><h2>Project not found.</h2></div>;

  return (
    <div className="page-container">
      <Link to="/projects" className="back-button">
        ← Back to Projects
      </Link>

      <h1>{project.title}</h1>
      <p>{project.description}</p>

      <div className="project-content">
        {project.content}
      </div>

      {project.link && (
        <p>
          <a href={project.link.url} target="_blank" rel="noopener noreferrer">
            {project.link.label}
          </a>
        </p>
      )}

      {showTopButton && (
        <button className="scroll-top-button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Top
        </button>
      )}
    </div>
  );
};

export default ProjectDetail;
