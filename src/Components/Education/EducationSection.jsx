import React from 'react';

const EducationSection = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <section className="education-section">
      <img src={data.img.src} alt={data.img.alt} className="portfolio-profile-img" />
      <div className="education-text">
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
        <a href={data.a.href} className="explore-more">{data.a.text}</a>
      </div>
    </section>
  );
};

export default EducationSection;