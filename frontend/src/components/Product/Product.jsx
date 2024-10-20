import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Product.css'; // Використовуємо CSS-модулі

const Product = ({ product, classNames }) => {
  return (
    <div className={`${styles.product} ${classNames.product}`}>
      <Link to={product.url}>
        <img src={product.image} className={`${styles.productImage} ${classNames.productImage}`} alt="product" />
      </Link>
      <span className={`${styles.productName} ${classNames.productName}`}>{product.name}</span>
      <span className={`${styles.productPrice} ${classNames.productPrice}`}>${product.price}</span>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  classNames: PropTypes.shape({
    product: PropTypes.string.isRequired,
    productImage: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
