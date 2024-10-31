import React from 'react';

import FilterPanel from '../../components/FilterPanel/FilterPanel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import useAllProducts from '../../hooks/useAllProducts';
import styles from './ShopPage.css';

const ShopPage = () => {
  const { products, isLoading, error } = useAllProducts();

  if (isLoading) {
    return <p data-testid="loading">Loading...</p>;
  }

  if (error) {
    return <p data-testid="error-message">Error fetching products: {error.message}</p>;
  }

  return (
    <div className={styles.shopPage} data-testid="shop-page">
      <h1> Shop The Latest </h1>
      <div className={styles.grid}>
        <FilterPanel />
        <ProductGrid products={products} data-testid="product-grid" />
      </div>
    </div>
  );
};

export default ShopPage;
