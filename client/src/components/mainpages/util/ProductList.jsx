import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ProductList.css';
import { GlobalState } from '../../GlobalState';

const ProductList = ({ product }) => { 
  const { addToCart } = useContext(GlobalState); 

  const handleAddToCart = () => {
    const user = localStorage.getItem('user'); 
    const token = localStorage.getItem('token');

    console.log('User from localStorage:', user); 
    console.log('Token from localStorage:', token); 

    if (!user || !token) { // ✅ Ensure both user and token exist
        alert('Please log in first.');
        return;
    }

    addToCart(product);
    alert(`${product.title} added to cart!`);
};

  return (
    <div className='product_card'>
      <img src={product.image} alt={product.title} />
      <div className='product_box'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <div className='row-btn'>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <Link id='btn_buy' to={'/cart'}>Buy</Link>
        <Link id='btn_view' to={`/detail/${product._id}`}>View</Link>
      </div>
    </div>
  );
}

export default ProductList;
