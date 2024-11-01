import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import Dots from '../Dots/Dots';
import Slide from '../Slide/Slide';
import styles from './Slider.css';

const Slider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalReference = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalReference.current = setInterval(() => {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % products.length);
      }, 10_000); // 10 секунд
    };

    startInterval();

    return () => clearInterval(intervalReference.current); // Очищає інтервал при демонтажі компонента
  }, [products.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalReference.current);
    intervalReference.current = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % products.length);
    }, 10_000); // 10 секунд
  };

  return (
    <div className={styles.sliderContainer} data-testid="slider-container">
      <Dots currentIndex={currentIndex} total={products.length} goToSlide={goToSlide} data-testid="dots" />
      <Slide product={products[currentIndex]} data-testid="current-slide" />
    </div>
  );
};

Slider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      productDetails: PropTypes.string.isRequired,
      isMainProposition: PropTypes.bool,
    }),
  ).isRequired,
};

export default Slider;
