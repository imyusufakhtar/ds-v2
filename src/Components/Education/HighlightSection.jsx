import React from 'react';

const HighlightSection = ({ data }) => {
  if (!data) {
    return null; // No data to display
  }

  return (
    <section className="highlight-section">
      <div className="highlight-content">
        <div className="highlight-text">
          <h2>{data.h2}</h2>
          {data.p.map((paragraph, index) => {
            if (typeof paragraph === 'string') {
              return <p key={index}>{paragraph}</p>;
            } else {
              return (
                <p key={index}>
                  <strong>{paragraph.text}</strong>{paragraph.strong}
                </p>
              );
            }
          })}
          <a href={data.a.href} target={data.a.target} className="explore-more">
            {data.a.text}
          </a>
        </div>
        <div className="highlight-image">
          <img src={data.img.src} alt={data.img.alt} />
        </div>
      </div>
    </section>
  );
};

export default HighlightSection;
