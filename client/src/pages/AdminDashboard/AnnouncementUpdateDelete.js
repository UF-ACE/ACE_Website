import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";
import ReactQuill from 'react-quill';
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

class AnnouncementUpdateDelete extends Component {
    constructor(props) {
        super(props);
        this.onChangeBody = this.onChangeBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            announcements: [],
            announcement: null,
            body: '',
            
            isLoadingAnnouncements: false,
            bodyChanged: false,
        }
    }
    componentDidMount = async () => {
        this.setState({isLoadingAnnouncements: true})

        await api.getAnnouncements().then(announcements => {
          this.setState({
            announcements: announcements.data.data,
            isLoadingAnnouncements: false,
          })
        })
    }
    
    onDelete(announcement){
        if (window.confirm("Do you want to delete this announcement?")){
            api.deleteAnnouncement(announcement._id).then(res => {
                console.log(res.data)
                window.location.reload()
            }).catch((err) => {
                alert('Could not delete. Check that you are properly authenticated')
            })
        }
    }

    onChangeBody(value) {
        this.setState({
            body: value,
            bodyChanged: true
        });
    }

    onSubmit = announcement => event =>  {
        event.preventDefault()
        if (!this.state.bodyChanged){
            alert("Nothing to update")
        }
        else {
            if (window.confirm("Do you want to update this announcement?")) {
                api.updateAnnouncement(announcement._id, {body: this.state.body}).then(res => {
                    console.log(res.data)
                    window.location.reload()
                }).catch(() => {
                    alert('Could not update. Ensure that you are properly authenticated')
                })
            }
        }
    }

    render() {
        let announcements;
        let announcementProfiles;
        if (!this.state.isLoadingAnnouncements && this.state.announcements.length !== 0)
        {
          announcements = this.state.announcements;
          announcementProfiles = announcements.map((announcement) =>
            
            // Loading an input form for each announcement and loading it with the data pertaining to each
            <Row className="pb-4">
                <div key={announcement._id}>
                    <form onSubmit={this.onSubmit(announcement)}>
                        <ReactQuill theme="snow" defaultValue={announcement.body} onChange={this.onChangeBody} modules={{toolbar: {container: toolbarOptions}}}/>
                        <button className="submit_button">Update</button>
                        <button type="button" className="submit_button" onClick={() => this.onDelete(announcement)}>Delete</button>
                    </form>
                </div>
            </Row>
          )     
        }
        else
        {
          announcements = null;
          announcementProfiles = null;
        }
        return (
            <div>
                {announcementProfiles}
            </div>
        )
    }

}

export default AnnouncementUpdateDelete;