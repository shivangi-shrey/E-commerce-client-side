import React from 'react';
import { Link } from 'react-router-dom';
 import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav className='container' >
      <ul className="navbar">
        <li><Link to="/" className="navbar-link"></Link></li>
        <li><Link to="/product" className="navbar-link">Products</Link></li>
        <li>
            <Link to="/categories" className='navbar-link'>Categories</Link>
          </li>
        
        <div className='nav2'>
        <li className='ui'>
            <Link to="/login" className="navbar-link">Login</Link>  {/* Link to Login Page */}
          </li>
          <li>
            <Link to="/register" className="navbar-link">Register</Link>  {/* Link to Register Page */}
          </li>
          </div>
      </ul>

    </nav>
  );
};



export default Navbar;
