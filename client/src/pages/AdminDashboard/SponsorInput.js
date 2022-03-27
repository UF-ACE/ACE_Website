import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";
import SponsorUpdateDelete from "./SponsorUpdateDelete";
class SponsorInput extends Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLink= this.onChangeLink.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            sponsors: [],
            sponsor: null,
            name: '',
            description: '',
            link: '',
            linkedin: '',
            image: null,
        }
    }
    componentDidMount = async () => {
        this.setState({isLoadingSponsors: true})
        
        await api.getSponsors().then(sponsors =>{
          this.setState({
            sponsors: sponsors.data.data,
            isLoadingSponsors: false,
          })
        })
      }


    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
    }

    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value
        });
    }

    onChangeLink(e) {
        this.setState({
            link: e.target.value
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
            let sponsor = new FormData()
            sponsor.append('name', this.state.name)
            sponsor.append('description', this.state.description)
            sponsor.append('link', this.state.link)
            sponsor.append('linkedin', this.state.linkedin)
            sponsor.append('image', this.state.image, this.state.image.name)

            api.createSponsor(sponsor).then(res => {
                console.log(res.data)
                this.setState({
                    name: '',
                    description: '',
                    link: '',
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
                    <h3>Add Sponsor</h3>
                          <div className="test_input d-grid gap-3">
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
                                    name="description" 
                                    placeholder="Description"
                                    value = {this.state.description}
                                    onChange = {this.onChangeDescription}
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
                                    type="text" 
                                    name="link" 
                                    placeholder="Link" 
                                    value = {this.state.link}
                                    onChange = {this.onChangeLink}
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
                        <SponsorUpdateDelete />
                    </div>
            </div>
        )
    }

}

export default SponsorInput;