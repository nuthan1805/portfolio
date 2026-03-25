import React, { useEffect } from 'react';
import {
  Navbar,
  Footer,
  BackToTop,
  AnimatedBackground,
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Services,
  Contact
} from './components';
import './styles.css';

function App() {
  useEffect(() => {
    // Console log for easter egg
    console.log('%c🚀 Welcome to Nuthan\'s Portfolio!', 'font-size: 20px; font-weight: bold; color: #6366f1;');
    console.log('%c💻 Full Stack Developer | Tech Enthusiast', 'font-size: 14px; color: #64748b;');
    
    // Smooth scroll for all anchor links
    const handleAnchorClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="App">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
}

export default App;
