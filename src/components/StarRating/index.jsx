// StarRating.jsx
import React from 'react';
import Rating from 'react-rating-stars-component';
import './StarRating.scss';

const StarRating = ({ ratingValue }) => {
  return (
    <div className="star-rating">
      <Rating
        count={5}
        value={ratingValue}
        size={80}
        activeColor='#FF6060'
        edit={false}
      />
    </div>
  );
};

export default StarRating;
