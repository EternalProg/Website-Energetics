import React from 'react';

import MainPropositions from '../../components/MainPropositions/MainPropositions';
import ShopTheLatest from '../../components/ShopTheLatest/ShopTheLatest';
import styles from './HomePage.css';

const HomePage = () => {
  return (
    <div className={styles.homePage} data-testid="homePage">
      <MainPropositions data-testid="mainPropositions" />
      <ShopTheLatest data-testid="shopTheLatest" />
    </div>
  );
};
export default HomePage;
