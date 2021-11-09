import React from "react";
import BackgroundImage from "../features/BackgroundImage";
import BackgroundYoutube from "../features/BackgroundYoutube";
import "./HomePage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
  return (
    <div className="homepage">
      <Container fluid>
        <BackgroundImage />
        <div className="background_video">
          <h1>Latest Video</h1>
          <BackgroundYoutube className="homepage_video" embedId="rokGy0huYEA" />
        </div>
      </Container>
    </div>
  );
}

export default HomePage;
