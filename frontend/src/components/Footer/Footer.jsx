import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Footer.css';
import facebookImage from './images/facebook.png';
import instagramImage from './images/instagram.png';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <ul>
        <li className={styles.info}>
          <Link to={'contact'} className={styles.contact}>
            CONTACT
          </Link>
        </li>
        <li>
          <Link to={'terms'} className={styles.terms}>
            TERMS OF SERVICE
          </Link>
        </li>
      </ul>
      <ul className={styles.licenseAndIcons}>
        <li>
          <span className={styles.energetics}> 2024 Energetics. </span>
          <span className={styles.licence}>
            Terms of use <strong>and</strong> privacy policy.
          </span>
        </li>
        <li className={styles.icons}>
          <Link to={'https://www.facebook.com/'}>
            <img src={facebookImage} className={styles.facebookIcon} />
          </Link>
          <Link to={'https://www.instagram.com/'}>
            <img src={instagramImage} className={styles.instagramIcon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Footer;
