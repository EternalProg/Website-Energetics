import React, {useEffect, useRef, useState} from 'react';

import Dots from '../Dots/Dots';
import Slide from '../Slide/Slide';
import styles from './Slider.css';

const Slider = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Автоматична зміна слайдів кожні 10 секунд
  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((previousIndex) => (previousIndex + 1) % products.length);
      }, 10_000); // 10 секунд
    };

    startInterval();

    return () => clearInterval(intervalRef.current); // Очищає інтервал при демонтажі компонента
  }, [products.length]);

  // Обробка кліку на крапочки
  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
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

export default Slider;
