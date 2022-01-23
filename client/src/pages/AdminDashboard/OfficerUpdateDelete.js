import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";

class OfficerUpdateDelete extends Component {
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
            officers: [],
            officer: null,
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
        this.setState({isLoadingOfficers: true})
    
        await api.getPeoplebyOfficer(true).then(officers => {
          this.setState({
            officers: officers.data.data,
            isLoadingOfficers: false,
          })
        })
    }
    
    onDelete(officer){
        if (window.confirm("Do you want to delete officer: " + officer.name)){
            api.deletePersonbyID(officer._id).then(res => {
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

    onSubmit = officer => event =>  {
        event.preventDefault()
        if (this.state.imageChanged && this.state.image.size > 16000000) {
            alert("Size of picture must be <=16MB!")
        }
        else if (!this.state.nameChanged && !this.state.titleChanged && !this.state.emailChanged && !this.state.linkedinChanged && !this.state.imageChanged){
            alert("Nothing to update")
        }
        else {
            let newOfficer = new FormData()

            if (!this.state.nameChanged){
                newOfficer.append('name', officer.name)
            }
            else {
                newOfficer.append('name', this.state.name)
            }
            newOfficer.append('officer', true)
            if (!this.state.titleChanged){
                newOfficer.append('title', officer.title)
            }
            else {
                newOfficer.append('title', this.state.title)
            }
            if (!this.state.emailChanged){
                newOfficer.append('email', officer.email)
            }
            else {
                newOfficer.append('email', this.state.email)
            }
            if (!this.state.linkedinChanged){
                newOfficer.append('linkedin', officer.linkedin)
            }
            else {
                newOfficer.append('linkedin', this.state.linkedin)
            }
            if (!this.state.imageChanged){
                newOfficer.append('image', officer.image)
            }
            else {
                newOfficer.append('image', this.state.image, this.state.image.name)
            }

            if (window.confirm("Do you want to update officer: " + officer.name)){
                api.updatePersonbyID(officer._id, newOfficer).then(res => {
                    console.log(res.data)
                    window.location.reload()
                }).catch(() => {
                    alert('Could not update. Ensure that you are properly authenticated')
                })
            }
        }
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
                    <form onSubmit={this.onSubmit(officer)}>
                        <input type="text" name="name" placeholder={officer.name} className = "update_input" onChange = {this.onChangeName} />
                        <input type="text" name="title" placeholder={officer.title} className = "update_input" onChange = {this.onChangeTitle}/>
                        <input type="text" name="email" placeholder={officer.email} className = "update_input" onChange = {this.onChangeEmail}/>
                        <input type="text" name="linkedin" placeholder={officer.linkedin} className = "update_input" onChange = {this.onChangeLinkedin}/>
                        <input type="file" name="image" onChange = {this.onChangeImage}/>
                        <button className="submit_button">Update</button>
                        <button type="button" className="submit_button" onClick={() => this.onDelete(officer)}>Delete</button>
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
                    <h3>Current Officers</h3>
                        {officerProfiles}
                </div>
            </div>
        )
    }

}

export default OfficerUpdateDelete;