import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/ProductList.css'
const ProductList = ({ product }) => {  // Destructure the product prop properly

  console.log(product)  // Log the product to check it

  return (
    <div className='product_card'>
      <img src={product.image} alt={product.title} /> {/* Corrected the image src */}
      <div className='product_box'>
        <h2 title={product.title}>{product.title}</h2>
        <span>${product.price}</span>
        <p>{product.description}</p>
      </div>
      <div className='row-btn'>
        <Link id='#btn_buy' to={'#!'}>Buy</Link>
        <Link id='#btn_view' to={`/detail/${product._id}`}>View</Link>  {/* Fixed link to include product._id */}
      </div>
    </div>
  ) 
}

export default ProductList;
