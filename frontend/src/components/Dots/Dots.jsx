import React from 'react';

import styles from './Dots.css'; // Важливо, що стилі імпортовані

const Dots = ({ currentIndex, total, goToSlide }) => {
  return (
    <div className={styles.dotsContainer}> {/* Використання styles для доступу до класу */}
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${currentIndex === index ? styles.active : ''}`}
          onClick={() => goToSlide(index)}
        ></span>
      ))}
    </div>
  );
};

export default Dots;
