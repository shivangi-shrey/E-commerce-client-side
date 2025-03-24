import React, { useContext, useState } from 'react'; // Importing React and useState
import { MdOutlineMenu } from 'react-icons/md'; // Icon for menu
import { MdOutlineAddShoppingCart } from 'react-icons/md'; // Icon for shopping cart
import { Link } from 'react-router-dom'; // Importing Link for routing

// Optionally, uncomment if you want to include CSS styles
 import '../styles/Header.css'
// import { GlobalState } from '../GlobalState';

const Header = () => {
  // Initialize cartCount state
  // const state = useContext(GlobalState)
  // console.log(state)
  const [cartCount, setCartCount] = useState(0);

  return (
    <header>
      <div className='menu'>Menu
        {/* Single instance of MdOutlineMenu */}
        <MdOutlineMenu width={30} />
      </div>
      <div className='logo'>
        <h1>
          {/* Link to the homepage */}
          <Link to='/'>Modern Shop</Link>
        </h1>
      </div>
      <div className="search-bar">
        {/* Search bar for products */}
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="cart">
        <Link to="/cart">
          {/* Shopping cart icon */}
          <MdOutlineAddShoppingCart size={30} />
          {/* Show cart count if it's greater than 0 */}
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </Link>
      </div>
    </header>
  );
};

export default Header;
