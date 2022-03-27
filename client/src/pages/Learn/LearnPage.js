import VideoThumbnail from "../../features/VideoThumbnail";
import "./LearnPage.css";
import api from "../../api/index.js";
import React, { Component } from "react";
import Row from "react-bootstrap/Row";

class LearnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      isLoading: false,
    };
  }

  componentDidMount = async () => {
    this.setState({ isLoading: true });

    await api.getVideosbyBlacklist().then((videos) => {
      this.setState({
        videos: videos.data.data,
        isLoading: false,
      });
    });
  };

  render() {
    let videos;
    let videoDivs;

    if (!this.state.isLoading && this.state.videos.length !== 0) {
      videos = this.state.videos;
      videoDivs = videos.map((video) => (
        <div key={video._id}>
          <div className="videos">
            <Row>
              <VideoThumbnail
                embedId={video.link.substring(video.link.lastIndexOf("/") + 1)}
                title={video.title}
                description={video.description}
                tags={video.tags}
              />
            </Row>
          </div>
        </div>
      ));
    } 
    else {
      videos = null;
      videoDivs = null;
    }
    
    return (
      <div className="learnpage">
        <div className="description">
          <Row>
            <h1>ACE's Content Hub</h1>
            <h3>
              GBM's, workshops, speaker sessions, elections, and whatever else ACE
              hosts and publishes!
            </h3>
          </Row>
          <Row>
          {videoDivs}

          </Row>

        </div>
      </div>
    );
  }
}

export default LearnPage;
