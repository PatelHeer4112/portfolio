import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImg from '../assets/heer.png';

const Home = () => {
  return (
    <section className="home-container">
      <div className="home-box">
        <div className="home-left">
          <h1>Hi, I'm Heer Patel</h1>
          <h2>Full Stack Developer</h2>
          <p>
            I build exceptional digital experiences that are fast, accessible, and visually appealing.
          </p>
          <div className="home-buttons">
            <Link to="/about">
              <button className="btn btn-primary">Contact Me</button>
            </Link>
            <Link to="/projects">
              <button className="btn btn-outline">View Work</button>
            </Link>
          </div>
        </div>

        <div className="home-right">
          <img src={profileImg} alt="Heer Patel" className="profile-img" />
        </div>
      </div>
    </section>
  );
};

export default Home;
