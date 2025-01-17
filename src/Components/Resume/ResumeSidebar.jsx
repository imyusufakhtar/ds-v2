import React from 'react';

const ResumeSidebar = ({ data }) => {
  if (!data) return null;

  return (
    <div className="portfolio-resume-sidebar">
      <img src={data.img.src} alt={data.img.alt} />
      <div className="portfolio-about-me-section">
        <h2>{data.h2}</h2>
        <p>{data.p}</p>
      </div>
    </div>
  );
};

export default ResumeSidebar;