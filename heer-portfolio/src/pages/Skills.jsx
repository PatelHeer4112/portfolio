import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', level: 95 },
  { name: 'CSS', level: 90 },
  { name: 'JavaScript', level: 85 },
  { name: 'React.js', level: 80 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'PHP', level: 70 },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-box">
        <h2>My Skills</h2>
        {skills.map((skill) => (
          <div key={skill.name} className="skill-bar">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="progress">
              <div
                className="progress-fill"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
