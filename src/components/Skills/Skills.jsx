// GitHub: https://github.com/nuthan1805
import React from 'react';
import SkillCard from './SkillCard';

const Skills = () => {
  const frontendSkills = [
    { icon: 'fab fa-html5', name: 'HTML5', level: '95%' },
    { icon: 'fab fa-css3-alt', name: 'CSS3', level: '90%' },
    { icon: 'fab fa-js-square', name: 'JavaScript', level: '85%' },
    { icon: 'fab fa-react', name: 'React.js', level: '80%' },
    { icon: 'fab fa-angular', name: 'Angular', level: '75%' },
    { icon: 'fab fa-bootstrap', name: 'Bootstrap', level: '85%' }
  ];

  const backendSkills = [
    { icon: 'fab fa-java', name: 'Java', level: '70%' },
    { icon: 'fab fa-node-js', name: 'Node.js', level: '80%' },
    { icon: 'fas fa-feather', name: 'FeathersJS', level: '75%' },
    { icon: 'fas fa-server', name: 'Express.js', level: '80%' },
    { icon: 'fas fa-code', name: 'REST API', level: '85%' },
    { icon: 'fas fa-shield-alt', name: 'Authentication', level: '75%' }
  ];

  const databaseTools = [
    { icon: 'fas fa-database', name: 'MongoDB', level: '80%' },
    { icon: 'fas fa-database', name: 'MySQL', level: '75%' },
    { icon: 'fab fa-git-alt', name: 'Git', level: '85%' },
    { icon: 'fab fa-docker', name: 'Docker', level: '70%' },
    { icon: 'fab fa-aws', name: 'AWS', level: '65%' },
    { icon: 'fas fa-cube', name: 'Postman', level: '80%' }
  ];

  console.log('Skills component rendering');
  console.log('Frontend skills:', frontendSkills.length);

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">What I Know</span>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>

        <div className="skills-container">
          {/* Frontend Development */}
          <div className="skills-category">
            <div className="category-header">
              <i className="fas fa-laptop-code"></i>
              <h3>Frontend Development</h3>
            </div>
            <div className="skills-grid">
              {frontendSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          {/* Backend Development */}
          <div className="skills-category">
            <div className="category-header">
              <i className="fas fa-server"></i>
              <h3>Backend Development</h3>
            </div>
            <div className="skills-grid">
              {backendSkills.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>

          {/* Database & Tools */}
          <div className="skills-category">
            <div className="category-header">
              <i className="fas fa-database"></i>
              <h3>Database & Tools</h3>
            </div>
            <div className="skills-grid">
              {databaseTools.map((skill, index) => (
                <SkillCard
                  key={`${skill.name}-${index}`}
                  icon={skill.icon}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
