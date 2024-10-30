import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Slide.css';

const Slide = ({ product }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.price}>${product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <Link to={`/product/${product._id}`} key={product._id}>
          <button className={styles.viewProductBtn}>View Product</button>
        </Link>
      </div>
      <img src={product.image} alt={product.name} />
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
