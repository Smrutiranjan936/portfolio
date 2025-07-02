import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={aboutStyle}>
            <h3 style={titleStyle}>John Doe</h3>
            <p style={textStyle}>
              A passionate frontend developer creating modern web experiences.
            </p>
          </div>
          <div style={linksStyle}>
            <h4 style={linksTitleStyle}>Quick Links</h4>
            <ul style={ulStyle}>
              <li style={liStyle}><a href="#home" style={linkStyle}>Home</a></li>
              <li style={liStyle}><a href="#about" style={linkStyle}>About</a></li>
              <li style={liStyle}><a href="#tech" style={linkStyle}>Skills</a></li>
              <li style={liStyle}><a href="#projects" style={linkStyle}>Projects</a></li>
              <li style={liStyle}><a href="#education" style={linkStyle}>Education</a></li>
              <li style={liStyle}><a href="#contact" style={linkStyle}>Contact</a></li>
            </ul>
          </div>
          <div style={contactInfoStyle}>
            <h4 style={linksTitleStyle}>Contact Info</h4>
            <p style={contactTextStyle}>john@example.com</p>
            <p style={contactTextStyle}>+1 (555) 123-4567</p>
            <p style={contactTextStyle}>San Francisco, CA</p>
          </div>
        </div>
        <div style={copyrightStyle}>
          <p style={copyrightTextStyle}>
            &copy; {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

// Internal CSS
const footerStyle = {
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '3rem 0 1rem',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  marginBottom: '2rem',
};

const aboutStyle = {
  maxWidth: '300px',
};

const titleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1rem',
};

const textStyle = {
  lineHeight: '1.6',
  color: '#bdc3c7',
};

const linksStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const linksTitleStyle = {
  fontSize: '1.2rem',
  marginBottom: '1rem',
};

const ulStyle = {
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  marginBottom: '0.5rem',
};

const linkStyle = {
  color: '#bdc3c7',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
};

const contactInfoStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const contactTextStyle = {
  color: '#bdc3c7',
  marginBottom: '0.5rem',
};

const copyrightStyle = {
  borderTop: '1px solid #34495e',
  paddingTop: '1.5rem',
  textAlign: 'center',
};

const copyrightTextStyle = {
  color: '#bdc3c7',
  margin: 0,
};

export default Footer;