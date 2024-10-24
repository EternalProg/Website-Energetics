import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import Dots from '../Dots/Dots';
import Slide from '../Slide/Slide';
import styles from './Slider.css';

const Slider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalReference = useRef(null);

  // Автоматична зміна слайдів кожні 10 секунд
  useEffect(() => {
    const startInterval = () => {
      intervalReference.current = setInterval(() => {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % products.length);
      }, 10_000); // 10 секунд
    };

    startInterval();

    return () => clearInterval(intervalReference.current); // Очищає інтервал при демонтажі компонента
  }, [products.length]);

  // Обробка кліку на крапочки
  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalReference.current);
    intervalReference.current = setInterval(() => {
      setCurrentIndex((previousIndex) => (previousIndex + 1) % products.length);
    }, 10_000); // 10 секунд
  };

  return (
    <div className={styles.sliderContainer}>
      <Dots currentIndex={currentIndex} total={products.length} goToSlide={goToSlide} />

      {/* Відображаємо поточний слайд */}
      <Slide product={products[currentIndex]} />

      {/* Крапочки для перемикання слайдів */}
    </div>
  );
};

Slider.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Slider;
