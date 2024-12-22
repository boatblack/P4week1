// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Volmaan Sol</h1>
      </div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/cart">   Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;
