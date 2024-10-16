import React from 'react';
import { Route,Routes } from 'react-router-dom';

import CartPage from './src/pages/CartPage';
// Імпортуємо компоненти сторінок
import HomePage from './src/pages/HomePage/HomePage';
import NotFoundPage from './src/pages/NotFoundPage/NotFoundPage';
import ProfilePage from './src/pages/ProfilePage';
import ShopPage from './src/pages/ShopPage';

// Створюємо компонент маршрутизації
const AppRoutes = () => {
  return (
    <Routes>
      {/* Маршрути */}
      <Route path="/" element={<HomePage />} /> {/* Головна сторінка */}
      <Route path="/shop" element={<ShopPage />} /> {/* Сторінка магазину */}
      <Route path="/cart" element={<CartPage />} /> {/* Сторінка кошика */}
      <Route path="/profile" element={<ProfilePage />} /> {/* Сторінка профілю */}
      {/* Маршрут для будь-якого іншого шляху (404) */}
      <Route path="*" element={<NotFoundPage />} /> {/* Сторінка не знайдено */}
    </Routes>
  );
};

export default AppRoutes;
