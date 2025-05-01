import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-box">
        <h2>Personal Projects</h2>

        <div className="project-card">
          <h3>1. Portfolio Website</h3>
          <p><strong>Tech Stack:</strong> React.js, HTML, CSS</p>
          <p>
            Developed a personal portfolio website using React.js to showcase projects and technical skills.
            Focused on a clean, modular design with reusable components and responsive layout principles.
          </p>
        </div>

        <div className="project-card">
          <h3>2. Task Manager Application</h3>
          <p><strong>Tech Stack:</strong> React.js, JavaScript, CSS</p>
          <p>
            Created a task management web app allowing users to add, edit, and delete tasks.
            Utilized React state management for real-time updates and ensured intuitive user interaction
            through a streamlined interface.
          </p>
        </div>

        <div className="project-card">
          <h3>3. E-commerce Website</h3>
          <p><strong>Tech Stack:</strong> PHP, MySQL, HTML, CSS, JavaScript</p>
          <p>
            Built a complete e-commerce platform featuring product browsing, cart functionality, and user authentication.
            Integrated an admin panel for product management, order tracking, and inventory control. Used PHP and MySQL
            for dynamic backend operations and secure data handling.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
