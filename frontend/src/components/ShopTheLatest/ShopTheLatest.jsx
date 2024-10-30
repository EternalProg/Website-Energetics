import React from 'react';
import { Link } from 'react-router-dom';

import useAllProducts from '../../hooks/useAllProducts';
import Product from '../Product/Product';
import styles from './ShopTheLatest.css';

const ShopTheLatest = () => {
  const { products, isLoading, error } = useAllProducts();

  {
    /*
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
*/
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div>
      <ul>
        <li className={styles.shopTheLatest}>Shop The Latest</li>
        <li>
          <Link to={'/shop'} className={styles.viewAll}>
            View All
          </Link>
        </li>
      </ul>

      <div className={styles.products}>
        {products.slice(0, 6).map(
          (
            product, // Вибираємо перші 6 товарів
          ) => (
            <Link to={`/product/${product._id}`} key={product._id}>
              <Product product={product} classNames={{}} />
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default ShopTheLatest;

//import powerBank1 from './images/powerBank1.png';
