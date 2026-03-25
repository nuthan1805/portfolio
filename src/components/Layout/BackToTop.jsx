import React from 'react';
import { useBackToTop } from '../../hooks';

const BackToTop = () => {
  const { isVisible, scrollToTop } = useBackToTop();

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  );
};

export default BackToTop;
