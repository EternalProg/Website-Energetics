import React from 'react';

import useMainPropositions from '../../hooks/useMainPropositions';
import Slider from '../Slider/Slider';
import styles from './MainPropositions.css';

const MainPropositions = () => {
  const { products, isLoading, error } = useMainPropositions();

  // Рендеринг залежно від стану завантаження
  if (isLoading) {
    return <p data-testid="loading">Loading...</p>;
  }

  if (error) {
    return <p data-testid="error-message">Error fetching products: {error.message}</p>;
  }

  return (
    <div className={styles.square}>
      {products.length > 0 ? (
        <Slider products={products} data-testid="slider" />
      ) : (
        <p data-testid="no-products">No main propositions available</p>
      )}
    </div>
  );
};

export default MainPropositions;
