import React from "react";
import "./VideoThumbnail.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Thumbnail({ embedId, title, description, tags }) {
  return (
    <Container>
        <Row>
          <Col>
            <div class = "thumbnail">
                <a href={"https://www.youtube.com/embed/" + embedId}
                rel="noopener noreferrer" target="_blank"
                >
                <img src={"http://img.youtube.com/vi/" + embedId + '/0.jpg'}
                  alt={title} class="img-fluid rounded"/>
                </a>
            </div>
          </Col>
          <Col>
            <div class="row">
                <div class = "title">
                <h2>{title}</h2>
                </div>
            </div>
            <div class="row">
                <div class = "description">
                <h4>{description}</h4>
                </div>
            </div>
          </Col>
        </Row>
    </Container>
    
  );
}
export default Thumbnail;