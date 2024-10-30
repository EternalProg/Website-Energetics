import React from 'react';

import Input from '../../components/Input/Input';
// import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import styles from './AuthorizarionPage.css';

const AuthorizationPage = () => {
  const {
    email,
    password,
    confirmPassword,
    isSignIn,
    setEmail,
    setPassword,
    setConfirmPassword,
    handleSubmit,
    toggleToSignIn,
    toggleToRegister,
  } = useAuth();

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

      {/* Форма входу або реєстрації */}
      <form onSubmit={handleSubmit}>
        {isSignIn ? (
          <div className={styles.signInForm}>
            <Input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />

            <div className={styles.rememberMe}>
              <input type="checkbox" />
              <label>Remember me</label>
            </div>

            <button className={styles.submitButton} type="submit">
              SIGN IN
            </button>
            <p>Have you forgotten your password?</p>
          </div>
        ) : (
          <div className={styles.registerForm}>
            <Input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Input
              type="password"
              placeholder="Confirm Password..."
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />

            <button className={styles.submitButton} type="submit">
              REGISTER
            </button>
          </div>
        )}
      </form>
    </div>
  );
};
export default AuthorizationPage;
