import React from 'react';

import MainPropositions from '../../components/MainPropositions/MainPropositions';
import ShopTheLatest from '../../components/ShopTheLatest/ShopTheLatest';
import styles from './HomePage.css';

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <MainPropositions />
      <ShopTheLatest />
    </div>
  );
};
export default HomePage;
