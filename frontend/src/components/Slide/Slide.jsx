import React from 'react';

import styles from './Slide.css';

const Slide = ({ product }) => {
  return (
    <div className={styles.slide}>
      <div className={styles.productInfo}>
        <h2 className={styles.productName}>{product.name}</h2>
        <p className={styles.price}>{product.price}</p>
        <p className={styles.description}>{product.description}</p>
        <button className={styles.viewProductBtn}>View Product</button>
      </div>
      <img src={product.image} alt={product.name}/>
    </div>
  );
};

export default Slide;
