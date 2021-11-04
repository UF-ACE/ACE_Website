import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav, Form, Button } from "react-bootstrap";
import styles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className={styles.mt_5} bg="dark">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col>
          <h5>Contact Us</h5>
              <Row className="mb-3">
                <Form.Group className="mr-3">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control size="sm" type="text"/>
                </Form.Group>
                <Form.Group className="ml-3">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control size="sm" type="text"/>
                </Form.Group>
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control size="sm" type="email" placeholder="example@example.com" />
                </Form.Group> 
              </Row>
              <Row>
                <Form.Group>
                  <Form.Label className="mr-3">Message</Form.Label>
                  <Form.Control as="textarea" size="sm" type="text" style={{width: "35vw", height: "100px"}}/>
                </Form.Group>
              </Row>
              <Row>
                <Button variant="primary" type="submit" className="text-center mb-3">
              Submit
                </Button>
              </Row>
          </Col>
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
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;