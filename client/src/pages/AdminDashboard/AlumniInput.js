import React, { Component } from "react";
import "./OfficerInput.css"
import Row from "react-bootstrap/Row";
import api from "../../api"
import AlumniUpdateDelete from "./AlumniUpdateDelete"

class AlumniInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            alumni: [],
            alumnus: null,
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
            let alumnus = new FormData()
            alumnus.append('name', this.state.name)
            alumnus.append('officer', false)
            alumnus.append('title', this.state.title)
            alumnus.append('email', this.state.email)
            alumnus.append('linkedin', this.state.linkedin)
            alumnus.append('image', this.state.image, this.state.image.name)

            api.createPerson(alumnus).then(res => {
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
            <div className = "alumnus_input">
                    <h3>Add Alumni</h3>
                        <div className="test_input">
                        <Row>
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
                    <AlumniUpdateDelete />
                </div>
            </div>
        )
    }

}

export default AlumniInput;