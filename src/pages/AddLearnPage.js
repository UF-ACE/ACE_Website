import React, {useEffect} from 'react';
import firebase from "./firebase";
import { VideoInput } from './VideoInput';
import VideoThumbnail from "../features/VideoThumbnail";
import "./AddOfficersPage.css";
import "./LearnPage.css";
import { NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const db = firebase.firestore();

function AddLearnPage() {
  const [videos, setVideos] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  React.useEffect( () => {
      const db = firebase.firestore();
      return db.collection('videos').onSnapshot((snapshot) => {
        const videosData = [];
        snapshot.forEach(doc => videosData.push({ ...doc.data(), id: doc.id }));
        setVideos(videosData);
      });
  }, []);
  const onSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;
    const tag = e.target.tag.value;
    const videoID = e.target.videoID.value;
    if (!title) {
      return;
    }
    await db.collection("videos").doc(title).set({
      title: title,
      description: description,
      tag: tag,
      videoID: videoID,
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const videosCollection = await db.collection("videos").get();
      setUsers(
        videosCollection.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    fetchUsers();
  }, []);

  return (
    <div className = "modify_page">
      <div className = "insert_feild">
      <div class = "row">
        <div class = "col">
        <NavItem>
                <Link className="nav-link" to="/ACE_Website/Admin">
                <h3>Modify Officers</h3>         
                </Link>
        </NavItem>
        </div>
        <div class = "col">
        <NavItem>
                <Link className="nav-link" to="/ACE_Website/AdminLearn">
                <h3>Modify Learn Page</h3>         
                </Link>
        </NavItem>
        </div>
        </div>
      <ul className = "current_officers">
          {videos.map(video =>(
              <VideoInput video = {video}/>
          ))}
      </ul>    

      <h3>Test Input</h3>
      <div className="test_input">
        <form onSubmit={onSubmit}>
          <input type="text" name="title" placeholder="Title" />
          <input type="text" name="description" placeholder="Description" />
          <input type="text" name="tag" placeholder="Tag" />
          <input type="text" name="videoID" placeholder="videoID (../watch?v=ID)" />

          <button>Submit</button>
        </form>

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
      </div>
      

      </div>
      

      </div>
      
  );
}

export default AddLearnPage;
