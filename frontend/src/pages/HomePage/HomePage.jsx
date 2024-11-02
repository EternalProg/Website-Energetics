import React from 'react';

import MainPropositions from '../../components/MainPropositions/MainPropositions';
import ShopTheLatest from '../../components/ShopTheLatest/ShopTheLatest';
import styles from './HomePage.css';

console.log('API_BASE_URL:', process.env.REACT_APP_API_BASE_URL);

const HomePage = () => {
  return (
    <div className={styles.homePage} data-testid="homePage">
      <MainPropositions data-testid="mainPropositions" />
      <ShopTheLatest data-testid="shopTheLatest" />
    </div>
  );
};
export default HomePage;
