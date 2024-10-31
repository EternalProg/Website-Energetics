import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Slide.css';

const Slide = ({ product }) => {
  return (
    <div className={styles.slide} data-testid="slide">
      <div className={styles.productInfo} data-testid="product-info">
        <h2 className={styles.productName} data-testid="product-name">
          {product.name}
        </h2>
        <p className={styles.price} data-testid="product-price">
          ${product.price}
        </p>
        <p className={styles.description} data-testid="product-description">
          {product.description}
        </p>
        <Link to={`/product/${product._id}`} key={product._id} data-testid={`product-link-${product._id}`}>
          <button className={styles.viewProductBtn} data-testid="view-product-btn">
            View Product
          </button>
        </Link>
      </div>
      <img src={product.image} alt={product.name} data-testid="product-image" />
    </div>
  );
};

Slide.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    productDetails: PropTypes.string.isRequired,
    isMainProposition: PropTypes.bool,
  }).isRequired,
};

export default Slide;
