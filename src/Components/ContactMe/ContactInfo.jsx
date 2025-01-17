import React, { useState, useEffect } from 'react';

const ContactInfo = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data for contact info
    const fetchData = async () => {
      try {
        const response = await fetch("OtherData/ContactInfo.json"); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching contact info:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return null; // Return nothing if data is not yet loaded
  }

  return (
    <div className="contact-info">
      <h2>{data.h2}</h2>
      {data.p.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <div className="social-media">
        {data.socialMedia.map((item, index) => (
          <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" title={item.platform}>
            <i className={item.iconClass}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;