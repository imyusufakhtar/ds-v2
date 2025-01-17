import React, { useState, useEffect } from 'react';
import './Education.css';
import EducationSection from './EducationSection';
import HighlightSection from './HighlightSection';
import { Loader } from '../Loader';

const EducationMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loader stays visible for at least 1.2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="content">
        <EducationSection />
        <HighlightSection />
      </div>
    </>
  );
};

export default EducationMain;
