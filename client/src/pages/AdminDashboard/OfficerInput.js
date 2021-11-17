import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"

/*export const OfficerInput = ({officer}) => {
    /*const [name, setName] = React.useState(officer.name);
    const [role, setRole] = React.useState(officer.role);
    const [email, setEmail] = React.useState(officer.email);
    const [linkedin, setLinkedin] = React.useState(officer.linkedin);
    const [fileUrl, setFileUrl] = React.useState(officer.fileUrl);


    const onUpdate = () => {
        /*console.log(fileUrl);
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
        /*const db = firebase.firestore();
        db.collection('officers').doc(officer.id).delete();
        
    }
    // for file upload
    const onFileChange = async (e) =>{
        /*const file = e.target.files[0];
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
            value = {title} 
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
};*/

class OfficerInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);

        this.state = {
            officers: [],
            officer: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
        }
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
                <h3>Add Officer</h3>
                          <div className="test_input">
                            <div className="input_form">
                              <form>
                                <input type="text" name="name" placeholder="Name" />
                                <input type="text" name="title" placeholder="Title" />
                                <input type="text" name="email" placeholder="Email" />
                                <input type="text" name="linkedin" placeholder="LinkedIn" />
                                <input type="text" name="password" placeholder="Password" />
                                <input type="file" name="file" id="file" class = "inputFile"/>
                                <label for="file">File</label>
                                {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                                <button className="submit_button">Submit</button>
                              </form>
                            </div>

                            <h3>Current Officers</h3>
                            <div className="input_form">
                              <form>
                              <input type="text" name="name" placeholder="Name" />
                                <input type="text" name="title" placeholder="Title" />
                                <input type="text" name="email" placeholder="Email" />
                                <input type="text" name="linkedin" placeholder="LinkedIn" />
                                <input type="text" name="password" placeholder="Password" />
                                {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                                <input type="file" name="file" id="file" class = "inputFile"/>
                                <label for="file">File</label>
                                <button className="submit_button">Update</button>
                                <button className="submit_button">Delete</button>
                              </form>
                            </div>
                          </div>
            </div>
        )
    }

}

export default OfficerInput;