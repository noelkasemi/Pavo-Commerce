import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductSearch from './ProductSearch'

const ProductGrid = ({ navigateTo, initialDisplayCount = 100, showSeeMore = false, style = '', search }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

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
  }, []);

  // Function to open the modal with a selected product
  const openModal = (product) => {
    setSelectedProduct(product);
    navigateTo(product);
  };

  return (
    <section className={`${style === '' ? 'pt-24' : 'pt-0'} w-full relative `}>
        <article className='w-full md:px-0 px-4'>{search && <ProductSearch data={products} />}</article> 

      <section className="grid grid-cols-2 md:grid-cols-3 mx-auto lg:grid-cols-4 xl:grid-cols-5 xl:w-10/12 gap-4 xl:px-0 sm:px-16 ">
        {products.slice(0, displayCount).map((product) => (
          <ProductCard navigateTo={navigateTo} key={product.id} product={product} onClick={openModal} />
        ))}
      </section>
      {showSeeMore && displayCount < products.length ?  (
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
