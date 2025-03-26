import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import '../../styles/DetailProduct.css';

const ProductDetail = () => {
  const { id } = useParams();
  const globalState = useContext(GlobalState);
  const { products } = globalState.productApi; // Get products
  const { addToCart } = globalState; // ✅ Get `addToCart` from GlobalState
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const foundProduct = products.find((product) => product._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [id, products]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found.</div>;

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
            <button onClick={() => addToCart(product)}>Add to Cart</button> {/* ✅ Now `addToCart` works */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
