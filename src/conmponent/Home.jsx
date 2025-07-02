import React from 'react';

const Home = () => {
  return (
    <section id="home" style={homeStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Hi, I'm <span style={highlightStyle}>Smrutiranjan Mallick</span></h1>
        <h2 style={subtitleStyle}>Mern Stack Developer</h2>
        <p style={textStyle}>
          I build exceptional digital experiences with modern technologies.
        </p>
        <button style={buttonStyle}>View My Work</button>
      </div>
      <div style={imageContainerStyle}>
        <div style={imageStyle}></div>
      </div>
    </section>
  );
};

// Internal CSS
const homeStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '6rem 2rem 2rem',
  maxWidth: '1200px',
  margin: '0 auto',
};

const contentStyle = {
  maxWidth: '600px',
};

const titleStyle = {
  fontSize: '3.5rem',
  marginBottom: '1rem',
  lineHeight: '1.2',
};

const highlightStyle = {
  color: '#3498db',
};

const subtitleStyle = {
  fontSize: '2rem',
  color: '#7f8c8d',
  marginBottom: '2rem',
  fontWeight: '400',
};

const textStyle = {
  fontSize: '1.2rem',
  lineHeight: '1.6',
  marginBottom: '2rem',
  color: '#34495e',
};

const buttonStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  padding: '0.8rem 2rem',
  fontSize: '1.1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const imageContainerStyle = {
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  overflow: 'hidden',
  border: '10px solid #ecf0f1',
};

const imageStyle = {
  width: '100%',
  height: '100%',
  backgroundColor: '#bdc3c7',
  backgroundImage: 'url(/img/img1.png)',
  backgroundSize: 'cover',
  backgroundPosition: 'center'
};

export default Home;
