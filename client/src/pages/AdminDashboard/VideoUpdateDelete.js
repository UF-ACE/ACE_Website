import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";

class VideoUpdateDelete extends Component {
    constructor(props) {
        super(props);

        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            videos: [],
            video: null,
            title: '',
            description: '',
            link: '',
            blacklisted: false,
            isLoading: false,
        }
    }
    componentDidMount = async () => {
        this.setState({isLoading: true})
    
        await api.getVideosbyBlacklist().then(videos => {
          this.setState({
            videos: videos.data.data,
            isLoading: false,
          })
        })
      }
    onDelete(video){
        if (window.confirm("Do you want to delete Video: " + video.title)){
            // api.deleteVideobyID(video._id);
            api.blacklistVideo(video._id);
        }
        window.location.reload(true);

    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
        this.titleChanged = true;
    }
    onChangeLink(e) {
        this.setState({
            link: e.target.value
        });
        this.linkChanged = true;
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
        this.descriptionChanged = true;
    }

    onUpdate(video) {
        //Looks to see if the image is from a google drive.  A google drive image that needs string manipulation
        //will contain the substring drive.google.com/file
        let newVideo = {
            title: this.state.title,
            description: this.state.description,
            link: this.state.link,
            blacklisted: this.state.blacklisted,
        }
        if (!this.titleChanged){
            newVideo.title = video.title;
        }
        if (!this.linkChanged){
            newVideo.link = video.link;
        }
        if (!this.descriptionChanged){
            newVideo.description = video.description;
        }
        if(!this.titleChanged && !this.linkChanged && !this.descriptionChanged){
            alert("Nothing to update")
        }
        else if (window.confirm("Do you want to update Video: " + video._id + " " + newVideo.title + " " + newVideo.description + " " + newVideo.blacklisted)){
            api.updateVideobyID(video._id, newVideo);
            // api.updateVideobyTitle(video.title, newVideo);
        }
        window.location.reload(true);
    }

    render() {
        let videos;
        let videoProfiles;
        if (!this.state.isLoading && this.state.videos.length !== 0)
        {
            videos = this.state.videos;
            videoProfiles = videos.map((video) =>
            
            // Loading an input form for each officer and loading it with the data pertaining to each officer
            <Row>
                <div className="input_form" key = {video._id}>
                    <form>
                        <input type="text" name="title" placeholder={video.title} className = "update_input" onChange = {this.onChangeTitle} />
                        <input type="text" name="link" placeholder={video.link} className = "update_input" onChange = {this.onChangeLink}/>
                        <input type="text" name="description" placeholder={video.description} className = "update_input" onChange = {this.onChangeDescription}/>
                        <button className="submit_button" onClick={() => this.onUpdate(video)}>Update</button>
                        <button className="submit_button" onClick={() => this.onDelete(video)}>Delete</button>
                    </form>
                </div>
            </Row>
          )     
        }
        else
        {
            videos = null;
            videoProfiles = null;
        }
        return (
            <div className = "officer_input">
                <div className = "update_form">
                    <h3>Current Videos</h3>
                        {videoProfiles}
                </div>
            </div>
        )
    }

}

export default VideoUpdateDelete;