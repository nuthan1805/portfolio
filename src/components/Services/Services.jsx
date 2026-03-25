import React from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const services = [
    {
      id: 1,
      icon: 'fas fa-laptop-code',
      title: 'Web Development',
      description: 'Building responsive and performant web applications using modern frameworks and best practices.'
    },
    {
      id: 2,
      icon: 'fas fa-mobile-alt',
      title: 'Responsive Design',
      description: 'Creating beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.'
    },
    {
      id: 3,
      icon: 'fas fa-server',
      title: 'Backend Development',
      description: 'Developing robust and scalable server-side applications with secure APIs and database management.'
    },
    {
      id: 4,
      icon: 'fas fa-cloud',
      title: 'Cloud Deployment',
      description: 'Deploying and managing applications on cloud platforms with CI/CD pipelines and containerization.'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Offer</span>
          <h2 className="section-title">Services</h2>
        </div>
        
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
