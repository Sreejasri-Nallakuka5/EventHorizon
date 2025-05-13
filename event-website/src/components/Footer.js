import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#1e1e2f',
    color: '#ffffff',
    textAlign: 'center',
    padding: '1rem 0',
    position: 'relative',
    bottom: 0,
    width: '100%',
    marginTop: '2rem',
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer style={footerStyle}>
      <p>&copy; {currentYear} EventHorizon. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
