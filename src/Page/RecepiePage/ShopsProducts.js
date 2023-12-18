import { useState, useEffect } from "react";
import ProductCard from "../ProductPage/ProductCard";
import { useNavigate, useParams } from "react-router-dom";

const ShopsProducts = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const { shopCategory } = useParams();

 
  // Function to navigate to ProductDetails with the selected product
  const navigateToProductDetails = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
    window.scrollTo(0, 0);
  };
 
  // Function to open the modal with a selected product
  const openModal = (product) => {
    navigateToProductDetails(product);
    window.scrollTo(0, 0);
  };

  // Fetch products and setProducts when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${shopCategory}`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
  
    fetchProducts();
  }, [shopCategory]);

  return (
    <section className="w-full">
      <section className="grid grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-5 xl:w-10/12 gap-4 xl:px-0 sm:px-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onClick={() => openModal(product)} />
        ))}
      </section>
    </section>
  );
};

export default ShopsProducts;
