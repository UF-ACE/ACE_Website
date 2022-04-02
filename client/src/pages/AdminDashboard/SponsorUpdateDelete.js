import React, { Component } from "react";
import "./OfficerInput.css"
import api from "../../api"
import Row from "react-bootstrap/Row";

class SponsorUpdateDelete extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLinkedin = this.onChangeLinkedin.bind(this);
        this.onChangeLink = this.onChangeLink.bind(this);
        this.onChangeImage = this.onChangeImage.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            sponsors: [],
            sponsor: null,
            name: '',
            description: '',
            link: '',
            linkedin: '',
            image: null,

            nameChanged: false,
            descChanged: false,
            linkChanged: false,
            linkedinChanged: false,
            imageChanged: false,
        }
    }

    onDelete(sponsor){
        if (window.confirm("Do you want to delete sponsor: " + sponsor.name)){
            api.deleteSponsorbyID(sponsor._id).then(res => {
                console.log(res.data)
                window.location.reload()
            }).catch(() => {
                alert('Could not delete. Check that you are properly authenticated')
            })
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
            name: e.target.value,
            nameChanged: true
        });
    }
    onChangeDescription(e) {
        this.setState({
            description: e.target.value,
            descriptionChanged: true
        });
    }
    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value,
            linkedinChanged: true
        });
    }
    onChangeLink(e) {
        this.setState({
            link: e.target.value,
            linkChanged: true
        });
    }
    onChangeImage(e) {
        const file = e.target.files[0]
        this.setState({ image: file, imageChanged: true }, () => { console.log(this.state.image) });
    }

    onSubmit = sponsor => event =>  {
        event.preventDefault()
        if (this.state.imageChanged && this.state.image.size > 16000000) {
            alert("Size of picture must be <=16MB!")
        }
        else if (!this.state.nameChanged && !this.state.descChanged && !this.state.linkChanged && !this.state.linkedinChanged && !this.state.imageChanged){
            alert("Nothing to update")
        }
        else {
            let newSponsor = new FormData()

            if (!this.state.nameChanged){
                newSponsor.append('name', sponsor.name)
            }
            else {
                newSponsor.append('name', this.state.name)
            }
            if (!this.state.descChanged){
                newSponsor.append('description', sponsor.description)
            }
            else {
                newSponsor.append('description', this.state.description)
            }
            if (!this.state.linkChanged){
                newSponsor.append('link', sponsor.link)
            }
            else {
                newSponsor.append('link', this.state.link)
            }
            if (!this.state.linkedinChanged){
                newSponsor.append('linkedin', sponsor.linkedin)
            }
            else {
                newSponsor.append('linkedin', this.state.linkedin)
            }
            if (!this.state.imageChanged){
                newSponsor.append('image', sponsor.image)
            }
            else {
                newSponsor.append('image', this.state.image, this.state.image.name)
            }

            if (window.confirm("Do you want to update sponsor: " + sponsor.name)){
                api.updateSponsorbyID(sponsor._id, newSponsor).then(res => {
                    console.log(res.data)
                    window.location.reload()
                }).catch(() => {
                    alert('Could not update. Ensure that you are properly authenticated')
                })
            }
        }
    }

    render() {
        let sponsors;
        let sponsorProfiles;
        if (!this.state.isLoadingSponsors && this.state.sponsors.length !== 0)
        {
          sponsors = this.state.sponsors;
          sponsorProfiles = sponsors.map((sponsor) =>
            
            // Loading an input form for each sponsor and loading it with the data pertaining to each sponsor
            <Row>
                <div className="input_form" key = {sponsor._id}>
                    <form onSubmit={this.onSubmit(sponsor)}>
                        <input type="text" name="name" defaultValue={sponsor.name} className = "update_input" onChange = {this.onChangeName} />
                        <input type="text" name="description" defaultValue={sponsor.description} className = "update_input" onChange = {this.onChangeDescription}/>
                        <input type="text" name="linkedin" defaultValue={sponsor.linkedin} className = "update_input" onChange = {this.onChangeLinkedin}/>
                        <input type="text" name="link" defaultValue={sponsor.link} className = "update_input" onChange = {this.onChangeLink}/>
                        <input type="file" name="image" onChange = {this.onChangeImage}/>
                        <button className="submit_button">Update</button>
                        <button type="button" className="submit_button" onClick={() => this.onDelete(sponsor)}>Delete</button>
                    </form>
                </div>
            </Row>
          )     
        }
        else
        {
            sponsors = null;
            sponsorProfiles = null;
        }
        return (
            <div className = "officer_input">
                <div className = "update_form">
                    <h3>Current Sponsors</h3>
                        {sponsorProfiles}
                </div>
            </div>
        )
    }

}

export default SponsorUpdateDelete;