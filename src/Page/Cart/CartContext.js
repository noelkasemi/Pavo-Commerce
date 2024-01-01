// CartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Effect to update the cart items from local storage
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartItems(storedCartItems);
  }, []);

  // Function to update the cart items and trigger re-render
  const updateCartItems = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartProducts')) || [];
    setCartItems(storedCartItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCartItems }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
