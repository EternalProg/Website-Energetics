import React from 'react';

import styles from './MainPropositions.css';

const MainPropositions = () => {
  return (
    <div className={styles.square}>
      <span className={styles.productName}>Product name</span>
      <span className={styles.price}>Price</span>
      <span className={styles.description}>Short description</span>

      <button className={styles.viewProductBtn}>View product</button>
    </div>
  );
};

export default MainPropositions;
