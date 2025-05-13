import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const containerStyle = {
    padding: '4rem 2rem',
    textAlign: 'center',
    backgroundColor: '#f4f4f8',
    minHeight: '80vh',
  };

  const titleStyle = {
    fontSize: '2.5rem',
    color: '#1e1e2f',
    marginBottom: '1rem',
  };

  const descriptionStyle = {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '2rem',
  };

  const buttonStyle = {
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#1e1e2f',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>Welcome to EventHorizon</h1>
      <p style={descriptionStyle}>
        Discover, manage, and attend the best tech, design, and business events around the globe. We bring communities together to learn, network, and grow.
      </p>
      <Link to="/events" style={buttonStyle}>
        View Upcoming Events
      </Link>
    </div>
  );
};

export default Home;
