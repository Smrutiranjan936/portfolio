import React from 'react';

const Project = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-featured online store with cart functionality and payment processing.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and CSS animations.',
      tags: ['React', 'CSS', 'JavaScript'],
    },
    {
      title: 'Task Management App',
      description: 'A productivity app for organizing tasks with drag-and-drop functionality.',
      tags: ['React', 'Firebase', 'Material UI'],
    },
  ];

  return (
    <section id="projects" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>My Projects</h2>
        <div style={projectsGridStyle}>
          {projects.map((project, index) => (
            <div key={index} style={projectCardStyle}>
              <div style={projectImageStyle}></div>
              <div style={projectContentStyle}>
                <h3 style={projectTitleStyle}>{project.title}</h3>
                <p style={projectDescriptionStyle}>{project.description}</p>
                <div style={tagsStyle}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} style={tagStyle}>{tag}</span>
                  ))}
                </div>
                <div style={buttonsStyle}>
                  <button style={demoButtonStyle}>Live Demo</button>
                  <button style={codeButtonStyle}>View Code</button>
                </div>
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
  backgroundColor: '#f9f9f9',
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

const projectsGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
  gap: '2rem',
};

const projectCardStyle = {
  backgroundColor: 'white',
  borderRadius: '10px',
  overflow: 'hidden',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease',
};

const projectImageStyle = {
  height: '200px',
  backgroundColor: '#bdc3c7',
  backgroundImage: 'url("https://via.placeholder.com/350x200")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const projectContentStyle = {
  padding: '1.5rem',
};

const projectTitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '0.5rem',
  color: '#2c3e50',
};

const projectDescriptionStyle = {
  color: '#7f8c8d',
  marginBottom: '1rem',
  lineHeight: '1.6',
};

const tagsStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  marginBottom: '1.5rem',
};

const tagStyle = {
  backgroundColor: '#ecf0f1',
  color: '#2c3e50',
  padding: '0.3rem 0.8rem',
  borderRadius: '20px',
  fontSize: '0.8rem',
};

const buttonsStyle = {
  display: 'flex',
  gap: '1rem',
};

const demoButtonStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

const codeButtonStyle = {
  backgroundColor: 'transparent',
  color: '#3498db',
  border: '1px solid #3498db',
  padding: '0.5rem 1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Project;