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
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            alumni: [],
            alumnus: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
            image: null,

            nameChanged: false,
            titleChanged: false,
            emailChanged: false,
            linkedinChanged: false,
            imageChanged: false,
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

    onDelete(alumnus){
        if (window.confirm("Do you want to delete alumnus: " + alumnus.name)){
            api.deletePersonbyID(alumnus._id).then(res => {
                console.log(res.data)
                window.location.reload()
            }).catch(() => {
                alert('Could not delete. Check that you are properly authenticated')
            })
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value,
            nameChanged: true
        });
    }
    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
            titleChanged: true
        });
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value,
            emailChanged: true
        });
    }
    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value,
            linkedinChanged: true
        });
    }
    onChangeImage(e) {
        const file = e.target.files[0]
        this.setState({ image: file, imageChanged: true }, () => { console.log(this.state.image) });
    }

    onSubmit = alumnus => event =>  {
        event.preventDefault()
        if (this.state.imageChanged && this.state.image.size > 16000000) {
            alert("Size of picture must be <=16MB!")
        }
        else if (!this.state.nameChanged && !this.state.titleChanged && !this.state.emailChanged && !this.state.linkedinChanged && !this.state.imageChanged){
            alert("Nothing to update")
        }
        else {
            let newAlumnus = new FormData()

            if (!this.state.nameChanged){
                newAlumnus.append('name', alumnus.name)
            }
            else {
                newAlumnus.append('name', this.state.name)
            }
            newAlumnus.append('officer', false)
            if (!this.state.titleChanged){
                newAlumnus.append('title', alumnus.title)
            }
            else {
                newAlumnus.append('title', this.state.title)
            }
            if (!this.state.emailChanged){
                newAlumnus.append('email', alumnus.email)
            }
            else {
                newAlumnus.append('email', this.state.email)
            }
            if (!this.state.linkedinChanged){
                newAlumnus.append('linkedin', alumnus.linkedin)
            }
            else {
                newAlumnus.append('linkedin', this.state.linkedin)
            }
            if (!this.state.imageChanged){
                newAlumnus.append('image', alumnus.image)
            }
            else {
                newAlumnus.append('image', this.state.image, this.state.image.name)
            }

            if (window.confirm("Do you want to update alumnus: " + alumnus.name)){
                api.updatePersonbyID(alumnus._id, newAlumnus).then(res => {
                    console.log(res.data)
                    window.location.reload()
                }).catch(() => {
                    alert('Could not update. Ensure that you are properly authenticated')
                })
            }
        }
    }

    render() {
        let alumni;
        let alumniProfiles;
        if (!this.state.isLoadingAlumni && this.state.alumni.length !== 0)
        {
          alumni = this.state.alumni;
          alumniProfiles = alumni.map((alumnus) =>
            // Loading an input form for each alumnus and loading it with the data pertaining to each alumnus
            <Row>
                <div className="input_form" key = {alumnus._id}>
                    <form onSubmit={this.onSubmit(alumnus)}>
                        <input type="text" name="name" placeholder={alumnus.name} className = "update_input" onChange = {this.onChangeName} />
                        <input type="text" name="title" placeholder={alumnus.title} className = "update_input" onChange = {this.onChangeTitle}/>
                        <input type="text" name="email" placeholder={alumnus.email} className = "update_input" onChange = {this.onChangeEmail}/>
                        <input type="text" name="linkedin" placeholder={alumnus.linkedin} className = "update_input" onChange = {this.onChangeLinkedin}/>
                        <input type="file" name="image" onChange = {this.onChangeImage}/>
                        <button className="submit_button">Update</button>
                        <button type="button" className="submit_button" onClick={() => this.onDelete(alumnus)}>Delete</button>
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
            <div className = "officer_input">
                <div className = "update_form">
                    <h3>Current Alumni</h3>
                        {alumniProfiles}
                </div>
            </div>
        )
    }

}

export default AlumniUpdateDelete;