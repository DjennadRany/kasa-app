// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        {/* Ajoutez ici le code pour votre logo */}
        <span>Logo</span>
      </div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><Link to="/">Accueil</Link></li>
          <li style={liStyle}><Link to="/accommodation/:id">accomodation</Link></li>
          <li style={liStyle}><Link to="/About">À propos</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle = {
  // Ajoutez ici le style pour le logo
};

const navStyle = {
  // Ajoutez ici le style pour la navigation
};

const ulStyle = {
  listStyle: 'none',
  display: 'flex',
};

const liStyle = {
  marginRight: '15px',
};

export default Header;
