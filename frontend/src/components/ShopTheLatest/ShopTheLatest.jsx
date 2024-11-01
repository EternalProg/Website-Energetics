import React from 'react';
import { Link } from 'react-router-dom';

import useAllProducts from '../../hooks/useAllProducts';
import Product from '../Product/Product';
import styles from './ShopTheLatest.css';

const ShopTheLatest = () => {
  const { products, isLoading, error } = useAllProducts();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div data-testid="shop-the-latest">
      <ul>
        <li className={styles.shopTheLatest} data-testid="shop-the-latest-title">
          Shop The Latest
        </li>
        <li>
          <Link to={'/shop'} className={styles.viewAll} data-testid="view-all-link">
            View All
          </Link>
        </li>
      </ul>

      <div className={styles.products} data-testid="products">
        {products.slice(0, 6).map((product) => (
          <Link to={`/product/${product._id}`} key={product._id} data-testid={`product-link-${product._id}`}>
            <Product product={product} classNames={{}} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ShopTheLatest;
