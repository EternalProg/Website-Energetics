import React from 'react';

import useMainPropositions from '../../hooks/useMainPropositions';
import Slider from '../Slider/Slider';
import styles from './MainPropositions.css';

const MainPropositions = () => {
  const { products, isLoading, error } = useMainPropositions();
  {
    /*const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:9000/api/products')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const mainPropositions = data.filter((product) => product.isMainProposition);
        setProducts(mainPropositions);
        setIsLoading(false); // Завантаження завершено
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      });
  }, []);
*/
  }
  // Рендеринг залежно від стану завантаження
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching products: {error.message}</p>;
  }

  return (
    <div className={styles.square}>
      {products.length > 0 ? <Slider products={products} /> : <p>No main propositions available</p>}
    </div>
  );
};

export default MainPropositions;
