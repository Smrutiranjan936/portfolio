import React from 'react';

const Degree = () => {
  const education = [
    {
      degree: 'Master In Computer Application',
      institution: 'IMIT ',
      year: '2023 - 2025',
      description: 'Specialized in Computer Application and Web Technologies.',
    },
    {
      degree: 'Graduation In Geology Honors',
      institution: 'Nimapada Autonomous College ',
      year: '2020 - 2023',
      description: 'Graduated with honors. Minor in Digital Arts.',
    },
    {
      degree: 'Twelfth In Science',
      institution: 'Nimapada Higher Secondary College ',
      year: '2018 - 2020',
      description: 'Graduated with honors. Minor in Digital Arts.',
    },
  ];

  return (
    <section id="education" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Education</h2>
        <div style={timelineStyle}>
          {education.map((item, index) => (
            <div key={index} style={timelineItemStyle}>
              <div style={timelineDotStyle}></div>
              <div style={timelineContentStyle}>
                <h3 style={degreeStyle}>{item.degree}</h3>
                <h4 style={institutionStyle}>{item.institution}</h4>
                <span style={yearStyle}>{item.year}</span>
                <p style={descriptionStyle}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Internal CSS
const sectionStyle = {
  padding: '5rem 2rem',
  backgroundColor: 'white',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
};

const titleStyle = {
  fontSize: '2.5rem',
  textAlign: 'center',
  marginBottom: '3rem',
  color: '#2c3e50',
};

const timelineStyle = {
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto',
  padding: '0 2rem',
};

const timelineItemStyle = {
  position: 'relative',
  paddingBottom: '3rem',
};

const timelineDotStyle = {
  position: 'absolute',
  left: '-41px',
  top: '0',
  width: '20px',
  height: '20px',
  borderRadius: '50%',
  backgroundColor: '#3498db',
  border: '4px solid #ecf0f1',
};

const timelineContentStyle = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
};

const degreeStyle = {
  fontSize: '1.3rem',
  marginBottom: '0.5rem',
  color: '#2c3e50',
};

const institutionStyle = {
  fontSize: '1.1rem',
  marginBottom: '0.5rem',
  color: '#3498db',
};

const yearStyle = {
  display: 'inline-block',
  backgroundColor: '#e74c3c',
  color: 'white',
  padding: '0.2rem 0.8rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
  marginBottom: '1rem',
};

const descriptionStyle = {
  color: '#7f8c8d',
  lineHeight: '1.6',
};

export default Degree;