// GitHub: https://github.com/nuthan1805
import React, { useState } from 'react';

const Contact = () => {


  return (
    <section id="contact" className="contact section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>
        
        <div className="contact-container">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Let's work together</h3>
            <p>
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision. Feel free to reach out!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Email</span>
                  <a href="mailto:nuthanshivaram@gmail.com">nuthanshivaram@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span>+91 9380504362</span>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Location</span>
                  <span>India</span>
                </div>
              </div>
            </div>
            
            <div className="contact-social">
              <a href="https://github.com/nuthan1805" className="social-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nuthan-s-51920a213/" className="social-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://x.com/home" className="social-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <form className="contact-form" action="https://formspree.io/f/mgopazgo" method="POST">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder=" "
              />
              <label htmlFor="name">Your Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder=" "
              />
              <label htmlFor="email">Your Email</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder=" "
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-submit"
            >
              <span>Send Message</span>
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
