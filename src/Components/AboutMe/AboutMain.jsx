import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import AboutSection from './AboutSection';
import Skills from './Skills';
import { Loader } from '../Loader';

const AboutMain = () => {
  const [aboutData, setAboutData] = useState(null);
  const [skillsData, setSkillsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("AboutMeData/AboutMe.json"); // Replace with your API endpoint
        const result = await response.json();
        setAboutData(result);
      } catch (error) {
        console.error('Error fetching AboutMe data:', error);
      }
    };

    const fetchSkillsData = async () => {
      try {
        const response = await fetch("AboutMeData/AboutSkills.json"); // Replace with your API endpoint
        const result = await response.json();
        setSkillsData(result);
      } catch (error) {
        console.error('Error fetching AboutSkills data:', error);
      }
    };

    // Fetch both datasets
    fetchAboutData();
    fetchSkillsData();
  }, []);

  useEffect(() => {
    // Show the loader for at least 1.3 seconds, even if data is loaded earlier
    const timer = setTimeout(() => {
      if (aboutData && skillsData) {
        setIsLoading(false);
      }
    }, 1300);

    return () => clearTimeout(timer);
  }, [aboutData, skillsData]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="content">
      <AboutSection data={aboutData} />
      <Skills data={skillsData} />
    </div>
  );
};

export default AboutMain;
