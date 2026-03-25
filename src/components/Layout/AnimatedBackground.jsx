import React from 'react';

const AnimatedBackground = () => {
  return (
    <div className="bg-animation">
      <div className="floating-shapes">
        {[...Array(10)].map((_, index) => (
          <span key={index}></span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;
