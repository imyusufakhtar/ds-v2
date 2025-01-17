import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectsContainer from './ProjectsContainer';
import ProjectSummary from './ProjectSummary';
import { Loader } from '../Loader';

const ProjectsMain = () => {
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
        <section className="projects-section">
          <ProjectSummary />
          <ProjectsContainer />
        </section>
      </div>
    </>
  );
};

export default ProjectsMain;
