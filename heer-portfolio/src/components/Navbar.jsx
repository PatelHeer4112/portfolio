import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certification', path: '/certification' },
    { name: 'Skills', path: '/skills' },
    { name: 'Experience', path: '/experience' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">HP</div>
        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.name} className={location.pathname === link.path ? 'active' : ''}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
