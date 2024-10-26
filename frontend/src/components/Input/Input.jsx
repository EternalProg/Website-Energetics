import PropTypes from 'prop-types';
import React from 'react';

import styles from './Input.css';

const Input = ({ type, placeholder }) => {
  return (
    <div className={styles.formGroup}>
      <input type={type} required="" />
      <label> {placeholder} </label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;