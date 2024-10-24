import PropTypes from 'prop-types';
import React from 'react';
import { useParams } from 'react-router-dom';

import styles from './ProductPage.css';

// eslint-disable-next-line no-empty-pattern
// const ProductPage = ({ products })
const ProductPage = () => {
  /*const { id } = useParams();
  // Тут ви можете отримати дані продукту за id, наприклад, з API або з масиву продуктів
  const product = products.find((product) => product.url === `/product/${id}`);

  if (!product) {
    return <div>Product not found</div>;
  }*/

  return (
    /*<div className={styles.productPage}>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Price: ${product.price}</p>
    </div>*/
    <div className={styles.productPage}>
      <h1>Product name</h1>
      <img src="https://via.placeholder.com/200" alt="Product name" />
      <p>Price: $100</p>
    </div>
  );
};
/*
ProductPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};*/

export default ProductPage;
