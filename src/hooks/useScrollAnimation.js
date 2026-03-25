import { useEffect, useRef } from 'react';

/**
 * Custom hook for scroll-triggered animations using Intersection Observer
 */
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: options.threshold || 0.1,
      ...options
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          
          // Handle stagger animations
          if (entry.target.classList.contains('stagger-container')) {
            const items = entry.target.querySelectorAll('.stagger-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('visible');
              }, index * 100);
            });
          }
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [options.threshold]);

  return elementRef;
};
