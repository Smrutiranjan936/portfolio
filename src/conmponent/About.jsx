import React from 'react';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>About Me</h2>
        <div style={contentStyle}>
          <div style={textContainerStyle}>
            <p style={textStyle}>
              Hello! I'm Smrutiranjan Mallick, a passionate and dedicated Web Developer based in India.
            </p>
            <p style={textStyle}>
                <p>I specialize in creating modern, responsive, and user-friendly websites using technologies like HTML, CSS, JavaScript, React, and PHP. With hands-on experience in both front-end and back-end development, I enjoy turning complex problems into simple, elegant solutions.</p>
                <p>
                  Whether it's building a personal blog, an e-commerce platform, or a dynamic web application, I focus on writing clean code and delivering performance-optimized results. I'm always eager to learn new technologies and keep up with the latest trends in web development.
                </p>
                <p>
                  Beyond coding, I love exploring tech innovations, sharing knowledge, and collaborating on creative projects.
                </p>
                <p>
                  Let's connect and build something great together!
                </p>
            </p>
            
            <div style={infoStyle}>
              <div style={infoItemStyle}>
                <span style={infoLabelStyle}>Name:</span>
                <span style={infoValueStyle}>Smrutiranjan Mallick</span>
              </div>
              <div style={infoItemStyle}>
                <span style={infoLabelStyle}>Email:</span>
                <span style={infoValueStyle}>msmrutiranjan35@gmail.com</span>
              </div>
              <div style={infoItemStyle}>
                <span style={infoLabelStyle}>Experience:</span>
                <span style={infoValueStyle}>6 Month</span>
              </div>
              <div style={infoItemStyle}>
                <span style={infoLabelStyle}>Location:</span>
                <span style={infoValueStyle}>India, Odisha</span>
              </div>
            </div>
          </div>
          <div style={imageStyle}></div>
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
  position: 'relative',
};

const contentStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
};

const textContainerStyle = {
  flex: 1,
};

const textStyle = {
  fontSize: '1.1rem',
  lineHeight: '1.8',
  color: '#34495e',
  marginBottom: '1.5rem',
};

const infoStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '1rem',
  marginTop: '2rem',
};

const infoItemStyle = {
  display: 'flex',
};

const infoLabelStyle = {
  fontWeight: '600',
  marginRight: '0.5rem',
  color: '#2c3e50',
};

const infoValueStyle = {
  color: '#7f8c8d',
};

const imageStyle = {
  width: '350px',
  height: '350px',
  borderRadius: '10px',
  backgroundColor: '#bdc3c7',
  backgroundImage: 'url("https://via.placeholder.com/350")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
};

export default About;