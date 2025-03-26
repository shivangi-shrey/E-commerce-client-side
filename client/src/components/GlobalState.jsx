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

  // Function to add a product to cart
  const addToCart = (product) => {
    const isLoggedIn = localStorage.getItem('user'); // Check if user is logged in

    if (!isLoggedIn) {
      alert("Please log in first.");
      return;
    }

    const existingCart = [...cart];

    // Check if product already exists in cart
    const productExists = existingCart.find(item => item._id === product._id);
    if (productExists) {
      alert("This product is already in your cart!");
      return;
    }

    const updatedCart = [...existingCart, product];

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Save to localStorage
    window.dispatchEvent(new Event("storage")); // Notify other components

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
