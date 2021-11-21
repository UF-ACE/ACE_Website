import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";

class AlumniInput extends Component {
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
            alumni: [],
            alumnus: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
            password: '',
            imageURL: '',
        }
    }
    componentDidMount = async () => {
        this.setState({isLoadingAlumni: true})
    
        await api.getPeoplebyOfficer(false).then(officers => {
          this.setState({
            officers: officers.data.data,
            isLoadingAlumni: false,
          })
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


        const alumnus = {
            name: this.state.name,
            officer: false,
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

            alumnus.imageURL = rootString + imageID;
        }
        
        console.log(alumnus);

        api.createPerson(alumnus).then(res =>
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
    }

    render() {

        let officers;
        let officerProfiles;
        if (!this.state.isLoadingAlumni && this.state.officers.length !== 0)
        {
          officers = this.state.officers;
          officerProfiles = officers.map((officer) =>
            
            // Loading an input form for each officer and loading it with the data pertaining to each officer
            <Row>
                <div className="input_form" key = {officer._id}>
                    <form>
                    <input type="text" name="name" placeholder="Name" value = {officer.name} className = "update_input"/>
                    <input type="text" name="title" placeholder="Title" value = {officer.title} className = "update_input"/>
                    <input type="text" name="email" placeholder="Email" value = {officer.email} className = "update_input"/>
                    <input type="text" name="linkedin" placeholder="LinkedIn" value = {officer.linkedin} className = "update_input"/>
                    <input type="text" name="password" placeholder="Password" value = {officer.name} className = "update_input"/>
                    <input type="file" name="file" id="file" class = "inputFile"/>
                    <label for="file" className="submit_button">File</label>
                    <button className="submit_button">Update</button>
                    <button className="submit_button">Delete</button>
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
            <div className = "alumnus_input">
                <h3>Add Alumni</h3>
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

                <h3>Current Alumni</h3>
                    {officerProfiles}

                </div>
            </div>
        )
    }

}

export default AlumniInput;