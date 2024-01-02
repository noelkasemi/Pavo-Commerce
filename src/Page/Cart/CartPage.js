// CartPage.js
import React from 'react';
import Products from './Products';
import Price from './Price';
import useResizeEffect from '../../Tools/ResizeEffect';
import { useState } from 'react';

const CartPage = () => {
  const isMobile = useResizeEffect()
  const [totalPrices, setTotalPrices] = useState([]);

  const handleTotalPricesChange = (prices) => {
    setTotalPrices(prices);
  };
  return (
    <section className={`min-h-screen ${isMobile ? 'flex flex-col items-center' : 'flex'}  w-full space-x-4 xl:px-44 lg:px-14 justify-center bg-[#f3f3f3] px-2`}>  
      <Products style={`md:w-2/3 w-full md:mt-24`} onTotalPricesChange={handleTotalPricesChange} />
      <Price totalPrices={totalPrices} style={`md:w-1/3 w-full ${isMobile ? 'w-full md:w-2/3 mb-8 mt-4' : 'w-1/3 mt-24'} h-fit`} />
    </section>
  );
};

export default CartPage;
