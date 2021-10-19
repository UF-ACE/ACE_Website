import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className={styles.mt_5} bg="dark">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3}>
            <h5>Association of Software Engineers</h5>
            {/* TODO 
            Add Social Media Icons */}
            <Nav className="ml-auto" bg="dark">
              <div className="icons">
                <SocialIcon url="https://www.instagram.com/ace_uf/"></SocialIcon>
                <SocialIcon url="https://twitter.com/ace_uf/"></SocialIcon>
                <SocialIcon url="https://www.facebook.com/GatorACE"></SocialIcon>
              </div>
            </Nav>
          </Col>
          <Col>
            <h5>Menu</h5>
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
              <NavItem>
                {" "}
                <Link className="nav-link" to="/Admin">
                  Admin
                </Link>{" "}
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
