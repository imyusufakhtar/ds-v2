import React from 'react';

const AboutSection = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <section className="about-me-section">
      <div className="about-me-text">
        <h1>{data.h1}</h1>
        <p>{data.p}</p>
      </div>
      <img src={data.img.src} alt={data.img.alt} />
    </section>
  );
};

export default AboutSection;
