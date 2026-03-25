import React from 'react';
import TimelineItem from './TimelineItem';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: 'work',
      title: 'Full Stack Developer',
      company: 'Tech Solutions Inc.',
      date: '2024 - Present',
      description: 'Leading development of enterprise web applications using modern technologies. Implementing scalable solutions and mentoring junior developers.',
      tags: ['React', 'Node.js', 'AWS', 'MongoDB']
    },
    {
      id: 2,
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Agency Co.',
      date: '2023 - 2024',
      description: 'Developed responsive web applications and collaborated with design team to create engaging user experiences.',
      tags: ['React', 'TypeScript', 'Tailwind CSS']
    },
    {
      id: 3,
      type: 'education',
      title: 'Bachelor of Computer Science',
      company: 'University of Technology',
      date: '2019 - 2023',
      description: 'Graduated with honors. Focused on software engineering, algorithms, and web development.',
      tags: null
    }
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Journey</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>
        
        <div className="timeline-container">
          <div className="timeline">
            {experiences.map(exp => (
              <TimelineItem key={exp.id} {...exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
