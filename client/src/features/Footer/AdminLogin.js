import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Button } from "react-bootstrap";
require("dotenv").config();

class AdminLogin extends Component{
    static result = false;
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
        const uri = process.env.REACT_APP_URI;
        alert("Correct Password: " + uri);
        if (password === "TestPasswordQQQQ"){
            alert("password correct - yoiu shall pass");
        }else{
            alert("password incorrect - yiou shall not pass");
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
        // alert("Button was clicked " + checkPassword);
    }



    render(){
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
                        <Link to="/Admin" style={{ textDecoration: "none" }}>
                          <Button
                            variant="secondary"
                            size="sm"
                            type="submit"
                            className="submit_button"
                            onClick = {this.onClick}
                          >Submit</Button>
                        </Link>
                      </form>
                    </div>
                  </div>
            </div>
        )
    }	
}
export default AdminLogin;