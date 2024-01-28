// Banner.jsx
import React from 'react';
import './banner.scss';

const Banner = ({ image, text }) => {
  return (
    <div className={`banner ${image ? '' : 'default-background'}`}>
      {image ? (
        <img src={image} alt="Banner Background" />
      ) : (
        <h2>{text}</h2>
      )}
    </div>
  );
};

export default Banner;
