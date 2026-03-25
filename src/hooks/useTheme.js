import { useState, useEffect } from 'react';

/**
 * Custom hook for theme management (light/dark mode)
 */
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Check localStorage or default to light
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    // Update document attribute and localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Add smooth transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
