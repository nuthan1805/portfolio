import React from 'react';

const ProjectCard = ({ title, description, tags, category }) => {
  return (
    <div className="project-card" data-category={category}>
      <div className="project-image">
        <div className="project-placeholder">
          <i className="fas fa-laptop-code"></i>
        </div>
        <div className="project-overlay">
          <div className="project-links">
            <a href="#" className="project-link" aria-label="View project">
              <i className="fas fa-external-link-alt"></i>
            </a>
            <a href="#" className="project-link" aria-label="View code">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
