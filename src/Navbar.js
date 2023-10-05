import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <div className="profile-icon">Profile Icon</div>
    </nav>
  );
}

export default Navbar;
