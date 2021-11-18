import VideoThumbnail from "../../features/VideoThumbnail";
import "./LearnPage.css";
import api from "../../api/index.js"
import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination'

class LearnPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
        videos: [],
        isLoading: false
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

  render() {
    let videos;
    let videoDivs;

    if (!this.state.isLoading && this.state.videos.length != 0)
    {
      videos = this.state.videos;
      videoDivs = videos.map((video) =>
        <div key = {video._id}>
          <div className = "videos">
            <VideoThumbnail 
              embedId = {video.link.substring(video.link.lastIndexOf('/') + 1)} 
              title = {video.title}  
              description = {video.description}
              tags= {video.tags}
            />
          </div>
        </div>
      )
    }
    else
    {
      videos = null;
      videoDivs = null;
    }

    return(
      <div className = "learnpage">
        <h1>Videos</h1>
        {videoDivs}
        <Pagination className = "pagination">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item >{2}</Pagination.Item>
          <Pagination.Item >{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    )
  }
}

export default LearnPage;
