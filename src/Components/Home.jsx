import React, { useState, useEffect } from 'react';
import './Home.css';
import './Loader.css';
import { Loader } from './Loader';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const loadData = async () => {
      try {
        // Delay loader visibility for a minimum of 1.5 seconds
        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Fetch data from the API
        const response = await fetch("OtherData/HomeData.json");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message); // Set error message
      } finally {
        setIsLoading(false); // Stop the loader
      }
    };

    loadData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="error-message">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return null; // Render nothing if data is null and no error occurred
  }

  const { h1, p, img } = data;

  return (
    <div className="content">
      <section className="intro-section">
        <div className="intro-text">
          <h1>{h1}</h1>
          <p>{p}</p>
          <div className="social-links">
            <a
              href="https://github.com/imyusufakhtar"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-github"
            ></a>
            <a
              href="https://www.linkedin.com/in/imdyusuf/"
              target="_blank"
              rel="noopener noreferrer"
              className="fab fa-linkedin"
            ></a>
            <a
              href="https://leetcode.com/u/imyusufakhtar/"
              target="_blank"
              rel="noopener noreferrer"
              className="fa fa-external-link"
            ></a>
          </div>
          <a href="mailto:mdyusuf2790@gmail.com" className="button">
            Contact Me
          </a>
        </div>
        <img src={img?.src} alt={img?.alt} className="introduction-image" />
      </section>
    </div>
  );
};

export default Home;
