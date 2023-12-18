// Import necessary dependencies
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch';
import ProductsFetcher from '../../Data/Api/ProductsFetcher';
import { useNavigate } from 'react-router-dom';

const ProductGrid = ({ initialDisplayCount = 100, showSeeMore = false, style = '', search }) => {
  const [products, setProducts] = useState([]);
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const navigate = useNavigate();


  // Function to navigate to ProductDetails with the selected product
  const navigateToProductDetails = (product) => {
    navigate(`/product/${product.id}`, { state: { product } });
  };
 
  // Function to open the modal with a selected product
  const openModal = (product) => {
    navigateToProductDetails(product);
    window.scrollTo(0, 0);
  };

  return (
    <section className={`${style} w-full relative `}>
  
<ProductsFetcher setProducts={setProducts} />

      <article className='w-full md:px-0 px-4'>{search && <ProductSearch data={products} />}</article>

      <section className="grid grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-5 xl:w-10/12 gap-4 xl:px-0 sm:px-16 ">
        {products.slice(0, displayCount).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={() => openModal(product)} // Pass the product to the openModal function
          />
        ))}
      </section>
      {showSeeMore && displayCount < products.length ? (
        <section className='w-full flex justify-center'>
          <button
            className="border border-[#e65228] px-4 py-2 rounded font-semibold hover:bg-[#e65228] hover:text-white text-[#e65228] w-fit my-8"
            onClick={() => setDisplayCount(displayCount + 10)}
          >
            See More
          </button>
        </section>
      ) : null}
    </section>
  );
};

export default ProductGrid;
