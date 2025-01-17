import React, { useState, useEffect } from 'react';
import './Projects.css';
import ProjectsContainer from './ProjectsContainer';
import ProjectSummary from './ProjectSummary';
import { Loader } from '../Loader';

const ProjectsMain = () => {
  const [summaryData, setSummaryData] = useState(null);
  const [projectsData, setProjectsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSummaryData = async () => {
      try {
        const response = await fetch("ProjectsData/ProjectSummary.json");
        const result = await response.json();
        setSummaryData(result);
      } catch (error) {
        console.error("Error fetching ProjectSummary data:", error);
      }
    };

    const fetchProjectsData = async () => {
      try {
        const response = await fetch("ProjectsData/ProjectLists.json");
        const result = await response.json();
        setProjectsData(result.projects);
      } catch (error) {
        console.error("Error fetching ProjectLists data:", error);
      }
    };

    // Fetch all data in parallel
    Promise.all([fetchSummaryData(), fetchProjectsData()])
      .then(() => {
        // Ensure loader stays visible for at least 1.5 seconds
        setTimeout(() => setIsLoading(false), 1500);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="content">
      <section className="projects-section">
        <ProjectSummary data={summaryData} />
        <ProjectsContainer data={projectsData} />
      </section>
    </div>
  );
};

export default ProjectsMain;