import Row from "react-bootstrap/Row";
import React, { Component } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


class AnnouncementInput extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' } 
        this.handleChange = this.handleChange.bind(this)
      }
     
    handleChange(value) {
    this.setState({ text: value })
    }
     
    render() {
        return (
            <div>
                <Row className="pb-1">
                    <h3>Make an Announcement</h3>
                </Row>
                <Row className="pb-5">
                    <ReactQuill theme="snow" value={this.state.text}
                            onChange={this.handleChange} />
                </Row>
                <Row className="pb-5">
                    {/* Put submit button here */}
                </Row>
                <Row className="pb-5">
                    {/* Put previous announcement summary here for deletion (editing?) */}
                </Row>
            </div>
        )
    }
}

export default AnnouncementInput