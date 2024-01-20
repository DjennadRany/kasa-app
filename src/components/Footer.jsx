// Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Your Website Name</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: '0',
  width: '100%',
};

export default Footer;
