import React from 'react';

const ResumeProjects = ({ data }) => {
  if (!data) return null;

  return (
    <div className="portfolio-resume-section">
      <h2>{data.h2}</h2>
      {data.projects.map((project, index) => (
        <div key={index} className="portfolio-project-card">
          <h3>{project.h3}</h3>
          {project.p.map((paragraph, paraIndex) => {
            if (typeof paragraph === 'string') {
              return <p key={paraIndex}>{paragraph}</p>;
            } else {
              return (
                <p key={paraIndex}>
                  <strong>{paragraph.strong}</strong> {paragraph.text}
                </p>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default ResumeProjects;