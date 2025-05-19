import React from 'react';

const BeEvent = () => {
  const styles = {
    body: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: '#2a0140',
      color: 'white',
      display: 'flex',
      height: '100vh',
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
    },
    leftRight: {
      width: '50%',
      padding: '4rem',
    },
    left: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
    h1: {
      fontSize: '3rem',
      lineHeight: '1.2',
    },
    highlight: {
      color: '#ff4d6d',
      fontWeight: 'bold',
    },
    desc: {
      marginTop: '1rem',
      fontSize: '1rem',
      color: '#cfcfcf',
    },
    buttons: {
      marginTop: '2rem',
    },
    button: {
      padding: '0.75rem 1.5rem',
      marginRight: '1rem',
      border: 'none',
      borderRadius: '30px',
      fontWeight: 'bold',
      cursor: 'pointer',
    },
    bookBtn: {
      backgroundColor: '#ff4d6d',
      color: 'white',
    },
    seeBtn: {
      backgroundColor: 'transparent',
      color: '#ff4d6d',
    },
    right: {
      backgroundImage: url('https://i.imgur.com/4NsrC8X.jpg'),
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      position: 'relative',
    },
    navbar: {
      position: 'absolute',
      top: '2rem',
      right: '4rem',
      display: 'flex',
      gap: '1.5rem',
      alignItems: 'center',
    },
    navLink: {
      textDecoration: 'none',
      color: 'white',
      fontWeight: 500,
      position: 'relative',
    },
    activeLink: {
      borderBottom: '2px solid #ff4d6d',
      paddingBottom: '2px',
    },
    callBtn: {
      backgroundColor: '#ff4d6d',
      padding: '0.5rem 1rem',
      borderRadius: '20px',
      color: 'white',
      fontWeight: 'bold',
    },
    promo: {
      position: 'absolute',
      bottom: '2rem',
      left: '2rem',
      backgroundColor: 'rgba(0,0,0,0.6)',
      padding: '0.8rem 1.2rem',
      borderRadius: '15px',
      fontSize: '0.9rem',
    },
  };

  return (
    <div style={styles.body}>
      <div style={{ ...styles.leftRight, ...styles.left }}>
        <p style={{ color: '#ff4d6d', marginBottom: '1rem' }}>Time to party</p>
        <h1 style={styles.h1}>
          Organization <br />
          <span style={styles.highlight}>of</span> company <br />
          <span style={styles.highlight}>events</span>
        </h1>
        <p style={styles.desc}>
          Erat scelerisque lobortis nisl sed elementum massa. Et eu viverra nisi, adipiscing mauris.
          Pulvinar phasellus mattis pellentesque.
        </p>
        <div style={styles.buttons}>
          <button style={{ ...styles.button, ...styles.bookBtn }}>Book event</button>
          <button style={{ ...styles.button, ...styles.seeBtn }}>See events →</button>
        </div>
      </div>
      <div style={{ ...styles.leftRight, ...styles.right }}>
        <div style={styles.navbar}>
          <a href="#" style={{ ...styles.navLink, ...styles.activeLink }}>Home</a>
          <a href="#" style={styles.navLink}>About us</a>
          <a href="#" style={styles.navLink}>Offer</a>
          <a href="#" style={styles.navLink}>Events</a>
          <a href="#" style={styles.navLink}>Contact</a>
          <a href="#" style={styles.callBtn}>Call us</a>
        </div>
        <div style={styles.promo}>
          ▶ See promotion video
        </div>
      </div>
    </div>
  );
};

export default BeEvent;