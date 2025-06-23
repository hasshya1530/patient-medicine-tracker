import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Login</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/appointment">Book Appointment</Link>
      <Link to="/prescription">Prescriptions</Link>
    </nav>
  );
}

export default Navbar;