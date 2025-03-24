import React, { useContext, useEffect } from 'react';
import { GlobalState } from '../../GlobalState';
import ProductList from '../util/ProductList';
import '../../styles/Product.css'

const Products = () => {
  const state = useContext(GlobalState); // Access global state
  const { products } = state.productApi; // Destructure products directly

  console.log("Products data:", products); // Log the products to verify

  if (!products || products.length === 0) {
    return <div>No products available.</div>; // Handle no products scenario
  }

  return (
    <div className='products'>
      {products.map((product) => {
        return <ProductList key={product._id} product={product} />; // Pass individual product to ProductList
      })}
    </div>
  );
};

export default Products;
