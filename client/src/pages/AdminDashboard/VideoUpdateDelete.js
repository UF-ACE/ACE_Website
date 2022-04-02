import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";

class VideoUpdateDelete extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTags = this.onChangeTags.bind(this)

        this.state = {
            videos: [],
            video: null,
            title: '',
            description: '',
            link: '',
            tgas: '',
            blacklisted: false,
            isLoading: false,

            titleChanged: false,
            descChanged: false,
            linkChanged: false,
            tagsChanged: false,
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
        if (window.confirm("Do you want to delete video: " + video.title)){
            api.deleteVideobyID(video._id).then(res => {
                console.log(res.data)
                window.location.reload()
            }).catch(() => {
                alert('Could not delete. Check that you are properly authenticated')
            })
        }
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
            titleChanged: true
        });
    }
    onChangeLink(e) {
        this.setState({
            link: e.target.value,
            linkChanged: true
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
            descChanged: true
        });
    }
    onChangeTags(e) {
        this.setState({
            tags: e.target.value,
            tagsChanged: true
        })
    }

    onSubmit = video => event =>  {
        event.preventDefault()
        if (!this.state.titleChanged && !this.state.linkChanged && !this.state.descChanged && !this.state.tagsChanged) {
            alert("Nothing to update")
        }
        else {
            let newVideo = {
                title: this.state.title,
                description: this.state.description,
                link: this.state.link,
                blacklisted: false,
                tags: this.state.tags.split(',')
            }
            if (!this.state.titleChanged){
                newVideo.title = video.title;
            }
            if (!this.state.linkChanged){
                newVideo.link = video.link;
            }
            if (!this.state.descChanged){
                newVideo.description = video.description;
            }
            
            if (window.confirm("Do you want to update video: " + newVideo.title)){
                api.updateVideobyID(video._id, newVideo).then(res => {
                    console.log(res.data)
                    window.location.reload()
                }).catch(() => {
                    alert('Could not update. Ensure that you are properly authenticated')
                })
            }
        }
    }

    render() {
        let videos;
        let videoProfiles;
        if (!this.state.isLoading && this.state.videos.length !== 0)
        {
            videos = this.state.videos;
            videoProfiles = videos.map((video) =>
            
            // Loading an input form for each video and loading it with the data pertaining to each video
            <Row>
                <div className="input_form" key = {video._id}>
                    <form onSubmit={this.onSubmit(video)}>
                        <input type="text" name="title" defaultValue={video.title} className = "update_input" onChange = {this.onChangeTitle} />
                        <input type="text" name="link" defaultValue={video.link} className = "update_input" onChange = {this.onChangeLink}/>
                        <input type="text" name="description" defaultValue={video.description} className = "update_input" onChange = {this.onChangeDescription}/>
                        <input type="text" name="tagList" defaultValue={video.tags.join(',')} className="update_input" onChange={this.onChangeTags}/>
                        <button className="submit_button">Update</button>
                        <button type="button" className="submit_button" onClick={() => this.onDelete(video)}>Delete</button>
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