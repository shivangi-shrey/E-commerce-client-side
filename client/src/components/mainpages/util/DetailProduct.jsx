
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';  // To access route parameters
import { GlobalState } from '../../GlobalState';
import '../../styles/DetailProduct.css'
const ProductDetail = () => {
  const { id } = useParams();  // Retrieve the product ID from the URL
  const { products } = useContext(GlobalState).productApi;  // Get products from global state
  const [product, setProduct] = useState(null);  // State to store the product data
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    const foundProduct = products.find(product => product._id === id);  // Find the product based on id
    if (foundProduct) {
      setProduct(foundProduct);
      setLoading(false);
    } else {
      setLoading(false);  // If no product found, just stop loading
    }
  }, [id, products]);  // Re-run when product list or id changes

  if (loading) {
    return <div>Loading...</div>;  // Display loading text
  }

  if (!product) {
    return <div>Product not found.</div>;  // Handle product not found
  }

  return (
    <div className="product-detail">
      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-detail-info">
          <h1>{product.title}</h1>
          <p><strong>Price:</strong> ${product.price}</p>
          <p><strong>Description:</strong> {product.description}</p>
          <p><strong>Content:</strong> {product.content}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Sold:</strong> {product.sold}</p>
          
          <div className="add-to-cart">
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
