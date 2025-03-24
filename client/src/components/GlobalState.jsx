import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'; // Import axios
import ProductApi from "../api/ProductApi"; // Import the ProductApi file
// import UserApi from "../api/UserApi"; // Import the UserApi file

// Create a global context to share state across the app
export const GlobalState = createContext();

const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false); // Initialize token from localStorage
  const productApi = ProductApi(); // Get the product data from ProductApi
  // console.log('Token in DataProvider:', token); // Log the token value

  // const refreshToken = async () => {
  //   const res = await axios.get('/user/refresh_token');
    
  //   setToken(res.data.accesstoken);
  // };

  // useEffect(() => {
  //   const firstLogin = localStorage.getItem('firstlogin');
  //   if (firstLogin) {
  //     refreshToken();
  //   }
  // }, []); // Dependency array ensures it only runs once when the component mounts

  const state = {
    token: [token, setToken], // Providing the token and setter in the global state
    productApi,   // Providing the product API state
  };

  return (
    <GlobalState.Provider value={state}>
      {/* <UserApi token={token} /> Render UserApi component and pass token */}
      {children} {/* Rendering children components inside the provider */}
    </GlobalState.Provider>
  );
};

export default DataProvider;
