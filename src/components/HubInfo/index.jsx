// HubInfo.jsx
import React, { useState, useEffect } from "react";
import Modal from "../Modal";
import accommodationsData from "../../data/accommodation.json";
import "./HubInfo.scss";

function HubInfo() {
  const [accommodations, setAccommodations] = useState([]);
  const [selectedAccommodation, setSelectedAccommodation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setAccommodations(accommodationsData);
  }, []);

  const openModal = (accommodation) => {
    setSelectedAccommodation(accommodation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedAccommodation(null);
    setIsModalOpen(false);
  };

  return (
    <div className="hub-info">
      {accommodations.map((accommodation) => (
        <div
          key={accommodation.id}
          className="hub-block"
          onClick={() => openModal(accommodation)}
          style={{ backgroundImage: `url(${accommodation.cover})` }}
        >
          <h3>{accommodation.title}</h3>
        </div>
      ))}

      {isModalOpen && selectedAccommodation && (
        <Modal selectedAccommodation={selectedAccommodation} onClose={closeModal} />
      )}
    </div>
  );
}

export default HubInfo;
