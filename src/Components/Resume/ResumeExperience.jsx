import React from 'react';

const ResumeExperience = ({ data }) => {
  if (!data) return null;

  return (
    <div className="portfolio-resume-section">
      <h2>{data.h2}</h2>
      {data.experience.map((item, index) => (
        <div className="portfolio-experience-card" key={index}>
          <h3>{item.h3}</h3>
          {item.p.map((paragraph, idx) => {
            if (typeof paragraph === 'string') {
              return <p key={idx}>{paragraph}</p>;
            } else {
              return (
                <p key={idx}>
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

export default ResumeExperience;