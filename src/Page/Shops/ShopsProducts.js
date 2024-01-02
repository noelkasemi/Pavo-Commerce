import { useState, useEffect } from "react";
import ProductCard from "../ProductPage/ProductCard";
import { useNavigate, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const ShopsProducts = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const { shopCategory, shopName } = useParams();

  // State to track cart status
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  // Function to handle adding to cart
  const addToCartHandler = (product) => {
    // Create a new object with a unique UUID for the product ID
    const productToAdd = {
      ...product,
      id: uuidv4(),
    };
    // Add the product to local storage
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const updatedCart = [...cartProducts, productToAdd];
    localStorage.setItem("cartProducts", JSON.stringify(updatedCart));
    // For now, let's just update the state to simulate the product being added
    setIsAddedToCart(true);
  };


  // Function to navigate to ProductDetails with the selected product
  const navigateToProductDetails = (product) => {
    const escapedShopName = encodeURIComponent(shopName).replace(/%20/g, '-');
    const escapedValue = encodeURIComponent(product.title).replace(/%20/g, '-');
    navigate(`/shops/${escapedShopName}/products/${escapedValue}`, { state: { product } });
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
          <ProductCard onAddToCart={() => addToCartHandler(product)} key={product.id} product={product} onClick={() => openModal(product)} />
        ))}
      </section>
    </section>
  );
};

export default ShopsProducts;
