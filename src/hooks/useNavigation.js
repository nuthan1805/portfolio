import { useState, useEffect } from 'react';

/**
 * Custom hook for navigation state and scroll effects
 */
export const useNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;

      // Add scrolled class
      setIsScrolled(currentScroll > 50);

      // Hide/show navbar on scroll
      if (navbar) {
        if (currentScroll > lastScroll && currentScroll > 500) {
          navbar.style.transform = 'translateY(-100%)';
        } else {
          navbar.style.transform = 'translateY(0)';
        }
      }

      lastScroll = currentScroll;

      // Update active section
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    activeSection,
    toggleMobileMenu,
    closeMobileMenu
  };
};
