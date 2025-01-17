import React, { useState, useEffect } from 'react';
import './Resume.css';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeSidebar from './ResumeSidebar';
import ResumeSkills from './ResumeSkills';
import { Loader } from '../Loader';

const ResumeMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loader stays visible for at least 1.5 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="content">
        <div className="portfolio-resume-container">
          <ResumeSidebar />
          <div className="portfolio-resume-content">
            <ResumeExperience />
            <ResumeProjects />
            <ResumeSkills />
            <ResumeEducation />
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeMain;
