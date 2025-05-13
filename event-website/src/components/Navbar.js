import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#1e1e2f',
  };

  const logoStyle = {
    color: '#fff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  const navLinksStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '1.5rem',
    margin: 0,
    padding: 0,
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 500,
  };

  const linkHoverStyle = {
    textDecoration: 'underline',
  };

  return (
    <nav style={navStyle}>
      <div className="navbar-logo">
        <Link to="/" style={logoStyle}>EventHorizon</Link>
      </div>
      <ul style={navLinksStyle}>
        <li>
          <Link to="/" style={linkStyle}>Home</Link>
        </li>
        <li>
          <Link to="/events" style={linkStyle}>Events</Link>
        </li>
        <li>
          <Link to="/contact" style={linkStyle}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
