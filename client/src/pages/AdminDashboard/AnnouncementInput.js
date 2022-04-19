import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { Component } from "react";
import ReactQuill from 'react-quill';
import api from "../../api"
import AnnouncementUpdateDelete from './AnnouncementUpdateDelete'
import 'react-quill/dist/quill.snow.css';

var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['code-block', 'link', 'video'],

    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
];



class AnnouncementInput extends Component {
    constructor(props) {
        super(props)
        this.state = { text: '' } 
        this.handleChange = this.handleChange.bind(this)
    }
     
    handleChange(value) {
        this.setState({ text: value })
    }

    submitAnnouncement() {
        api.createAnnouncement({body: this.state.text}).then( res => {
            console.log(res)
            window.location.reload()
        }).catch(() => {
            alert('Could not submit. Ensure that you are properly authenticated')
        })
    }
     
    render() {
        return (
            <div>
                <Row className="pb-1">
                    <h3>Make an Announcement</h3>
                </Row>
                <Row className="pb-2">
                    <div>
                        <ReactQuill theme="snow" value={this.state.text} onChange={this.handleChange} 
                        modules={{toolbar: {container: toolbarOptions}}}/>
                    </div>
                </Row>
                <Row className="pb-5">
                    <Col>
                        <button type="button" className="submit_button" onClick={() => this.submitAnnouncement()}>Submit</button>
                    </Col>
                </Row>
                <Row className="pb-5">
                    <h3>Edit Announcements</h3>
                    <AnnouncementUpdateDelete/>
                </Row>
            </div>
        )
    }
}

export default AnnouncementInput