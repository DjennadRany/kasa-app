// Modal/index.jsx
import React from 'react';
import './Modal.scss';

function Modal({ selectedAccommodation, onClose }) {
  // Vérifiez si selectedAccommodation est défini
  if (!selectedAccommodation) {
    return null; // ou renvoyez un message d'erreur ou un comportement par défaut
  }

  // Destructurez les propriétés de selectedAccommodation
  const { title, cover, host } = selectedAccommodation;

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          Fermer la modal
        </button>
        {/* Vérifiez si title, cover et host sont définis avant de les utiliser */}
        <h2>{title || "Titre non disponible"}</h2>
        <img
          src={cover || "URL de l'image non disponible"}
          alt={title || "Titre non disponible"}
        />
        {/* Vérifiez si host est défini avant d'accéder à ses propriétés */}
        {host && (
          <>
            <p>{host.name || "Nom de l'hôte non disponible"}</p>
            <img
              src={host.picture || "URL de l'image de l'hôte non disponible"}
              alt={host.name || "Nom de l'hôte non disponible"}
            />
            {/* Ajoutez le reste des informations ici */}
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
