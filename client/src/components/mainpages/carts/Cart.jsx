import React, { useState, useEffect } from 'react';
import '../../styles/Cart.css'

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Function to calculate total price
  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  return (
    <div>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item._id} className="cart-item">
            <img src={item.image} alt={item.title} width="50" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity || 1}</p>
          </div>
        ))
      )}

      {cart.length > 0 && (
        <div className="cart-total">
          <h3>Total Price: ${calculateTotalPrice()}</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
