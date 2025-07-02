import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={containerStyle}>
        <h1 style={logoStyle}>SmrutiRanjan</h1>
        <nav style={navStyle}>
          <ul style={ulStyle}>
            <li style={liStyle}><a href="#home" style={linkStyle}>Home</a></li>
            <li style={liStyle}><a href="#about" style={linkStyle}>About</a></li>
            <li style={liStyle}><a href="#tech" style={linkStyle}>Skills</a></li>
            <li style={liStyle}><a href="#projects" style={linkStyle}>Projects</a></li>
            <li style={liStyle}><a href="#education" style={linkStyle}>Education</a></li>
            <li style={liStyle}><a href="#contact" style={linkStyle}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// Internal CSS
const headerStyle = {
  backgroundColor: '#2c3e50',
  color: 'white',
  padding: '1rem 0',
  position: 'fixed',
  width: '100%',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 2rem',
};

const logoStyle = {
  fontSize: '1.8rem',
  fontWeight: '700',
  margin: 0,
};

const navStyle = {
  display: 'flex',
};

const ulStyle = {
  display: 'flex',
  listStyle: 'none',
  margin: 0,
  padding: 0,
};

const liStyle = {
  marginLeft: '2rem',
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: '500',
  transition: 'color 0.3s ease',
};

export default Header;