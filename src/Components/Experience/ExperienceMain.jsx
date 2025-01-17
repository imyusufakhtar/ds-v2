import React, { useState, useEffect } from 'react';
import './Experience.css';
import ExperienceHeading from './ExperienceHeading';
import ExperienceImage from './ExperienceImage';
import ExperienceLists from './ExperienceLists';
import { Loader } from '../Loader';

const ExperienceMain = () => {
  const [headingData, setHeadingData] = useState(null);
  const [imageData, setImageData] = useState(null);
  const [listData, setListData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchHeadingData = async () => {
      try {
        const response = await fetch("ExperienceData/ExperienceHeading.json");
        const result = await response.json();
        setHeadingData(result);
      } catch (error) {
        console.error('Error fetching ExperienceHeading data:', error);
      }
    };

    const fetchImageData = async () => {
      try {
        const response = await fetch("ExperienceData/ExperienceImage.json");
        const result = await response.json();
        setImageData(result);
      } catch (error) {
        console.error('Error fetching ExperienceImage data:', error);
      }
    };

    const fetchListData = async () => {
      try {
        const response = await fetch("ExperienceData/ExperienceLists.json");
        const result = await response.json();
        setListData(result);
      } catch (error) {
        console.error('Error fetching ExperienceLists data:', error);
      }
    };

    // Fetch all data in parallel
    Promise.all([fetchHeadingData(), fetchImageData(), fetchListData()])
      .then(() => {
        // Ensure loader stays visible for at least 1.3 seconds
        setTimeout(() => setIsLoading(false), 1300);
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="content">
      <section className="experience-section">
        <ExperienceImage data={imageData} />
        <div className="experience-text">
          <ExperienceHeading data={headingData} />
          <ExperienceLists data={listData} />
        </div>
      </section>
    </div>
  );
};

export default ExperienceMain;