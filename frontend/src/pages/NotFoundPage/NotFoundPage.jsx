import React from 'react';
import { Link } from 'react-router-dom';

import styles from './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h2 className={styles.errorText}> 404 ERROR </h2>
      <p className={styles.text}>This page not found; <br />
        back to home and start again </p>
      <Link to="/">
        <button className={styles.homePageBtn}>
          HOMEPAGE
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
