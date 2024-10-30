import React, { useState } from 'react';

import Input from '../../components/Input/Input';
// import { Link } from 'react-router-dom';
import styles from './AuthorizarionPage.css';

const AuthorizationPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  // Функції для перемикання між SIGN IN і Register
  const toggleToSignIn = () => setIsSignIn(true);
  const toggleToRegister = () => setIsSignIn(false);

  return (
    <div className={styles.authorizationPage}>
      <h1>My account</h1>

      {/* Кнопки для перемикання */}
      <div className={styles.authToggle}>
        <button className={isSignIn ? styles.active : ''} onClick={toggleToSignIn}>
          Sign in
        </button>
        <button className={isSignIn ? '' : styles.active} onClick={toggleToRegister}>
          Register
        </button>
      </div>

      {/* Відображення форми входу або реєстрації в залежності від стану */}
      {isSignIn ? (
        <div className={styles.signInForm}>
          <Input type="email" placeholder="Email..." />
          <Input type="password" placeholder="Password..." />

          <div className={styles.rememberMe}>
            <input type="checkbox" />
            <label>Remember me</label>
          </div>

          <button className={styles.submitButton}>SIGN IN</button>
          <p>Have you forgotten your password?</p>
        </div>
      ) : (
        <div className={styles.registerForm}>
          <Input type="text" placeholder="Email..." />
          <Input type="password" placeholder="Password..." />
          <Input type="password" placeholder="Confirm Password..." />

          <button className={styles.submitButton}>REGISTER</button>
        </div>
      )}
    </div>
  );
};
export default AuthorizationPage;
