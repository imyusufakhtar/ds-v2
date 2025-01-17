import React from 'react';

const ExperienceHeading = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <>
      <h1>{data.h1}</h1>
      <p>{data.p}</p>
    </>
  );
};

export default ExperienceHeading;