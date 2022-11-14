import React from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Nav } from "react-bootstrap";
import styles from "./Footer.module.css";
import { SocialIcon } from "react-social-icons";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className={styles.mt_5}>
      <Container fluid={true}>
        <Row className="border-top justify-content-md-center p-3 pt-5 h-50">
          <Col md="auto">
              <ContactForm/>
          </Col>
          <Col md="auto">
          <Button
            variant="secondary"
            size="lg"
            className={styles.submit_button}
            onClick={() => window.open("https://github.com/UF-ACE/ACE_Website", '_blank')}
          >
            Source Code
            </Button>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h5>Association of Computer Engineers</h5>
            <Nav className="ml-auto" bg="dark">
              <div className="icons">
                <SocialIcon url="https://www.instagram.com/ace_uf/"></SocialIcon>
                <SocialIcon url="https://www.facebook.com/GatorACE"></SocialIcon>
                <SocialIcon url="https://join.slack.com/t/uf-ace/shared_invite/zt-1fu4wzhpv-AKRTOtWqfCx3jnfIojaIpw" network="slack" fgColor="yellow"></SocialIcon>
                <SocialIcon url="https://discord.gg/dtdpsFqdUW"></SocialIcon>
              </div>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
