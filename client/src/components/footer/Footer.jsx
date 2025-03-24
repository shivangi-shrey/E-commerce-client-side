import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import visaImage from '../../assets/mernimage/visa_icon.png'
import mastercardImage from '../../assets/mernimage/mastercard.png'
import paypalImage from '../../assets/mernimage/paypal_payment.png'
import stripeImage from '../../assets/mernimage/stripe_icon.png'


function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-section about">
            <h2>About Us</h2>
            <p>We are an e-commerce platform offering a wide range of products with fast shipping and excellent customer service.</p>
          </div>

          <div className="footer-section customer-service">
            <h2>Customer Service</h2>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping & Returns</a></li>
              <li><a href="#">Order Tracking</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>

          <div className="footer-section quick-links">
            <h2>Quick Links</h2>
            <ul>
              <li><a href="#">Shop</a></li>
              <li><a href="#">New Arrivals</a></li>
              <li><a href="#">Best Sellers</a></li>
              <li><a href="#">Sale</a></li>
            </ul>
          </div>

          <div className="footer-section contact">
            <h2>Contact Us</h2>
            <p>Email: support@ecommerce.com</p>
            <p>Phone: (123) 456-7890</p>
        

<div className="social-icons">
  <a href="https://www.facebook.com/YourPage" className="social-icon"><FaFacebook /></a>
  <a href="https://www.instagram.com/YourPage" className="social-icon"><FaInstagram /></a>
  <a href="https://www.twitter.com/YourPage" className="social-icon"><FaTwitter /></a>
  <a href="https://www.linkedin.com/company/YourCompany" className="social-icon"><FaLinkedin /></a>
</div>

          </div>
        </div>

        <div className="footer-bottom">
          <div className="payment-options">
            <img src={visaImage} alt='visa'/>
            <img src={mastercardImage} alt="MasterCard" />
            <img src={paypalImage} alt="PayPal" />
            <img src={stripeImage} alt="Stripe" />
          </div>

          <div className="newsletter">
            <h3>Sign up for our Newsletter</h3>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <p>&copy; 2025 E-commerce Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
