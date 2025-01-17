import React, { useState, useEffect } from 'react';
import './Education.css';
import EducationSection from './EducationSection';
import HighlightSection from './HighlightSection';
import { Loader } from '../Loader';

const EducationMain = () => {
  const [educationData, setEducationData] = useState(null);
  const [highlightData, setHighlightData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEducationData = async () => {
      try {
        const response = await fetch("EducationsData/EducationSection.json"); // Replace with your API endpoint
        const result = await response.json();
        setEducationData(result);
      } catch (error) {
        console.error('Error fetching EducationSection data:', error);
      }
    };

    const fetchHighlightData = async () => {
      try {
        const response = await fetch("EducationsData/HighlightSection.json"); // Replace with your API endpoint
        const result = await response.json();
        setHighlightData(result);
      } catch (error) {
        console.error('Error fetching HighlightSection data:', error);
      }
    };

    // Fetch both datasets
    fetchEducationData();
    fetchHighlightData();
  }, []);

  useEffect(() => {
    // Show the loader for at least 1.2 seconds, even if data is loaded earlier
    const timer = setTimeout(() => {
      if (educationData && highlightData) {
        setIsLoading(false);
      }
    }, 1200);

    return () => clearTimeout(timer);
  }, [educationData, highlightData]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="content">
      <EducationSection data={educationData} />
      <HighlightSection data={highlightData} />
    </div>
  );
};

export default EducationMain;
