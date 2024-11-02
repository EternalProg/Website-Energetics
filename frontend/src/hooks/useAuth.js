import { useState } from 'react';

const useAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleToSignIn = () => {
    setIsSignIn(true);
    resetForm();
  };

  const toggleToRegister = () => {
    setIsSignIn(false);
    resetForm();
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Запобігаємо перезавантаженню сторінки
    console.log('Email:', email); // Логування email
    console.log('Password:', password); // Логування password
    console.log('Confirm Password:', confirmPassword); // Логування confirmPassword // Логування перед запитом

    if (!email || !password) {
      alert('Email and password are required');
      return;
    }

    const url = isSignIn
      ? `${process.env.REACT_APP_API_BASE_URL}/api/login`
      : `${process.env.REACT_APP_API_BASE_URL}/api/register`;

    const payload = {
      email,
      password,
    };

    console.log('Payload:', JSON.stringify(payload)); // Логування даних перед відправкою

    if (!isSignIn && password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      if (isSignIn) {
        localStorage.setItem('token', data.token);
        alert('Login successful!');
      } else {
        alert('Registration successful! You can now sign in.');
      }

      // Скидаємо форму
      resetForm();
    } catch (error) {
      alert(error.message);
    }
  };

  return {
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
  };
};

export default useAuth;
