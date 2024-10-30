//import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

import Product from '../../components/Product/Product';
import useProduct from '../../hooks/useProduct';
//import { useParams } from 'react-router-dom';
import styles from './ProductPage.css';

const ProductPage = () => {
  const { productData, isLoading, error } = useProduct();
  const [activeTab, setActiveTab] = React.useState('details');
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching product: {error.message}</p>;
  }

  if (!productData) return <div>Product was not found...</div>;

  const { mainProduct, similarItems } = productData;

  const classNames = {
    product: styles.recommendationProduct,
    productImage: styles.recommendationProductImage,
    productName: styles.recommendationProductName,
    productPrice: styles.recommendationProductPrice,
  };

  return (
    <div className={styles.productPage}>
      <div className={styles.product}>
        <div className={styles.imageGallery}>
          {/* Маленькі зображення в стовпчик */}
          <img src="https://via.placeholder.com/50" alt="thumbnail1" />
          <img src="https://via.placeholder.com/50" alt="thumbnail2" />
          <img src="https://via.placeholder.com/50" alt="thumbnail3" />
          <img src="https://via.placeholder.com/50" alt="thumbnail3" />
        </div>

        <img src={mainProduct.image} alt="Large product" className={styles.largeImage} />

        <div className={styles.productDetails}>
          <h1>{mainProduct.name}</h1>
          <p className={styles.price}>$ {mainProduct.price}</p>

          <p className={styles.description}>
            {mainProduct.description}
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
            sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat
            sed eu felis. */}
          </p>

          <div className={styles.addButtons}>
            <div className={styles.quantityButton}>
              <button onClick={decreaseQuantity} className={styles.controlButton}>
                -
              </button>
              <span className={styles.quantity}>{quantity}</span>
              <button onClick={increaseQuantity} className={styles.controlButton}>
                +
              </button>
            </div>

            <button className={styles.addToCart}>ADD TO CART</button>
          </div>
          {/* Вкладки */}
        </div>
      </div>

      <div className={styles.productTabs}>
        {/* Вкладки */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === 'details' ? styles.active : ''}`}
            onClick={() => setActiveTab('details')}
          >
            Product Details
          </button>
          <button
            className={`${styles.tab} ${activeTab === 'reviews' ? styles.active : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </button>
        </div>

        {/* Контент для активної вкладки */}
        <div className={styles.content}>
          {activeTab === 'details' && (
            <div className={styles.tabContent}>
              <h2>Product Details</h2>
              <p> {mainProduct.productDetails}</p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div className={styles.tabContent}>
              <h2>Reviews</h2>
              <p>Відгуки про продукт.</p>
            </div>
          )}
        </div>
      </div>

      {/* Рекомендовані товари */}
      <div className={styles.similarItems}>
        <h2>Similar Items</h2>
        <div className={styles.recommendations}>
          {similarItems.map(
            (
              product, // Вибираємо перші 6 товарів
            ) => (
              <Link to={`/product/${product._id}`} key={product._id}>
                <Product product={product} classNames={classNames} />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
