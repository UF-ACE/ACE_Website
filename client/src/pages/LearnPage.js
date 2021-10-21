import React from "react";
import VideoThumbnail from "../features/VideoThumbnail";
import "./LearnPage.css";
import firebase from "./firebase";

function LearnPage() {
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

      <section id="pagination" class="d-flex justify-content-center">
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
      </section>
    </div>
  );
}

export default LearnPage;
