import React from "react";
import "./AdminPage.css";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import OfficerInput from "./OfficerInput";
import AlumniInput from "./AlumniInput";
import SponsorInput from "./SponsorInput";
import VideoInput from "./VideoInput";

function AdminPage() {
  return (
    <div className="modify_page">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Officers</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Alumni</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Sponsors</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Videos</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <OfficerInput />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AlumniInput />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <SponsorInput />
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <VideoInput />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
export default AdminPage;
