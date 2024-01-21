// StarRating.jsx
import React from 'react';
import { Rating } from 'react-simple-star-rating';
import './StarRating.scss'; // Ajoutez cette ligne pour inclure le fichier de style

const StarRating = ({ rating }) => {
  return (
    <div className="star-rating">
      <Rating
        onClick={() => {}} // Garder cette ligne même si elle est vide
        readOnly
        size={30}
        ratingValue={rating}
        fillColor='#FF6060'
        emptyColor='#E3E3E3'
        strokeColor='#E3E3E3'
      />
    </div>
  );
};

export default StarRating;
