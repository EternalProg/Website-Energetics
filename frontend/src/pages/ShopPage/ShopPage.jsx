import React from 'react';

import FilterPanel from '../../components/FilterPanel/FilterPanel';
import ProductGrid from '../../components/ProductGrid/ProductGrid';
import useAllProducts from '../../hooks/useAllProducts';
import styles from './ShopPage.css';

const ShopPage = () => {
  const { products, isLoading, error } = useAllProducts();

  {
    /*const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);
 console.log('Products1', products);
 */
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div className={styles.shopPage}>
      <h1> Shop The Latest </h1>
      <div className={styles.grid}>
        <FilterPanel />
        <ProductGrid products={products} />
      </div>
    </div>
  );
};
export default ShopPage;
