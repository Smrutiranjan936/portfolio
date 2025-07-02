import React from 'react';

const Technology = () => {
  const technologies = [
    { name: 'HTML5', icon: '🟠' },
    { name: 'CSS3', icon: '🔵' },
    { name: 'JavaScript', icon: '🟡' },
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Git', icon: '🔶' },
    { name: 'DataBase', icon: '🎀' },
    { name: 'Mongosh', icon: '🔷' },
  ];

  return (
    <section id="tech" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>My Skills</h2>
        <div style={techGridStyle}>
          {technologies.map((tech, index) => (
            <div key={index} style={techItemStyle}>
              <div style={techIconStyle}>{tech.icon}</div>
              <h3 style={techNameStyle}>{tech.name}</h3>
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

const techGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
  gap: '2rem',
};

const techItemStyle = {
  backgroundColor: '#f8f9fa',
  padding: '1.5rem',
  borderRadius: '10px',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
};

const techIconStyle = {
  fontSize: '3rem',
  marginBottom: '1rem',
};

const techNameStyle = {
  fontSize: '1.2rem',
  color: '#2c3e50',
  margin: 0,
};

export default Technology;