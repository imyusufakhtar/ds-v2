import React, { useState, useEffect } from 'react';
import './Resume.css';
import ResumeEducation from './ResumeEducation';
import ResumeExperience from './ResumeExperience';
import ResumeProjects from './ResumeProjects';
import ResumeSidebar from './ResumeSidebar';
import ResumeSkills from './ResumeSkills';
import { Loader } from '../Loader';

const ResumeMain = () => {
  const [resumeData, setResumeData] = useState({
    sidebar: null,
    projects: null,
    experience: null,
    skills: null,
    education: null,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [sidebarData, projectsData, experienceData, skillsData, educationData] = await Promise.all([
          fetch("ResumeData/ResumeSidebar.json").then((res) => res.json()),
          fetch("ResumeData/ResumeProject.json").then((res) => res.json()),
          fetch("ResumeData/ResumeExp.json").then((res) => res.json()),
          fetch("ResumeData/ResumeSkills.json").then((res) => res.json()),
          fetch("ResumeData/ResumeEducation.json").then((res) => res.json()),
        ]);

        setResumeData({
          sidebar: sidebarData,
          projects: projectsData,
          experience: experienceData,
          skills: skillsData,
          education: educationData,
        });

        // Ensure loader stays visible for at least 1.5 seconds
        setTimeout(() => setIsLoading(false), 1500);
      } catch (error) {
        console.error("Error fetching resume data:", error);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="content">
      <div className="portfolio-resume-container">
        <ResumeSidebar data={resumeData.sidebar} />
        <div className="portfolio-resume-content">
          <ResumeExperience data={resumeData.experience} />
          <ResumeProjects data={resumeData.projects} />
          <ResumeSkills data={resumeData.skills} />
          <ResumeEducation data={resumeData.education} />
        </div>
      </div>
    </div>
  );
};

export default ResumeMain;