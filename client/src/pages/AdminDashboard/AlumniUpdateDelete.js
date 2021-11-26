import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";

class AlumniUpdateDelete extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            officers: [],
            officer: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
            password: '',
            imageURL: '',
        }
    }
    componentDidMount = async () => {
        this.setState({isLoadingOfficers: true})
    
        await api.getPeoplebyOfficer(false).then(officers => {
          this.setState({
            officers: officers.data.data,
            isLoadingOfficers: false,
          })
        })
    }
    onDelete(officer){
        if (window.confirm("Do you want to delete Alumni: " + officer.name)){
            api.deletePersonbyID(officer._id);
        }
        window.location.reload(true);

    }
    onChangeName(e) {
        this.setState({
            name: e.target.value,
        });
        this.nameChanged = true;
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        });
        this.titleChanged = true;
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
        this.emailChanged = true;
    }

    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value
        });
        this.linkedinChanged = true;
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
        this.passwordChanged = true;
    }

    onChangeImageURL(e) {
        this.setState({
            imageURL: e.target.value
        });
        this.imageURLChanged = true;
    }

    onUpdate(officer) {
        //Looks to see if the image is from a google drive.  A google drive image that needs string manipulation
        //will contain the substring drive.google.com/file
        let googleDriveImage = (this.state.imageURL.indexOf("drive.google.com/file") !== -1);

        let newOfficer = {
            name: this.state.name,
            officer: true,
            title: this.state.title,
            email: this.state.email,
            linkedin: this.state.linkedin,
            password: this.state.password,
            imageURL: this.state.imageURL,
        }
        if (!this.nameChanged){
            newOfficer.name = officer.name;
        }
        if (!this.titleChanged){
            newOfficer.title = officer.title;
        }
        if (!this.emailChanged){
            newOfficer.email = officer.email;
        }
        if (!this.linkedinChanged){
            newOfficer.linkedin = officer.linkedin;
        }
        if (!this.passwordChanged){
            newOfficer.password = officer.password;
        }
        if (!this.imageURLChanged){
            newOfficer.imageURL = officer.imageURL;
        }

        if (googleDriveImage)
        {
            //If we have an image from the google drive, we need to get the imageID from
            //it so that we can properly display it.  The imageID can be found between the
            //second to last and last parentheses in a google drive link.
            let imageID = this.state.imageURL;
            imageID = imageID.substr(0, imageID.lastIndexOf('/'));
            imageID = imageID.substr(imageID.lastIndexOf('/') + 1);

            //This is the root string for a google drive image that displays the image properly
            const rootString = "https://drive.google.com/uc?export=view&id=";

            newOfficer.imageURL = rootString + imageID;
        }
        if(!this.nameChanged && !this.titleChanged && !this.emailChanged && !this.linkedinChanged && !this.passwordChanged && !this.imageURLChanged){
            alert("Nothing to update")
        }
        else if (window.confirm("Do you want to update Alumni: " + officer.name)){
            api.updatePersonbyID(officer._id, newOfficer);
        }
        window.location.reload(true);
    }

    render() {
        let officers;
        let officerProfiles;
        if (!this.state.isLoadingOfficers && this.state.officers.length !== 0)
        {
          officers = this.state.officers;
          officerProfiles = officers.map((officer) =>
            
            // Loading an input form for each officer and loading it with the data pertaining to each officer
            <Row>
                <div className="input_form" key = {officer._id}>
                    <form>
                        <input type="text" name="name" placeholder={officer.name} className = "update_input" onChange = {this.onChangeName} />
                        <input type="text" name="title" placeholder={officer.title} className = "update_input" onChange = {this.onChangeTitle}/>
                        <input type="text" name="email" placeholder={officer.email} className = "update_input" onChange = {this.onChangeEmail}/>
                        <input type="text" name="linkedin" placeholder={officer.linkedin} className = "update_input" onChange = {this.onChangeLinkedin}/>
                        <input type="text" name="password" placeholder={officer.password} className = "update_input" onChange = {this.onChangePassword}/>
                        <input type="text" name="imageURL" placeholder={officer.imageURL} className = "update_input" onChange = {this.onChangeImageURL}/>
                        <button className="submit_button" onClick={() => this.onUpdate(officer)}>Update</button>
                        <button className="submit_button" onClick={() => this.onDelete(officer)}>Delete</button>
                    </form>
                </div>
            </Row>
          )     
        }
        else
        {
          officers = null;
          officerProfiles = null;
        }
        return (
            <div className = "officer_input">
                <div className = "update_form">
                    <h3>Current Alumni</h3>
                        {officerProfiles}
                </div>
            </div>
        )
    }

}

export default AlumniUpdateDelete;