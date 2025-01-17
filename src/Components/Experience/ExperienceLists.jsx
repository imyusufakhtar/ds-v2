import React from 'react';

const ExperienceLists = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <div className="experience-list">
      {data.experience.map((item, index) => (
        <div key={index} className="experience-item">
          <h3>{item.title}</h3>
          <p className="company-name">{item.company}</p>
          <p className="experience-duration">{item.duration}</p>
          <ul>
            {item.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ExperienceLists;