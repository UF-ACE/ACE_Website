import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import logo from "../imgs/logo-min.png";
import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";

class NavigationBar extends Component {
  render() {
    return (
      <div className={classes.navbar}>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home" className="sticky-nav">
            {" "}
            <Link className="nav-link" to="/">
              {" "}
              <img src={logo} width="65" height="30" alt="" />{" "}
            </Link>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <NavItem>
                {" "}
                <Link className="nav-link" to="/About">
                  About us
                </Link>{" "}
              </NavItem>
              <NavItem>
                {" "}
                <Link className="nav-link" to="/Learn">
                  Learn
                </Link>{" "}
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;
