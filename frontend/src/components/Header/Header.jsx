import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.css';
import profileImage from './images/authorization.png';
import findImage from './images/find.png';
import cartImage from './images/shoppingCart.png';

const Find = () => {
  return (
    <div>
      <img src={findImage} alt={'find'} className={styles.icons} />
      {/* Спливаюче вікно з пошуком товару*/}
    </div>
  );
};

const Cart = () => {
  return (
    <div>
      <Link to={'cart'}>
        <img src={cartImage} alt={'shop cart'} className={styles.icons} />
      </Link>
      {/*
      <a href="/Cart">
        <img src={cartImage} alt={'shop cart'} className={styles.icons} />
      </a>
      */}
    </div>
  );
};

const Authorization = () => {
  return (
    <a href="/authorization">
      <img src={profileImage} alt={'authorization'} className={styles.icons} />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <div className={styles.header}>
        <a href="/" className={styles.energetics}>
          Energetics
        </a>
        <ul className={styles.inlineList}>
          <li>
            <Link to={'shop'} className={styles.shop}>
              Shop
            </Link>
          </li>
          <li>|</li>
          <li>
            <Cart />
          </li>
          <li>
            <Find />
          </li>
          <li id={styles.authorizationIcon}>
            <Authorization />
          </li>
        </ul>
      </div>
      <hr className={styles.headerHorizontalLine}/>
    </>
  );
};
export default Header;
