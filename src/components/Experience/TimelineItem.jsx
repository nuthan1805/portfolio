import React from 'react';

const TimelineItem = ({ type, title, company, date, description, tags }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-icon">
        <i className={type === 'work' ? 'fas fa-briefcase' : 'fas fa-graduation-cap'}></i>
      </div>
      
      <div className="timeline-content">
        <span className={`timeline-badge ${type === 'education' ? 'education' : ''}`}>
          {type === 'work' ? 'Work' : 'Education'}
        </span>
        <h3>{title}</h3>
        <span className="timeline-company">{company}</span>
        <span className="timeline-date">
          <i className="fas fa-calendar-alt"></i> {date}
        </span>
        <p>{description}</p>
        {tags && (
          <div className="timeline-tags">
            {tags.map((tag, index) => (
              <span key={index}>{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
