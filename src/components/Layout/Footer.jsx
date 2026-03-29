import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-text">&lt;NS/&gt;</span>
            <p>Full Stack Developer crafting digital experiences</p>
          </div>
          
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/nuthan1805" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/nuthan-s-51920a213/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="mailto:nuthanshivaram@gmail.com">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Nuthan S. All rights reserved.</p>
          <p>Designed & Built with <i className="fas fa-heart"></i> by Nuthan S</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
