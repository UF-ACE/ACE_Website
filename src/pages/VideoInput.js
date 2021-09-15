import React from "react";
import firebase from "./firebase";
import "./OfficerInput.css"

export const VideoInput = ({video}) => {
    const [title, setTitle] = React.useState(video.title);
    const [description, setDescription] = React.useState(video.description);
    const [tag, setTag] = React.useState(video.tag);
    const [videoID, setVideoID] = React.useState(video.videoID);


    const onUpdate = () => {
        const db = firebase.firestore();
        db.collection("videos").doc(video.id).set({
            title: title,
            description: description,
            tag: tag,
            videoID: videoID,
        });
    }
    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('videos').doc(video.id).delete();
    }
    return (<div className = "officer_input">
        <input 
            value = {title} 
            onChange = {(e) => {
                setTitle(e.target.value);
            }}
        />
        <input 
            value = {description} 
            onChange = {(e) => {
                setDescription(e.target.value);
            }}
        />
        <input 
            value = {tag} 
            onChange = {(e) => {
                setTag(e.target.value);
            }}
        />
        <input 
            value = {videoID} 
            onChange = {(e) => {
                setVideoID(e.target.value);
            }}
        />
        <button onClick = {onUpdate}>Update</button>
        <button onClick = {onDelete}>Delete</button>
    </div>
    );
};