//import ProfilePage from './src/pages/ProfilePage/ProfilePage';
import ShopPage from '@pages/ShopPage/ShopPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthorizationPage from './src/pages/AuthorizarionPage/AuthorizarionPage';
//import CartPage from './src/pages/CartPage/CartPage';
// Імпортуємо компоненти сторінок
import HomePage from './src/pages/HomePage/HomePage';
import NotFoundPage from './src/pages/NotFoundPage/NotFoundPage';
import ProductPage from './src/pages/ProductPage/ProductPage';

// Створюємо компонент маршрутизації
const AppRoutes = () => {
  return (
    <Routes>
      {/* Маршрути */}
      <Route path="/" element={<HomePage />} /> {/* Головна сторінка */}
      <Route path="/shop" element={<ShopPage />} /> {/* Сторінка магазину */}
      {/*<Route path="/cart" element={<CartPage />} /> {/* Сторінка кошика */}
      {/*<Route path="/profile" element={<ProfilePage />} /> {/* Сторінка профілю */}
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path={'/auth'} element={<AuthorizationPage />} />
      {/* Маршрут для будь-якого іншого шляху (404) */}
      <Route path="*" element={<NotFoundPage />} /> {/* Сторінка не знайдено */}
    </Routes>
  );
};

export default AppRoutes;
