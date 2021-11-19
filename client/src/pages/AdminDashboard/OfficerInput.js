import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"

class OfficerInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

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

    componentDidMount() {
        this.setState({
            officers: ['test officer'],
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

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    onChangeImageURL(e) {
        this.setState({
            imageURL: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        

        //Looks to see if the image is from a google drive.  A google drive image that needs string manipulation
        //will contain the substring drive.google.com/file
        let googleDriveImage = (this.state.imageURL.indexOf("drive.google.com/file") != -1);


        const officer = {
            name: this.state.name,
            officer: true,
            title: this.state.title,
            email: this.state.email,
            linkedin: this.state.linkedin,
            password: this.state.password,
            imageURL: this.state.imageURL,
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

            officer.imageURL = rootString + imageID;
        }
        
        console.log(officer);

        api.createPerson(officer).then(res =>
            console.log(res.data),
            this.setState({
                name: '',
                title: '',
                email: '',
                linkedin: '',
                password: '',
                imageURL: '',
            })
        ) 
        //window.location = '/Admin#/Admin';
    }

    render() {
        return (
            <div className = "officer_input">
                <h3>Add Officer</h3>
                          <div className="test_input">
                            <div className="input_form">
                              <form onSubmit = {this.onSubmit}>
                                <input 
                                    type="text"
                                    name="name" 
                                    placeholder="Name"
                                    value = {this.state.name}
                                    onChange = {this.onChangeName}
                                />
                                <input 
                                    type="text" 
                                    name="title" 
                                    placeholder="Title"
                                    value = {this.state.title}
                                    onChange = {this.onChangeTitle}
                                />
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email"
                                    value = {this.state.email}
                                    onChange = {this.onChangeEmail}
                                />
                                <input 
                                    type="text" 
                                    name="linkedin" 
                                    placeholder="LinkedIn" 
                                    value = {this.state.linkedin}
                                    onChange = {this.onChangeLinkedin}
                                />
                                <input 
                                    type="text" 
                                    name="password" 
                                    placeholder="Password" 
                                    value = {this.state.password}
                                    onChange = {this.onChangePassword}
                                />
                                <input 
                                    type="text" 
                                    name="imageURL" 
                                    placeholder="imageURL"
                                    value = {this.state.imageURL}
                                    onChange = {this.onChangeImageURL}
                                />
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