import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'; 
import ProductApi from "../api/ProductApi"; 

export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false); 
  const productApi = ProductApi();
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || []; // Load cart from localStorage
  });

  const addToCart = (product) => {
    const isLoggedIn = localStorage.getItem('user');
  
    if (!isLoggedIn) {
      alert("Please log in first.");
      return;
    }
  
    const existingCart = JSON.parse(localStorage.getItem('cart') || []);
    const productExists = existingCart.find(item => item._id === product._id);
  
    if (productExists) {
      alert("This product is already in your cart!");
      return;
    }
    // console.log("Adding product to cart:", product);

     const productWithQuantity = { ...product, quantity: 1 }; // Add a quantity of 1 initially
    const updatedCart = [...existingCart, productWithQuantity];
  
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert(`${product.title} added to cart!`);
  };
  
  const state = {
    token: [token, setToken], 
    productApi,   
    cart: [cart, setCart], // Add cart state
    addToCart,  // Provide addToCart function globally
  };

  return (
    <GlobalState.Provider value={state}>
      {children} 
    </GlobalState.Provider>
  );
};

export default DataProvider;
