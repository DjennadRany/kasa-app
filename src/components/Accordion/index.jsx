// Accordion.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Accordion.scss';

const Accordion = ({ title, items, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion}>
        <div className="accordion-title">{title}</div>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <ul>
            {items && items.map((item,  index) => (
              <li key={index}>{item}</li>
            ))}
             {text && text.map((texts,  index) => (
              <li key={index}>{texts}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Accordion;
