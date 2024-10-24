import React, { useState } from 'react';

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
        <button className={isSignIn ? 'active' : ''} onClick={toggleToSignIn}>
          Sign in
        </button>
        <button className={isSignIn ? '' : 'active'} onClick={toggleToRegister}>
          Register
        </button>
      </div>

      {/* Відображення форми входу або реєстрації в залежності від стану */}
      {isSignIn ? (
        <div className="signInForm">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Enter your password" />

          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button className="submit-button">SIGN IN</button>
          <p>Have you forgotten your password?</p>
        </div>
      ) : (
        <div className="register-form">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />

          <label>Password</label>
          <input type="password" placeholder="Create a password" />

          <label>Confirm Password</label>
          <input type="password" placeholder="Confirm your password" />

          <button className="submit-button">REGISTER</button>
        </div>
      )}
    </div>
  );
};
export default AuthorizationPage;
