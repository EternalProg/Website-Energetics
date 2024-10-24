import PropTypes from "prop-types"; // Важливо, що стилі імпортовані
import React from 'react';

import styles from './Dots.css';

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

Dots.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  goToSlide: PropTypes.func.isRequired,
};

export default Dots;
