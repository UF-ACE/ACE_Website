import React from "react";
import "./AddOfficersPage.css";
import {Row,Col, Tab, Nav} from 'react-bootstrap'

function AddOfficersPage() {
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
                <Col sm={11}>
                <Tab.Content>
                <Tab.Pane eventKey="first">
                      <h3>Add Officer</h3>
                        <div className="test_input">
                          <div className="input_form">
                            <form>
                              <input type="text" name="name" placeholder="Name" />
                              <input type="text" name="title" placeholder="Title" />
                              <input type="text" name="email" placeholder="Email" />
                              <input type="text" name="linkedin" placeholder="LinkedIn" />
                              <input type="text" name="password" placeholder="Password" />
                              <input type="file" name="file" id="file" class = "inputFile"/>
                              <label for="file">File</label>
                              {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                              <button className="submit_button">Submit</button>
                            </form>
                          </div>

                          <h3>Current Officers</h3>
                          <div className="input_form">
                            <form>
                            <input type="text" name="name" placeholder="Name" />
                              <input type="text" name="title" placeholder="Title" />
                              <input type="text" name="email" placeholder="Email" />
                              <input type="text" name="linkedin" placeholder="LinkedIn" />
                              <input type="text" name="password" placeholder="Password" />
                              {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                              <input type="file" name="file" id="file" class = "inputFile"/>
                              <label for="file">File</label>
                              <button className="submit_button">Update</button>
                              <button className="submit_button">Delete</button>
                            </form>
                          </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <h3>Add Alumni</h3>
                        <div className="test_input">
                          <div className="input_form">
                            <form>
                              <input type="text" name="name" placeholder="Name" />
                              <input type="text" name="title" placeholder="Title" />
                              <input type="text" name="email" placeholder="Email" />
                              <input type="text" name="linkedin" placeholder="LinkedIn" />
                              <input type="text" name="password" placeholder="Password" />
                              <input type="file" name="file" id="file" class = "inputFile"/>
                              <label for="file">File</label>
                              {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                              <button className="submit_button">Submit</button>
                            </form>
                          </div>

                          <h3>Current Alumni</h3>
                          <div className="input_form">
                            <form>
                            <input type="text" name="name" placeholder="Name" />
                              <input type="text" name="title" placeholder="Title" />
                              <input type="text" name="email" placeholder="Email" />
                              <input type="text" name="linkedin" placeholder="LinkedIn" />
                              <input type="text" name="password" placeholder="Password" />
                              {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                              <input type="file" name="file" id="file" class = "inputFile"/>
                              <label for="file">File</label>
                              <button className="submit_button">Update</button>
                              <button className="submit_button">Delete</button>
                            </form>
                          </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <h3>Add Sponsors</h3>
                        <div className="test_input">
                          <div className="input_form">
                            <form>
                              <input type="text" name="name" placeholder="Name" />
                              <input type="text" name="description" placeholder="Description" />
                              <input type="text" name="linkedin" placeholder="LinkedIn" />
                              <input type="text" name="link" placeholder="Link" />
                              <button className="submit_button">Submit</button>
                            </form>
                          </div>

                          <h3>Current Sponsors</h3>
                          <div className="input_form">
                            <form>
                              <input type="text" name="name" placeholder="Name" />
                              <input type="text" name="description" placeholder="Description" />
                              <input type="text" name="linkedin" placeholder="LinkedIn" />
                              <input type="text" name="link" placeholder="Link" />
                              <button className="submit_button">Update</button>
                              <button className="submit_button">Delete</button>
                            </form>
                          </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="fourth">
                      <h3>Add Video</h3>
                        <div className="test_input">
                          <div className="input_form">
                            <form>
                              <input type="text" name="title" placeholder="Title" />
                              <input type="text" name="link" placeholder="Link" />
                              <input type="text" name="description" placeholder="Description" />
                              <input type="text" name="Tags" placeholder="Tags" />
                              <button className="submit_button">Submit</button>
                            </form>
                          </div>

                          <h3>Current Videos</h3>
                          <div className="input_form">
                            <form>
                              <input type="text" name="title" placeholder="Title" />
                              <input type="text" name="link" placeholder="Link" />
                              <input type="text" name="description" placeholder="Description" />
                              <input type="text" name="Tags" placeholder="Tags" />
                              <button className="submit_button">Update</button>
                              <button className="submit_button">Delete</button>
                            </form>
                          </div>
                        </div>
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>

    </div>
  );
}
export default AddOfficersPage;
