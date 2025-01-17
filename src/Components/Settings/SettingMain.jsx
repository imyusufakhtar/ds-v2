import React, { useState, useEffect } from 'react';
import './Setting.css';
import SettingHeading from './SettingHeading';
import SettingLanguage from './SettingLanguage';
import SettingTheme from './SettingTheme';
import { Loader } from '../Loader';

const SettingMain = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure loader stays visible for at least 0.7 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <div className="content">
        <section className="settings-section">
          <SettingHeading />
          <div className="settings-container">
            <SettingTheme />
            <SettingLanguage />
          </div>
        </section>
      </div>
    </>
  );
};

export default SettingMain;