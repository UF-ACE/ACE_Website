import React from "react";
import VideoThumbnail from "../features/VideoThumbnail";
import "./LearnPage.css";
import React, { Component } from 'react'
import Pagination from 'react-bootstrap/Pagination'

/*function LearnPage() {
  const [videos, setVideos] = React.useState([]);

  React.useEffect( () => {
    const db = firebase.firestore();
    return db.collection('videos').onSnapshot((snapshot) => {
      const videosData = [];
      snapshot.forEach(doc => videosData.push({ ...doc.data(), id: doc.id }));
      setVideos(videosData);
    });
}, []);

  return (
    <div className="LearnPage">
      <h1> Videos </h1>
        {videos.map(video =>(
          <div key = {video.id}>
            <div className = "videos">
            <VideoThumbnail 
                embedId = {video.videoID} 
                title = {video.title}  
                description = {video.description}
                tags= {video.tag}/>
            </div>
            </div>
        ))}

      {/* <section id="pagination" class="d-flex justify-content-center">
        <nav aria-label="...">
          <ul class="pagination">
            <li class="page-item disabled">
             <button class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</button>
            </li>
            <li class="page-item"><button class="page-link" href="#">1</button></li>
            <li class="page-item active" aria-current="page">
              <button class="page-link" href="#">2</button>
            </li>
            <li class="page-item"><button class="page-link" href="#">3</button></li>
            <li class="page-item">
              <button class="page-link" href="#">Next</button>
            </li>
          </ul>
        </nav>
        </section> *//*}

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
  );
}*/

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

    await api.getVideos().then(videos => {
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
              embedId = {video.link} 
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
