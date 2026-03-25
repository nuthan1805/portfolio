import React from 'react';

const SkillCard = ({ icon, name, level }) => {
  console.log('SkillCard rendering:', { icon, name, level });
  
  return (
    <div className="skill-card">
      <div className="skill-icon">
        <i className={icon}></i>
      </div>
      <span className="skill-name">{name}</span>
      <div className="skill-level">
        <div className="level-bar" style={{ width: level }}></div>
      </div>
    </div>
  );
};

export default SkillCard;
