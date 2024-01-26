<<<<<<< HEAD
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

const Carousel = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => {
      setActiveIndex(index);
    },
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={`carousel-slide ${activeIndex === index ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} className={`carousel-slide ${activeIndex === index ? 'active' : ''}`}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
=======
// Carousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.scss';

const Carousel = ({ images }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
    
  );
};

export default Carousel;
>>>>>>> cd2e37f32070815140cf13fd8cae1edc3234e864
