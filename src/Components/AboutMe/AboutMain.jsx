import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import AboutSection from './AboutSection';
import Skills from './Skills';
import { Loader } from '../Loader';

const AboutMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay loader visibility for a minimum of 1.3 seconds
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
        <AboutSection />
        <Skills />
      </div>
    </>
  );
};

export default AboutMain;
