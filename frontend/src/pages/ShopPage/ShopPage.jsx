import React from 'react';

import FilterPanel from '../../components/FilterPanel/FilterPanel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import styles from './ShopPage.css';

const products = [
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 1',
    price: 100,
    url: '/product/1',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 2',
    price: 200,
    url: '/product/2',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 3',
    price: 300,
    url: '/product/3',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 4',
    price: 400,
    url: '/product/4',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 5',
    price: 500,
    url: '/product/5',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 6',
    price: 600,
    url: '/product/6',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 7',
    price: 700,
    url: '/product/7',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 8',
    price: 800,
    url: '/product/8',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 9',
    price: 900,
    url: '/product/9',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 10',
    price: 1000,
    url: '/product/10',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 11',
    price: 1100,
    url: '/product/11',
  },
  {
    image: 'https://via.placeholder.com/150',
    name: 'Product 12',
    price: 1200,
    url: '/product/12',
  },
];

const ShopPage = () => {
  return (
    <div className={styles.shopPage}>
      <h1> Shop The Latest </h1>
      <div className={styles.grid}>
        <FilterPanel />
        <ProductGrid products={products}/>
      </div>
    </div>
  );
};
export default ShopPage;
