import { useState } from 'react';

/**
 * Custom hook for project filtering functionality
 */
export const useProjectFilter = (projects) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const changeFilter = (filter) => {
    setActiveFilter(filter);
  };

  return {
    activeFilter,
    filteredProjects,
    changeFilter
  };
};
