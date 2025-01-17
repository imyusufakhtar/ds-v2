import React from 'react';

const ResumeSkills = ({ data }) => {
  if (!data) return null;

  return (
    <div className="portfolio-resume-section">
      <h2>{data.h2}</h2>
      <div className="portfolio-skills-card">
        {data.skills.map((skill, index) => (
          <p key={index}>
            <strong>{skill.strong}</strong> {skill.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ResumeSkills;