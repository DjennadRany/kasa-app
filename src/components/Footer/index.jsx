// Footer.jsx
import React from 'react';
import "./Footer.scss";
import logo from '../../assets/LOGOblanc.png'; // Remplacez par le chemin réel de votre logo

function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" className="logo" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;

