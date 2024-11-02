import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Product.css';

const Product = ({ product, classNames }) => {
  return (
    <div data-testid="product" className={`${styles.product} ${classNames.product}`}>
      <Link to={`/product/${product._id}`} key={product._id}>
        <img
          src={`${process.env.REACT_APP_API_BASE_URL}${product.image}`}
          className={`${styles.productImage} ${classNames.productImage}`}
          alt="product"
        />
      </Link>
      <span className={`${styles.productName} ${classNames.productName}`}>{product.name}</span>
      <span className={`${styles.productPrice} ${classNames.productPrice}`}>${product.price}</span>
    </div>
  );
};

Product.propTypes = {
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
  classNames: PropTypes.shape({
    product: PropTypes.string,
    productImage: PropTypes.string,
    productName: PropTypes.string,
    productPrice: PropTypes.string,
  }),
};

export default Product;
