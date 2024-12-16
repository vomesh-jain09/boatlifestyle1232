import React, { useState, useContext } from 'react';
import './Login.css'; // Import the CSS file
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import UserContext from './Usercontext';
import boat from './boat.svg';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { makeUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reset error message

    try {
      const res = await axios.post('http://localhost:9000/Login', formData);
    console.log(res)
      makeUser(res.data.data.user);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed"); // Capture specific error message
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <div className="login-container">
      <marquee>
      <h1 className="title" >Login to <img src={boat} width="50px"/> lifestyle</h1></marquee>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="login-button" disabled={loading} >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
