import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Get In Touch</h2>
        <div style={contactGridStyle}>
          <div style={infoContainerStyle}>
            <h3 style={subtitleStyle}>Contact Information</h3>
            <div style={infoItemStyle}>
              <span style={iconStyle}>📧</span>
              <span style={infoTextStyle}>msmrutiranjan35@gmail.com</span>
            </div>
            <div style={infoItemStyle}>
              <span style={iconStyle}>📱</span>
              <span style={infoTextStyle}>+91 8260605124</span>
            </div>
            <div style={infoItemStyle}>
              <span style={iconStyle}>📍</span>
              <span style={infoTextStyle}>India, Odisha</span>
            </div>
            <div style={socialLinksStyle}>
              <a href="https://github.com/Smrutiranjan936" style={socialLinkStyle}>GitHub</a>
              <a href="https://www.linkedin.com/feed/" style={socialLinkStyle}>LinkedIn</a>
              <a href="https://www.instagram.com/" style={socialLinkStyle}><i className="el el-instagram"></i></a>
            </div>
          </div>
          <form style={formStyle}>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={labelStyle}>Name</label>
              <input type="text" id="name" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Email</label>
              <input type="email" id="email" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="subject" style={labelStyle}>Subject</label>
              <input type="text" id="subject" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="message" style={labelStyle}>Message</label>
              <textarea id="message" rows="5" style={textareaStyle}></textarea>
            </div>
            <button type="submit" style={submitButtonStyle}>Send Message</button>
          </form>
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

const contactGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '3rem',
};

const infoContainerStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
};

const subtitleStyle = {
  fontSize: '1.5rem',
  marginBottom: '1.5rem',
  color: '#2c3e50',
};

const infoItemStyle = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
};

const iconStyle = {
  fontSize: '1.5rem',
  marginRight: '1rem',
  color: '#3498db',
};

const infoTextStyle = {
  fontSize: '1.1rem',
  color: '#34495e',
};

const socialLinksStyle = {
  display: 'flex',
  gap: '1rem',
  marginTop: '2rem',
};

const socialLinkStyle = {
  color: '#3498db',
  textDecoration: 'none',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
};

const formStyle = {
  backgroundColor: 'white',
  padding: '2rem',
  borderRadius: '10px',
  boxShadow: '0 5px 15px rgba(0, 0, 0, 0.05)',
};

const formGroupStyle = {
  marginBottom: '1.5rem',
};

const labelStyle = {
  display: 'block',
  marginBottom: '0.5rem',
  color: '#2c3e50',
  fontWeight: '500',
};

const inputStyle = {
  width: '100%',
  padding: '0.8rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '1rem',
};

const textareaStyle = {
  width: '100%',
  padding: '0.8rem',
  border: '1px solid #ddd',
  borderRadius: '5px',
  fontSize: '1rem',
  resize: 'vertical',
};

const submitButtonStyle = {
  backgroundColor: '#3498db',
  color: 'white',
  border: 'none',
  padding: '0.8rem 2rem',
  fontSize: '1.1rem',
  borderRadius: '5px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default Contact;