import React, { useState, useEffect } from 'react';
import './Experience.css';
import ExperienceHeading from './ExperienceHeading';
import ExperienceImage from './ExperienceImage';
import ExperienceLists from './ExperienceLists';
import { Loader } from '../Loader';

const ExperienceMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loader stays visible for at least 1.3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1300);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="content">
        <section className="experience-section">
          <ExperienceImage />
          <div className="experience-text">
            <ExperienceHeading />
            <ExperienceLists />
          </div>
        </section>
      </div>
    </>
  );
};

export default ExperienceMain;
