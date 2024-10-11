import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from '../routes';
// import resizeHook from '@hooks/resize';
import styles from './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.main} data-testid="app">
        {/* Відображаємо хедер на всіх сторінках */}
        <Header />
        {/* Відображаємо маршрути */}
        <AppRoutes />
        {/* Відображаємо футер на всіх сторінках */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

// export { App };
export default App;
