//import PropTypes from 'prop-types';
import React from 'react';

import Product from '../../components/Product/Product';
//import { useParams } from 'react-router-dom';
import styles from './ProductPage.css';

const ProductPage = () => {
  const [quantity, setQuantity] = React.useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const [activeTab, setActiveTab] = React.useState('details');
  //const { id } = useParams();
  // Тут ви можете отримати дані продукту за id, наприклад, з API або з масиву продуктів
  //const product = products.find((product) => product.url === `/product/${id}`);

  /*if (!product) {
    return <div>Product not found</div>;
  }*/
  const similarProducts = [
    {
      id: 1,
      image: 'https://via.placeholder.com/100',
      name: 'Product 1',
      price: 99.99,
      url: '/product/1',
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/100',
      name: 'Product 2',
      price: 99.99,
      url: '/product/2',
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/100',
      name: 'Product 3',
      price: 99.99,
      url: '/product/3',
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/100',
      name: 'Product 4',
      price: 99.99,
      url: '/product/4',
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/100',
      name: 'Product 5',
      price: 99.99,
      url: '/product/5',
    },
  ];

  const classNames = {
    product: styles.recommendationProduct,
    productImage: styles.recommendationProductImage,
    productName: styles.recommendationProductName,
    productPrice: styles.recommendationProductPrice,
  };

  return (
    /*<div className={styles.productPage}>
    <div className={styles.product}>
      <div>

      </div>
    </div>
    //<h1> Name {/*{product.name}*/

    //<img src={'https://via.placeholder.com/150' /*{product.image}*/} alt={'Name' /*product.name*/} />
    //<p>Price: ${/*product.price*/}</p>
    //</div>
    <div className={styles.productPage}>
      <div className={styles.product}>
        <div className={styles.imageGallery}>
          {/* Маленькі зображення в стовпчик */}
          <img src="https://via.placeholder.com/50" alt="thumbnail1" />
          <img src="https://via.placeholder.com/50" alt="thumbnail2" />
          <img src="https://via.placeholder.com/50" alt="thumbnail3" />
          <img src="https://via.placeholder.com/50" alt="thumbnail3" />
        </div>

        <img src="https://via.placeholder.com/150" alt="Large product" className={styles.largeImage} />

        <div className={styles.productDetails}>
          {/* Велике зображення продукту */}

          <h1>Name</h1>
          <p className={styles.price}>$ 99.99</p>

          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit,
            sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat
            sed eu felis.
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
              <p>Опис продукту, його характеристики тощо.</p>
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
          <Product product={similarProducts[0]} classNames={classNames} />
          <Product product={similarProducts[1]} classNames={classNames} />
          <Product product={similarProducts[2]} classNames={classNames} />
          <Product product={similarProducts[3]} classNames={classNames} />
          <Product product={similarProducts[4]} classNames={classNames} />
        </div>
      </div>
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
