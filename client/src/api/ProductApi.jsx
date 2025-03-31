import { useState, useEffect } from "react";
import axios from "axios";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const ProductApi = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  const getProducts = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/`); // Your API endpoint
      console.log("API Response:", res.data); // Log the entire response
      
      if (res.data && Array.isArray(res.data)) {
        setProducts(res.data);
      } else {
        console.error("Invalid response structure. Expected an array in 'products'.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    }
  };
  

  useEffect(() => {
    getProducts(); // Fetch products when component mounts
  }, []);

  return { products, setProducts }; // Return products and setter
};

export default ProductApi;
