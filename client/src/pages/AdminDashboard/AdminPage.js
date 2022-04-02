import React from "react";
import "./AdminPage.css";
import { Row, Col, Tab, Nav } from "react-bootstrap";
import OfficerInput from "./OfficerInput";
import AlumniInput from "./AlumniInput";
import SponsorInput from "./SponsorInput";
import VideoInput from "./VideoInput";
import AnnouncementInput from './AnnouncementInput'

function AdminPage() {
  return (
    <div className="modify_page">
      <Row className="pb-md-5">
      <Tab.Container className="p-md-5" id="left-tabs-example" defaultActiveKey="first">
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
              <Nav.Item>
                <Nav.Link eventKey="fifth">Announcement</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <Col className="px-5">
                  <OfficerInput />
                </Col>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Col className="px-5">
                  <AlumniInput />
                </Col>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Col className="px-5">
                  <SponsorInput />
                </Col>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Col className="px-5">
                  <VideoInput />
                </Col>
              </Tab.Pane>
              <Tab.Pane eventKey="fifth">
                <Col className="px-5">
                  <AnnouncementInput/>
                </Col>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Row>
    </div>
  );
}
export default AdminPage;
