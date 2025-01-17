import React, { useState, useEffect } from 'react';
import './Home.css';
import './Loader.css';
import { Loader } from './Loader';

const Home = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Delay loader visibility for a minimum of 1.2 seconds
    setTimeout(() => setIsLoading(false), 1200);

    // Fetch data from the API
    fetch("OtherData/HomeData.json")
      .then((response) => response.json())
      .then((result) => setData(result))
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Stop the loader in case of an error
      });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (!data) return null; // Render nothing if data is still null after the loader

  const { h1, p, img } = data;

  return (
    <>
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
                href="https://x.com/imyusufakhtar"
                target="_blank"
                rel="noopener noreferrer"
                className="fab fa-twitter"
              ></a>
            </div>
            <a href="mailto:mdyusuf2790@gmail.com" className="button">
              Contact Me
            </a>
          </div>
          <img src={img.src} alt={img.alt} className="introduction-image" />
        </section>
      </div>
    </>
  );
};

export default Home;
