import React, { useState } from 'react';
import './Carousel.scss';

import arrowRight from '../../assets/arrow-right.png';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="slider" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={prevSlide}>
        <img src={arrowRight} alt="Previous" />
      </button>
      <button className="next" onClick={nextSlide}>
        <img src={arrowRight} alt="Next" />
      </button>
    </div>
  );
};

export default Carousel;
