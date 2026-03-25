import React from 'react';
import { useTypingEffect, useScrollAnimation } from '../../hooks';

const Hero = () => {
  const titles = [
' Full Stack Developer',
    ' Frontend Enthusiast',
    ' Backend Developer',
    ' Problem Solver',
    ' UI/UX Designer',
    ' Tech Enthusiast'
  ];

  const displayText = useTypingEffect(titles);

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Available for opportunities
          </div>
          
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">Nuthan S</span>
            <span className="title-wrapper">
              <span className="title-static">A</span>
              <span className="title-dynamic">{displayText}</span>
              <span className="cursor">|</span>
            </span>
          </h1>
          
          <p className="hero-description">
            Passionate Full Stack Developer crafting beautiful, scalable web applications 
            with modern technologies. Turning ideas into elegant digital experiences.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <i className="fas fa-arrow-right"></i>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Get In Touch</span>
              <i className="fas fa-paper-plane"></i>
            </a>
          </div>
          
          <div className="hero-social">
            <a href="https://github.com/nuthan-s" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/nuthan-s" className="social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:nuthan.s@email.com" className="social-link" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="profile-card">
            <div className="profile-image">
              <div className="image-placeholder">
                <i className="fas fa-user"></i>
              </div>
              <div className="profile-ring"></div>
              <div className="profile-ring ring-2"></div>
            </div>
            
            <div className="code-snippets">
              <div className="code-block code-1">
                <code>&lt;Developer /&gt;</code>
              </div>
              <div className="code-block code-2">
                <code>const passion = "coding";</code>
              </div>
              <div className="code-block code-3">
                <code>build(amazing_things);</code>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
