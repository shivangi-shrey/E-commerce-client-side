import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../../styles/Register.css"

const Register = () => {
  const [user,setUser]= useState({
    name:'',
    email:'',
    password:'',
  });
  const [error,setError]=useState('');
  const [message,setMessage] = useState('');
  const navigate = useNavigate();
  const  onChangeInput =(e)=>{
    const {name,value}=e.target
    setUser({
      ...user,
      [name]:value,
    })
  }

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await axios.post('http://localhost:5000/user/register', user);
      setMessage(response.data.msg); // Display success message
      navigate('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.response?.data?.msg || 'Registration failed. Please try again.');
    }
  };
  return (
    <div >
      <h2>Register</h2>
      <div  className='register-page'>
      <form onSubmit={handleRegister}>
        <div className='input-group'>
          <input
          type='text'
          name='name'
          required placeholder='name'
          value={user.name}
          onChange={onChangeInput}
          />
          
          </div>
          <div className="input-group">
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            value={user.email}
            onChange={onChangeInput}
            autoComplete="username"
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
            autoComplete="current-password" // For login, specify current password
  
          />
        </div>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
        {message && <p className="success-message">{message}</p>} {/* Display success message */}
        <button type="submit">Register</button>
      </form>
      <div className="login-link">
        <p>Already have an account? <a href="/">Login here</a></p>
      </div>
      </div>
    </div>
  )
}

export default Register
