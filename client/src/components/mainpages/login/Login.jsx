import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
  import '../../styles/Login.css'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState(''); // For handling error messages
  const navigate = useNavigate(); // For page redirection after login

  // Handle form submission
  const loginSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error message before making API request

    try {
      // Send login request to server
      const response = await axios.post('http://localhost:5000/user/login', {
        ...user,
      });
      console.log(response.data)

      // If login is successful, store the token and redirect
      if (response.data.accesstoken) {
        localStorage.setItem('token', response.data.accesstoken); // Store token in localStorage
        window.location.href ="/product"; // Redirect to dashboard or any other page
      }
    } catch (err) {
      // Set error message if login fails
      setError(err.response?.data?.msg || 'Login failed. Please try again!');
    }
  };

  // Handle changes in input fields
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value, // Dynamically update the field that changed
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <div className="login-page">
        <form onSubmit={loginSubmit}>
          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={user.email}
              onChange={onChangeInput}
              autoComplete='email'
            />
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              required
              placeholder="Password"
              value={user.password}
              onChange={onChangeInput}
              autoComplete='current-password'
            />
          </div>

          {error && <p className="error-message">{error}</p>} {/* Display error if any */}

          <div className="submit-button">
            <button type="submit">Login</button>
          </div>

          {/* Link to Forgot Password page */}
          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          {/* Link to Register page */}
          <div className="register-link">
            <Link to="/register">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
