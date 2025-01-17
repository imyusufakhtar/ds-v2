import React from 'react';

const ProjectsContainer = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <div className="projects-container">
      {data.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-content">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
            {project.links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="project-link"
                target={link.target}
                rel="noopener noreferrer"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsContainer;