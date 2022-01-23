import AdminPage from "../AdminDashboard/AdminPage";
import api from "../../api"
import React, { Component } from "react";
import { Button } from "react-bootstrap";
import styles from "./LoginPage.css"
import { v4 as uuidv4 } from 'uuid'


class LoginPage extends Component {
    constructor (props) {
        super(props);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            username: 'blankUsername',
            password: 'blankPassword',
        }
    }

    checkCreds(username, password) {
        if (username === 'blankUsername' || password === 'blankPassword') {
            alert('Please enter a username and password')
        }
        else {
            api.login(username, password).then(res => {
                let sessionToken = uuidv4()
                sessionStorage.setItem('token', sessionToken)
                let newToken = {
                    token: sessionToken
                }
                api.updateToken(newToken).then(res => {
                    this.setState({
                        username: 'blankUsername',
                        password: 'blankPassword',
                    })
                    window.location.reload()
                })
            }).catch(err => {
                alert('Invalid credentials')
                this.setState({
                    username: 'blankUsername',
                    password: 'blankPassword',
                })
                window.location.reload()
            })
        }
    }
    onUsernameChange(e) {
        this.setState({
            username: e.target.value
        });
    }
    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
    }
    onClick(e){
        e.preventDefault();
        let insertedPassword = this.state.password;
        let insertedUsername = this.state.username;
        this.checkCreds(insertedUsername, insertedPassword);
    }

    render() {
        if (!sessionStorage.getItem('token')) {   // If the user has not been given a token, display the login page
            return (
                <div className="loginpage">
                    <div className="description">
                            <h1>Login</h1>
                            <h3>
                                This page should only be used by ACE admins looking to make changes to the site. Fill out the
                                following form with authenticated credentials to make such changes.
                            </h3>
                    </div>
                    <div className="input_form mt-5 mb-5">
                        <form onSubmit = {this.onSubmit}>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Username"
                                onChange = {this.onUsernameChange}
                            />
                            <input 
                                type="password" 
                                name="name" 
                                placeholder="Password"
                                onChange = {this.onPasswordChange}
                            />
                            <Button
                                variant="secondary"
                                size="sm"
                                type="submit"
                                onClick={this.onClick}
                                className={styles.submit_button}
                                >Submit
                            </Button>
                        </form>
                    </div>
                </div>
            );
        }
        else {
            return (
                <AdminPage />
            )
        }
    }
  }
  
  export default LoginPage;