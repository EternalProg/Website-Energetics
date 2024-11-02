import { useEffect, useState } from 'react';

const useAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data); // Зберігаємо всі продукти
        setIsLoading(false); // Завантаження завершено
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  return { products, isLoading, error };
};

export default useAllProducts;
