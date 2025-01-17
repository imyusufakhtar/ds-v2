import React from 'react';

const ExperienceImage = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <img src={data.img.src} alt={data.img.alt} className="profile-img" />
  );
};

export default ExperienceImage;