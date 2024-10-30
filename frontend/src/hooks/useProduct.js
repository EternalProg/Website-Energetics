import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProduct = () => {
  const [productData, setProductData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const { productId } = useParams();

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:9000/api/productPage/${productId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          setProductData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching product:', error);
          setError(error);
          setIsLoading(false);
        });
    }
  }, [productId]);

  return { productData, isLoading, error };
};

export default useProduct;
