import React from "react";
import firebase from "./firebase";
import "./OfficerInput.css"

export const OfficerInput = ({officer}) => {
    const [name, setName] = React.useState(officer.name);
    const [role, setRole] = React.useState(officer.role);
    const [email, setEmail] = React.useState(officer.email);
    const [linkedin, setLinkedin] = React.useState(officer.linkedin);
    const [fileUrl, setFileUrl] = React.useState(officer.fileUrl);


    const onUpdate = () => {
        console.log(fileUrl);
        if (fileUrl != null){
            const db = firebase.firestore();
            // need way to store previous name
            db.collection("officers").doc(officer.id).set({
                name: name,
                role: role,
                email: email,
                linkedin: linkedin,
                avatar: fileUrl,
            });
        }
        else{
            console.log("fileURL == null")
            const db = firebase.firestore();
            const docRef = db.collection("officers").doc(officer.id);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    // console.log("avatar data:", doc.data().avatar);
                    // console.log("Document data:", doc.data());
                    db.collection("officers").doc(officer.id).set({
                        name: name,
                        role: role,
                        email: email,
                        linkedin: linkedin,
                        avatar: doc.data().avatar,
                    });
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
        
    }

    const onDelete = () => {
        const db = firebase.firestore();
        db.collection('officers').doc(officer.id).delete();
    }
    // for file upload
    const onFileChange = async (e) =>{
        const file = e.target.files[0];
        const storageRef = firebase.storage().ref();
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        setFileUrl( await fileRef.getDownloadURL());
        console.log(fileRef.getDownloadURL());
      }

    return (<div className = "officer_input">
        <input 
            value = {name} 
            onChange = {(e) => {
                setName(e.target.value);
            }}
        />
        <input 
            value = {role} 
            onChange = {(e) => {
                setRole(e.target.value);
            }}
        />
        <input 
            value = {email} 
            onChange = {(e) => {
                setEmail(e.target.value);
            }}
        />
        <input 
            value = {linkedin} 
            onChange = {(e) => {
                setLinkedin(e.target.value);
            }}
        />
        <input type="file" onChange={onFileChange}/>
        <button onClick = {onUpdate}>Update</button>
        <button onClick = {onDelete}>Delete</button>

        
    </div>
    );
};