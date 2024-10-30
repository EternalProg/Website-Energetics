import PropTypes from 'prop-types';
import React from 'react';

import styles from './Input.css';

const Input = ({ type, placeholder, value, onChange }) => {
  return (
    <div className={styles.formGroup}>
      <input type={type} required="" value={value} onChange={onChange} />
      <label> {placeholder} </label>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
