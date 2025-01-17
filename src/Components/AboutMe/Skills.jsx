import React from 'react';

const Skills = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <section className="skills-section">
      <h1>{data.h1}</h1>
      <div className="skills-container">
        {data.skillCards.map((card, index) => (
          <div key={index} className="skill-card">
            <img src={card.img.src} alt={card.img.alt} />
            <h2>{card.h2}</h2>
            <p>{card.p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
