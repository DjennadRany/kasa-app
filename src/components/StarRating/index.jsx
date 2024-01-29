
import React from 'react';
import PropTypes from 'prop-types';
import './StarRating.scss';
import Star from './start';

const StarRating = ({ ratingValue }) => {
  const MAX_STARS = 5;
  const filledStars = Math.floor(ratingValue);
  const hasHalfStar = ratingValue - filledStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < MAX_STARS; i++) {
      if (i < filledStars) {
        stars.push(<Star key={i} filled />);
      } else if (hasHalfStar && i === filledStars) {
        stars.push(<Star key={i} filled={false} />);
      } else {
        stars.push(<Star key={i} filled={false} />);
      }
    }

    return stars;
  };

  return (
    <div className="star-rating">
      <div className="stars">{renderStars()}</div>
    </div>
  );
};

StarRating.propTypes = {
  ratingValue: PropTypes.number.isRequired,
};

export default StarRating;
