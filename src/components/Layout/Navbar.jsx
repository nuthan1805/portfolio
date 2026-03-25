import React from 'react';
import { useNavigation, useTheme } from '../../hooks';

const Navbar = () => {
  const { isScrolled, isMobileMenuOpen, activeSection, toggleMobileMenu, closeMobileMenu } = useNavigation();
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' }
  ];

  const handleLinkClick = (e) => {
    e.preventDefault();
    const target = document.querySelector(e.currentTarget.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMobileMenu();
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            <span className="logo-text">&lt;NS/&gt;</span>
          </a>
          
          <ul className="nav-links">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link ${activeSection === link.href.slice(1) ? 'active' : ''}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button 
              className="theme-toggle" 
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
            </button>
            
            <button 
              className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className="mobile-nav-link"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
