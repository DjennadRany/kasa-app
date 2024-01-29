// Star.jsx
import React from 'react';
import PropTypes from 'prop-types';
import starPink from '../../assets/star-pink.png';
import starGrid from '../../assets/star-grid.png';

const Star = ({ filled }) => (
  <img src={filled ? starPink : starGrid} alt="Star" />
);

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default Star;
