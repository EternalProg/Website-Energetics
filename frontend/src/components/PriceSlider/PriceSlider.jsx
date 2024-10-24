import React, { useState } from 'react';

import styles from './PriceSlider.css';

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(350);
  const [maxPrice, setMaxPrice] = useState(10_000);

  const handleMinPriceChange = (event) => {
    const value = Math.min(Number(event.target.value), maxPrice - 500); // Мінімум не може бути більшим за макс - 100
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event) => {
    const value = Math.max(Number(event.target.value), minPrice + 500); // Максимум не може бути меншим за мін + 100
    setMaxPrice(value);
  };


  return (
    <div className={styles.filterPrice}>
      <div className={styles.rangeValues}>
        <span>Min: ${minPrice}</span>
        <span>Max: ${maxPrice}</span>
      </div>
      <div className={styles.sliderContainer}>
        {/* Подвійний слайдер */}
        <input
          className={`${styles.rangeBar} ${styles.rangeMin}`}
          type="range"
          min="350"
          max="10000"
          value={minPrice}
          onChange={handleMinPriceChange}
        />
        <input
          className={`${styles.rangeBar} ${styles.rangeMax}`}
          type="range"
          min="350"
          max="10000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
        />
        {/* Стилізована лінія прогресу */}
        <div
          className={styles.progress}
          style={{
            left: `${(minPrice / 10_000) * 100}%`,
            right: `${100 - (maxPrice / 10_000) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default PriceSlider;
