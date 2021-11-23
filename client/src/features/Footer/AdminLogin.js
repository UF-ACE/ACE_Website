import React, {Component} from "react";
import {Redirect, Route} from "react-router-dom";
import {Button } from "react-bootstrap";
require("dotenv").config();

class AdminLogin extends Component{
    static result = false;
    state = {redirect: null};
    constructor(props){
        super(props);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            password: 'blankPassword',
        }
    }
    checkPassword(password){
        // const location = useLocation();
        const loginPassword = process.env.REACT_APP_ACEKingsOnly;
        if(password === 'blankPassword'){
            alert("Please Enter Password");
        }
        else if (password === loginPassword){
            // alert("password correct - yoiu shall pass");
            this.setState({ redirect: "/Admin" });
            <Route path="/" render={() => <Redirect to = "/Admin"/>}/>


        }else if (password !== loginPassword){
            alert("Invalid Password - please enter correct password");
            this.setState({ redirect: "/#" });
            this.setState({
                password: 'blankPassword',
            });
        }
    }
    onPasswordChange(e){
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
        this.checkPassword(insertedPassword);
    }



    render(){
        if (this.state.redirect) {
            return (
                <div className = "AdminDashboard">
                <Redirect to={this.state.redirect} />
                {/* Have to re-render the form or else it will not show up in footer unless the page is refreshed */}
                <h1>Admin Login</h1>
                  <div className="test_input">
                    <div className="input_form">
                      <form onSubmit = {this.onSubmit}>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Password"
                        onChange = {this.onPasswordChange}
                        />
                        <Button
                        variant="secondary"
                        size="sm"
                        type="submit"
                        className="submit_button"
                        onClick = {this.onClick}
                        >Submit</Button>
                      </form>
                    </div>
                  </div>
                    <h1>Result: {process.env.REACT_APP_URI}</h1>
            </div>
            )
        }
        return(
            <div className = "AdminDashboard">
                <h1>Admin Login</h1>
                  <div className="test_input">
                    <div className="input_form">
                      <form onSubmit = {this.onSubmit}>
                        <input 
                        type="text" 
                        name="name" 
                        placeholder="Password"
                        onChange = {this.onPasswordChange}
                        />
                        <Button
                        variant="secondary"
                        size="sm"
                        type="submit"
                        className="submit_button"
                        onClick = {this.onClick}
                        >Submit</Button>
                      </form>
                    </div>
                  </div>
            </div>
        )
    }	
}
export default AdminLogin;