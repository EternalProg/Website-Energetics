import React from 'react';

import Input from '../../components/Input/Input';
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
    <div className={styles.authorizationPage} data-testid="authorizationPage">
      <h1>My account</h1>

      <div className={styles.authToggle} data-testid="authToggle">
        <button className={isSignIn ? styles.active : ''} onClick={toggleToSignIn} data-testid="signInButton">
          Sign in
        </button>
        <button className={isSignIn ? '' : styles.active} onClick={toggleToRegister} data-testid="registerButton">
          Register
        </button>
      </div>

      <form onSubmit={handleSubmit} data-testid="authForm">
        {isSignIn ? (
          <div className={styles.signInForm} data-testid="signInForm">
            <Input
              type="email"
              placeholder="Email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              data-testid="emailInput"
            />
            <Input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              data-testid="passwordInput"
            />
            <div className={styles.rememberMe} data-testid="rememberMe">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <button className={styles.submitButton} type="submit" data-testid="submitButton">
              SIGN IN
            </button>
            <p>Have you forgotten your password?</p>
          </div>
        ) : (
          <div className={styles.registerForm} data-testid="registerForm">
            <Input
              type="text"
              placeholder="Email..."
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              data-testid="emailInput"
            />
            <Input
              type="password"
              placeholder="Password..."
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              data-testid="passwordInput"
            />
            <Input
              type="password"
              placeholder="Confirm Password..."
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              data-testid="confirmPasswordInput"
            />
            <button className={styles.submitButton} type="submit" data-testid="submitButton">
              REGISTER
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AuthorizationPage;
