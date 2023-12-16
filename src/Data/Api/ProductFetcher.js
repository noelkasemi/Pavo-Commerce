import { useEffect } from "react";

const ProductFetcher = ({setProducts}) => {
    useEffect(() => {
        // Fetch products from the Fake Store API
        const fetchProducts = async () => {
          try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
    
        fetchProducts();
      }, [setProducts]);
      return null
}

export default ProductFetcher