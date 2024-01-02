import React, { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import { TrashIcon } from "../Partials/Imports";

export default function Products({ style, onTotalPricesChange }) {
  // Get the cart products from local storage and stores them
  const [storedCartItems, setStoredCartItems] = useState([]);

  //Stores the items inside the state
  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cartProducts")) || [];
    setStoredCartItems(cartProducts);
  }, []); // Empty dependency array ensures it only runs once on mount

  //function to empty the cart/local storage
  const clearCart = () => {
    localStorage.removeItem("cartProducts");
  };

  //Function to remove a product
  const handleProductRemove = (productId) => {
    //Gets the current items inside the local storage
    const currentCartItems = JSON.parse(localStorage.getItem("cartProducts")) || [];
    //Filters out the selected one
    const updatedCartItems = currentCartItems.filter((item) => item.id !== productId);
    //Removes the selected one
    localStorage.setItem("cartProducts", JSON.stringify(updatedCartItems));
    //Updates the state of the cart items
    setStoredCartItems(updatedCartItems)
  }

  //Calculates the total prices for the items in the cart
  useEffect(() => {
    const totalPrices = storedCartItems.map(product => {
      const quantity = parseInt(localStorage.getItem(`product_${product.id}_quantity`), 10) || 1;
      const priceAfterDiscount = ((product.price / 100) * 50).toFixed(1);
      return (priceAfterDiscount * quantity);
    });

    onTotalPricesChange(totalPrices);
  }, [storedCartItems, onTotalPricesChange]);

  return (
    <section className={`${style} h-fit bg-white rounded shadow py-4 divide-y md:mb-8`}>
      <article className="hidden md:flex w-full px-4 font-semibold text-lg py-2 ">
        <h1 className="w-6/12">Products</h1>
        <p className="w-2/12">Price</p>
        <p className="w-2/12">Quantity</p>
        <p className="w-2/12">Total Price</p>
        <TrashIcon style={`hover:outline outline-1 rounded p-1`} onClick={clearCart} />
      </article>
      {storedCartItems.length > 0 ? (
        storedCartItems.map((product, i) => (
          <ProductCard onProductRemove={handleProductRemove} key={`${product.id}_${i}`} product={product} />
        ))
      ) : (
        <p className="text-slate-300 font-semibold text-center pt-4">No products in the cart</p>
      )}
    </section>
  );
}
