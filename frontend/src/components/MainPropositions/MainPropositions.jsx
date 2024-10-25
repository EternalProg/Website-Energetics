import React from 'react';

import Slider from '../Slider/Slider';
import styles from './MainPropositions.css';
import image1 from './images/image1.png'

const MainPropositions = () => {
  const products = [
    {name: 'PowerBank XO PR160', price: '$ 68,00', description: '80000mAh 20W', image: image1},
    {name: 'PowerBank XO PR160', price: '$ 68,00', description: '80000mAh 20W', image: image1},
    {name: 'PowerBank XO PR160', price: '$ 68,00', description: '80000mAh 20W', image: image1},
    {name: 'PowerBank XO PR160', price: '$ 68,00', description: '80000mAh 20W', image: image1},
    {name: 'PowerBank XO PR160', price: '$ 68,00', description: '80000mAh 20W', image: image1},
  ];

  return (
    <div className={styles.square}>
      {/*
        <span className={styles.productName}>Product name</span>
      <span className={styles.price}>Price</span>
      <span className={styles.description}>Short description</span>

      <button className={styles.viewProductBtn}>View product</button>
      */}
      <Slider products={products} />
    </div>
  );
};

export default MainPropositions;
