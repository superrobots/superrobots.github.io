import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav style={{ marginTop: 0 }}>
      <ul className="tab-nav">
        <li><NavLink to="/" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Home</NavLink></li>
        <li><NavLink to="/projects" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Projects</NavLink></li>
        <li><NavLink to="/gallery" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Gallery</NavLink></li>
        <li><NavLink to="/awards" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Awards</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "tab-link active" : "tab-link"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}

function Header() {
  return (
    <header>
      <h1>SuperRobots Team</h1>
      <p>Innovating the future, one robot at a time.</p>
      <Navigation />
    </header>
  );
}

export default Header;
