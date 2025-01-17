import React from 'react';

const ProjectSummary = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <div className="projects-summary">
      <img src={data.img.src} alt={data.img.alt} />
      <h1>{data.h1}</h1>
      <p>
        {data.p} <a href="https://github.com/imyusufakhtar" target="_blank" rel="noopener noreferrer">Explore more</a>
      </p>
    </div>
  );
};

export default ProjectSummary;