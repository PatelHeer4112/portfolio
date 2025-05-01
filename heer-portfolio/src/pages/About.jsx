import React from 'react';
import './About.css';
import heerImage from '../assets/heer.png'; 

const About = () => {
  return (
    <div className="about-container">
      <div className="about-box">
        <div className="about-left">
          <img src={heerImage} alt="Heer" className="about-img" />
        </div>
        <div className="about-right">
          <h2>About Me</h2>
          <p>
            I am a Computer Science student with a strong foundation in full-stack web development.
            My skills include front-end technologies like HTML, CSS, JavaScript, React.js, and Bootstrap,
            along with backend experience in PHP and Python. I take pride in building clean, functional
            user interfaces and full web applications. Dedicated to writing efficient, maintainable code,
            I am eager to contribute to innovative projects in a professional, growth-focused environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
