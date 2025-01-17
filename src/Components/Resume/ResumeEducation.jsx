import React from 'react';

const ResumeEducation = ({ data }) => {
  if (!data) return null;

  return (
    <div className="portfolio-resume-section">
      <h2>{data.h2}</h2>
      <div className="portfolio-education-card">
        <h3>{data.h3}</h3>
        {data.p.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ResumeEducation;