import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: create a separate CSS file for the Navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        <li>
          <Link to="/fullstack-development">Full Stack Development</Link>
        </li>
        <li>
          <Link to="/data-science">Data Science</Link>
        </li>
        <li>
          <Link to="/cyber-security">Cyber Security</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
