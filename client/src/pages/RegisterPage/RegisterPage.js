// register page
import React, { Component } from 'react';
import api from '../../api';
import './RegisterPage.css';

class RegisterPage extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    try {
      const response = await api.register({ username, email, password });
      console.log(response.data);
      // Handle success, redirect or inform user
    } catch (error) {
      console.error(error.response.data);
      // Handle errors, inform user
    }
  }

  render() {
    return (
      <div className="register-page">
        <h2>Register</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default RegisterPage;
