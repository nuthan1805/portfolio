// GitHub: https://github.com/nuthan1805
import React from 'react';
import { useScrollAnimation } from '../../hooks';

const About = () => {
  const contentRef = useScrollAnimation();

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get To Know Me</span>
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="about-content fade-in" ref={contentRef}>
          <div className="about-image">
            <div className="image-frame">
              <div className="about-img-placeholder">
                <i className="fas fa-code"></i>
              </div>
              <div className="frame-decoration"></div>
            </div>
            <div className="experience-badge">
              <span className="exp-number">3+</span>
              <span className="exp-text">Years of<br/>Experience</span>
            </div>
          </div>
          
          <div className="about-text">
            <h3>Full Stack Developer based in India</h3>
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern, 
              responsive web applications. My journey in tech has equipped me with a 
              strong foundation in both frontend and backend technologies.
            </p>
            <p>
              I love solving complex problems and turning creative ideas into reality 
              through clean, efficient code. When I'm not coding, I'm exploring new 
              technologies and contributing to open-source projects.
            </p>
            
            <div className="about-info">
              <div className="info-item">
                <i className="fas fa-graduation-cap"></i>
                <div>
                  <span className="info-label">Education</span>
                  <span className="info-value">Electrical and Electronics Engineering</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-value">Bengaluru</span>
                </div>
              </div>
              <div className="info-item">
                <i className="fas fa-briefcase"></i>
                <div>
                  <span className="info-label">Status</span>
                  <span className="info-value">Open to Opportunities</span>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">
              <span>Let's Connect</span>
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
