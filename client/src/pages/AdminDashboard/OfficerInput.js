import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";
import OfficerUpdateDelete from "./OfficerUpdateDelete";

class OfficerInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            officers: [],
            officer: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
            image: null,
        }
    }
    refreshPage(){
        window.location.reload(false);
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

    onChangeImage(e) {
        const file = e.target.files[0]
        this.setState({ image: file }, () => { console.log(this.state.image) });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.image.size > 16000000) {
            alert("Size of picture must be <=16MB!")
            console.log(this.state.image.size)
        }
        else {
            let officer = new FormData()
            officer.append('name', this.state.name)
            officer.append('officer', true)
            officer.append('title', this.state.title)
            officer.append('email', this.state.email)
            officer.append('linkedin', this.state.linkedin)
            officer.append('image', this.state.image, this.state.image.name)

            api.createPerson(officer).then(res => {
                console.log(res.data)
                this.setState({
                    name: '',
                    title: '',
                    email: '',
                    linkedin: '',
                    image: null,
                })
                window.location.reload()
            }).catch(() => {
                alert('Cannot create. Check that each field is filled out and you are properly authenticated')
            })
        }
    }

    render() {
        return (
            <div className = "officer_input">
                <Row>
                    <h3>Add Officer</h3>
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
                        <input 
                            type="file" 
                            name="image" 
                            onChange ={this.onChangeImage}
                        />
                        <button className="submit_button">Submit</button>
                        </form>

                    </div>
                </Row>
                <OfficerUpdateDelete />
            </div>
        )
    }

}

export default OfficerInput;