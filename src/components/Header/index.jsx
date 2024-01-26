// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'; // Importe le fichier Sass
import logoRose from '../../assets/LOGOrose.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={logoRose} alt="Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><Link to="/my-kasa-app/">Accueil</Link></li>
          <li className="nav-item"><Link to="/About">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
