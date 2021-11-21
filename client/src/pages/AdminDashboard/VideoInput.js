import React, { Component } from "react";
import "./OfficerInput.css";
import Youtube from "../../features/Youtube";
import api from "../../api";
import Row from "react-bootstrap/Row";

class VideoInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);

        this.state = {
            videos: [],
            video: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
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

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const officer = {
            name: this.state.name,
            title: this.state.title,
            email: this.state.email,
            linkedin: this.state.linkedin
        }

        console.log(officer.name);

        window.location = '/';
    }

    render() {
        let videos;
        let videoDivs;

        if (!this.state.isLoading && this.state.videos.length !== 0)
        {
        videos = this.state.videos;
        videoDivs = videos.map((video) =>
            <Row>
                <div className="input_form" key = {video._id}>
                    <form>
                        <input type="text" name="title" placeholder="Title" value = {video.title} className = "update_input"/>
                        <input type="text" name="link" placeholder="Link" value = {video.link} className = "update_input"/>
                        <input type="text" name="description" placeholder="Description" value = {video.description} className = "update_input"/>
                        <input type="text" name="Tags" placeholder="Tags" value = {video.tags} className = "update_input"/>
                        <button className="submit_button">Update</button>
                        <button className="submit_button">Delete</button>
                    </form>
                </div>
            </Row>
        )
        }
        else
        {
        videos = null;
        videoDivs = null;
        }


        return (
            <div className = "officer_input">
                {/* <form onSubmit = {this.onSubmit}>
                    <div className = "form-group">
                        <label>Name:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeTitle}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Email:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className = "form-group">
                        <label>Linkedin:</label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.linkedin}
                            onChange={this.onChangeLinkedin}
                        />
                    </div>
                </form> */}
                   {/* <h3>Add Video</h3> */}
                    <div className="test_input">
                    {/* <div className="input_form">
                        <form>
                        <input type="text" name="title" placeholder="Title" />
                        <input type="text" name="link" placeholder="Link" />
                        <input type="text" name="description" placeholder="Description" />
                        <input type="text" name="Tags" placeholder="Tags" />
                        <button className="submit_button">Submit</button>
                        </form>
                    </div> */}


                    
                    {/*Do not click API Call too many times */}
                    <Youtube />

                    <h3>Current Videos</h3>
                    {videoDivs}
                    </div>
            </div>
        )
    }

}

export default VideoInput;