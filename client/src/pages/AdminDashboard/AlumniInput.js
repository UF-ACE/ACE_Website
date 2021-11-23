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
    
        await api.getPeoplebyOfficer(false).then(alumni => {
          this.setState({
            alumni: alumni.data.data,
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
        let googleDriveImage = (this.state.imageURL.indexOf("drive.google.com/file") !== -1);


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

        let alumni;
        let alumniProfiles;
        if (!this.state.isLoadingAlumni && this.state.alumni.length !== 0)
        {
          alumni = this.state.alumni;
          alumniProfiles = alumni.map((alumni) =>
            
            // Loading an input form for each alumni and loading it with the data pertaining to each alumni
            <Row>
                <div className="input_form" key = {alumni._id}>
                    <form>
                    <input type="text" name="name" placeholder="Name" value = {alumni.name} className = "update_input"/>
                    <input type="text" name="title" placeholder="Title" value = {alumni.title} className = "update_input"/>
                    <input type="text" name="email" placeholder="Email" value = {alumni.email} className = "update_input"/>
                    <input type="text" name="linkedin" placeholder="LinkedIn" value = {alumni.linkedin} className = "update_input"/>
                    {/* <input type="text" name="password" placeholder="Password" value = {alumni.name} className = "update_input"/> */}
                    <input type="text" name="imageURL" placeholder="ImageURL" value = {alumni.imageURL} className = "update_input"/>
                    <button className="submit_button">Update</button>
                    <button className="submit_button">Delete</button>
                    </form>
                </div>
            </Row>
          )     
        }
        else
        {
          alumni = null;
          alumniProfiles = null;
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
                                    className = "update_input"
                                />
                                <input 
                                    type="text" 
                                    name="title" 
                                    placeholder="Title"
                                    value = {this.state.title}
                                    onChange = {this.onChangeTitle}
                                    className = "update_input"
                                />
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Email"
                                    value = {this.state.email}
                                    onChange = {this.onChangeEmail}
                                    className = "update_input"
                                />
                                <input 
                                    type="text" 
                                    name="linkedin" 
                                    placeholder="LinkedIn" 
                                    value = {this.state.linkedin}
                                    onChange = {this.onChangeLinkedin}
                                    className = "update_input"
                                />
                                {/* <input 
                                    type="text" 
                                    name="password" 
                                    placeholder="Password" 
                                    value = {this.state.password}
                                    onChange = {this.onChangePassword}
                                    className = "update_input"
                                /> */}
                                <input 
                                    type="text" 
                                    name="imageURL" 
                                    placeholder="imageURL"
                                    value = {this.state.imageURL}
                                    onChange = {this.onChangeImageURL}
                                    className = "update_input"
                                />
                                {/* <input type = "checkbox" id = "isOfficer" name="isOfficer" value="Officer"/><label>Officer</label> */}
                                <button className="submit_button">Submit</button>
                              </form>
                            </div>

                <h3>Current Alumni</h3>
                    {alumniProfiles}

                </div>
            </div>
        )
    }

}

export default AlumniInput;