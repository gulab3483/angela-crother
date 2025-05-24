import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Welcome 1
          </NavLink>
        </li>
        <li>
          <NavLink to="/welcome2" className={({ isActive }) => isActive ? 'active' : ''}>
            Welcome 2
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;