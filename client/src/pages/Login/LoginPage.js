import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../contexts/AuthContext';
import api from '../../api';
import { Button } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage() {
  const { isLoggedIn, setIsLoggedIn, setUserData, setUserRole ,userRole } = useContext(AuthContext);
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ error, setError ] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      const route = userRole === 'admin' ? '/AdminDashboard' : '/About';
      navigate(route);
    }
  }, [isLoggedIn, userRole, navigate]);
  
  const handleChange = (e) => {
    e.target.name === 'username' ? setUsername(e.target.value) : setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.login(username, password);
      setIsLoggedIn(true);
      setUserData(response.data);
      setUserRole(response.data.user.role);
      localStorage.setItem('token', response.data.token);
      navigate(response.data.user.role === 'admin' ? '/AdminDashboard' : '/About');
    } catch  (error) {
      setError('Invalid username or password');
    }
  };

    return (
      <div className="loginpage">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <Button type="submit">Login</Button>
        </form>
        {/* Link to the registration page */}
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    );
  };

  export default LoginPage;