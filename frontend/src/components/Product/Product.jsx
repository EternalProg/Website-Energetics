import PropTypes from 'prop-types';
import React from 'react';
import {Link} from "react-router-dom";

import styles from './Product.css';

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <Link to={product.url}>
        {/* При запуску замінити на картинки товарів */}
        <img src={product.image} className={styles.productImage}  alt={"product image"}/>
      </Link>
      <span className={styles.productName}> {product.name} </span>
      <span className={styles.productPrice}> ${product.price} </span>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
};

export default Product;
