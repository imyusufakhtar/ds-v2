import React from 'react';

const SettingLanguage = () => {
  const languages = ["Arabic", "Urdu", "Turkish"];

  return (
    <div className="settings-card">
      <div className="settings-content">
        <h2 className="settings-title">Language</h2>
        <p className="settings-description">
          Select your preferred language for the interface to ensure a comfortable user experience.
        </p>
        {languages.map((language, index) => (
          <span key={index} className="settings-link">
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SettingLanguage;