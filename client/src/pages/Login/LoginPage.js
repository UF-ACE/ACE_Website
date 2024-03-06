import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom'; // Import Link from react-router-dom
import AuthContext from '../../contexts/AuthContext';
import api from '../../api';
import { Button } from 'react-bootstrap';
import './LoginPage.css';

class LoginPage extends Component {
  static contextType = AuthContext;

  state = {
    username: '',
    password: '',
    error: '',
  };

  componentDidMount() {
    // Example of automatic redirection if already logged in
    // This requires your AuthContext to have isLoggedIn and userRole state
    if (this.context.isLoggedIn) {
      const route = this.context.userRole === 'admin' ? '/AdminDashboard' : '/About';
      this.props.history.push(route);
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = this.state;

    try {
      const response = await api.login(username, password);
      // Assuming the response includes the user's role and token
      this.context.setIsLoggedIn(true);
      this.context.setUserData(response.data.user);
      localStorage.setItem('token', response.data.token); // Store the token
      
      // Redirect based on user role
      const route = response.data.user.role === 'admin' ? '/AdminDashboard' : '/user';
      this.props.history.push(route);
    } catch (error) {
      this.setState({ error: 'Invalid username or password.' });
    }
  };

  render() {
    const { username, password, error } = this.state;

    return (
      <div className="loginpage">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={this.handleChange}
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange}
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
  }
}

export default withRouter(LoginPage);
