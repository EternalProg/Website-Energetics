import React, { useState } from 'react';

import styles from './PriceSlider.css';

const PriceSlider = () => {
  const [minPrice, setMinPrice] = useState(350);
  const [maxPrice, setMaxPrice] = useState(10_000);

  const handleMinPriceChange = (event) => {
    const value = Math.min(Number(event.target.value), maxPrice - 500);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (event) => {
    const value = Math.max(Number(event.target.value), minPrice + 500);
    setMaxPrice(value);
  };

  return (
    <div className={styles.filterPrice} data-testid="price-slider">
      <div className={styles.rangeValues}>
        <span data-testid="min-price">Min: ${minPrice}</span>
        <span data-testid="max-price">Max: ${maxPrice}</span>
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
          data-testid="min-price-slider"
        />
        <input
          className={`${styles.rangeBar} ${styles.rangeMax}`}
          type="range"
          min="350"
          max="10000"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          data-testid="max-price-slider"
        />
        <div
          className={styles.progress}
          style={{
            left: `${(minPrice / 10_000) * 100}%`,
            right: `${100 - (maxPrice / 10_000) * 100}%`,
          }}
          data-testid="progress-bar"
        ></div>
      </div>
    </div>
  );
};

export default PriceSlider;
