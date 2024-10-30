import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Product from '../Product/Product';
import styles from './ProductGrid.css';

const ProductGrid = ({ products }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const totalPages = Math.ceil(products.length / productsPerPage);

  // Розраховуємо, які продукти будуть показані на поточній сторінці
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Функція для зміни сторінки
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const classNames = {
    product: styles.shopCard,
    productImage: styles.productImage,
    productName: styles.productName,
    productPrice: styles.productPrice,
  };

  return (
    <div className={styles.productGrid}>
      <div className={styles.products}>
        {currentProducts.map((product) => (
          <Product key={product._id} product={product} classNames={classNames} />
        ))}
      </div>

      <div className={styles.pagination}>
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>
            {index + 1}
          </button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      productDetails: PropTypes.string.isRequired,
      isMainProposition: PropTypes.bool,
    }),
  ).isRequired,
};

export default ProductGrid;
