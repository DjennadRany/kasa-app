import React from 'react';
import "./Error.scss";
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="error-container">
      <p className="error-message">404</p>
      <h1 className="error-title">Oups! La page que vous demandez n'existe pas.</h1>
      <p className="additional-paragraph"><Link to="/">Retourner sur la page d’accueil</Link></p>
    </div>
  );
}

export default Error;
