import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const ProductsFetcher = ({ setProducts }) => {
  useEffect(() => {
    // Fetch products from the Fake Store API
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        // Add UUIDs to products
        const productsWithUUIDs = data.map(product => ({
          ...product,
          id: uuidv4() // Generate a UUID for the product ID
        }));

        setProducts(productsWithUUIDs);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [setProducts]);

  return null;
};

export default ProductsFetcher;
