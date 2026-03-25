import React from 'react';
import { useProjectFilter } from '../../hooks';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB'],
      category: 'fullstack'
    },
    {
      id: 2,
      title: 'Task Management System',
      description: 'Collaborative task management system with real-time updates, team features, and deadline tracking.',
      tags: ['Angular', 'Express', 'PostgreSQL'],
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Interactive analytics dashboard with customizable widgets, real-time data visualization, and reporting.',
      tags: ['React', 'D3.js', 'Chart.js'],
      category: 'frontend'
    },
    {
      id: 4,
      title: 'RESTful API Service',
      description: 'Scalable REST API with authentication, rate limiting, documentation, and comprehensive error handling.',
      tags: ['Node.js', 'Express', 'JWT'],
      category: 'backend'
    },
    {
      id: 5,
      title: 'Real-time Chat App',
      description: 'Real-time chat application with private messaging, group chats, file sharing, and notifications.',
      tags: ['React', 'Socket.io', 'Node.js'],
      category: 'fullstack'
    },
    {
      id: 6,
      title: 'Portfolio Template',
      description: 'Modern, responsive portfolio template with dark mode, animations, and customizable sections.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      category: 'frontend'
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
        
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
