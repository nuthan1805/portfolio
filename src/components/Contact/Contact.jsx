import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (replace with actual API call)
    await new Promise(resolve => setTimeout(resolve, 2000));

    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset form status after 3 seconds
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus(null);
    }, 3000);
  };

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
                  <a href="mailto:nuthan.s@email.com">nuthan.s@email.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span>+91 1234567890</span>
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
              <a href="https://github.com/nuthan-s" className="social-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/nuthan-s" className="social-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://twitter.com/nuthan_s" className="social-btn" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
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
                value={formData.subject}
                onChange={handleChange}
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
                value={formData.message}
                onChange={handleChange}
                required
                placeholder=" "
              ></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            
            <button
              type="submit"
              className="btn btn-primary btn-submit"
              disabled={isSubmitting}
              style={submitStatus === 'success' ? { background: 'linear-gradient(135deg, #22c55e, #16a34a)' } : {}}
            >
              {isSubmitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  <span>Sending...</span>
                </>
              ) : submitStatus === 'success' ? (
                <>
                  <i className="fas fa-check"></i>
                  <span>Sent Successfully!</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
