// GitHub: https://github.com/nuthan1805
import React from 'react';
import { useProjectFilter } from '../../hooks';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'World Facts',
      description: 'Explore facts about countries — built with React, Node.js and Supabase.',
      tags: ['React', 'Node.js', 'Supabase'],
      category: 'fullstack',
      link: 'https://worldfacts-nuthan.netlify.app/'
    },
    {
      id: 2,
      title: 'Quick Calc Hub',
      description: 'A simple, responsive calculator frontend built using React.',
      tags: ['React', 'Bootstrap'],
      category: 'frontend',
      link: 'https://quick-calc-hub.netlify.app/'
    },
    {
      id: 3,
      title: 'Trace Your Task',
      description: 'Task tracker with frontend and backend using React, Node.js and Supabase.',
      tags: ['React', 'Node.js', 'Supabase'],
      category: 'fullstack',
      link: 'https://trace-your-task.netlify.app/'
    },
    {
      id: 4,
      title: 'Loyalty Management Platform',
      description: 'Full-featured loyalty and rewards platform built with Node.js, Express and React.',
      tags: ['Node.js', 'Express', 'React'],
      category: 'fullstack',
      link: 'https://loyalty-management-platform.netlify.app/'
    }
  ];

  const { activeFilter, filteredProjects, changeFilter } = useProjectFilter(projectsData);

  const filters = [
    { value: 'all', label: 'All' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'backend', label: 'Backend' }
  ];

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>
        
        <div className="projects-filter">
          {filters.map(filter => (
            <button
              key={filter.value}
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => changeFilter(filter.value)}
              data-filter={filter.value}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {filteredProjects.length > 0 ? (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        ) : (
          activeFilter === 'backend' ? (
            <div className="projects-empty" style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <svg width="140" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect x="2" y="20" width="60" height="36" rx="2" fill="#eef2ff" stroke="#c7d2fe" />
                <path d="M10 20c0-6 10-10 22-10s22 4 22 10" fill="#fff7ed" stroke="#ffedd5" />
                <circle cx="20" cy="34" r="3" fill="#60a5fa" />
                <rect x="30" y="30" width="20" height="6" rx="1" fill="#a78bfa" />
                <path d="M8 44h48" stroke="#c7d2fe" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <h3 style={{ marginTop: '1rem' }}>Backend Projects Coming Soon</h3>
              <p style={{ color: '#666', maxWidth: 520, margin: '0.5rem auto' }}>
                I'm working on backend projects — I'll be adding them in the coming days. Stay tuned!
              </p>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          )
        )}
      </div>
    </section>
  );
};

export default Projects;
