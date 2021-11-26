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
        this.onChangeImageURL = this.onChangeImageURL.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.state = {
            sponsors: [],
            sponsor: null,
            name: '',
            title: '',
            email: '',
            linkedin: '',
            password: '',
            imageURL: '',
        }
    }
    onDelete(sponsor){
        if (window.confirm("Do you want to delete Sponsor: " + sponsor.name)){
            api.deleteSponsorbyID(sponsor._id);
        }
        window.location.reload(true);

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
        this.nameChanged = true;
    }

    onChangeDescription(e) {
        this.setState({
            description: e.target.value
        });
        this.descriptionChanged = true;
    }

    onChangeLinkedin(e) {
        this.setState({
            linkedin: e.target.value
        });
        this.linkedinChanged = true;
    }

    onChangeLink(e) {
        this.setState({
            link: e.target.value
        });
        this.linkChanged = true;
    }

    onChangeImageURL(e) {
        this.setState({
            imageURL: e.target.value
        });
        this.imageURLChanged = true;
    }
    

    onUpdate(sponsor) {
        //Looks to see if the image is from a google drive.  A google drive image that needs string manipulation
        //will contain the substring drive.google.com/file
        let googleDriveImage = (this.state.imageURL.indexOf("drive.google.com/file") !== -1);

        let newSponsor = {
            name: this.state.name,
            description: this.state.description,
            linkedin: this.state.linkedin,
            link: this.state.link,
            imageURL: this.state.imageURL,
        }
        if (!this.nameChanged){
            newSponsor.name = sponsor.name;
        }
        if (!this.descriptionChanged){
            newSponsor.description = sponsor.description;
        }
        if (!this.linkedinChanged){
            newSponsor.linkedin = sponsor.linkedin;
        }
        if (!this.linkChanged){
            newSponsor.link = sponsor.link;
        }
        if (!this.imageURLChanged){
            newSponsor.imageURL = sponsor.imageURL;
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

            newSponsor.imageURL = rootString + imageID;
        }
        if(!this.nameChanged && !this.descriptionChanged && !this.linkedinChanged && !this.linkChanged && !this.imageURLChanged){
            alert("Nothing to update")
        }
        else if (window.confirm("Do you want to update Sponsor: " + sponsor.name)){
            // api.updateSponsorbyID(sponsor._id, newSponsor);
            api.updateSponsorbyName(sponsor.name, newSponsor);
        }
        window.location.reload(true);
    }

    render() {
        let sponsors;
        let sponsorProfiles;
        if (!this.state.isLoadingSponsors && this.state.sponsors.length !== 0)
        {
          sponsors = this.state.sponsors;
          sponsorProfiles = sponsors.map((sponsor) =>
            
            // Loading an input form for each officer and loading it with the data pertaining to each officer
            <Row>
                <div className="input_form" key = {sponsor._id}>
                    <form>
                        <input type="text" name="name" placeholder={sponsor.name} className = "update_input" onChange = {this.onChangeName} />
                        <input type="text" name="description" placeholder={sponsor.description} className = "update_input" onChange = {this.onChangeDescription}/>
                        <input type="text" name="linkedin" placeholder={sponsor.linkedin} className = "update_input" onChange = {this.onChangeLinkedin}/>
                        <input type="text" name="link" placeholder={sponsor.link} className = "update_input" onChange = {this.onChangeLink}/>
                        <input type="text" name="imageURL" placeholder={sponsor.imageURL} className = "update_input" onChange = {this.onChangeImageURL}/>
                        <button className="submit_button" onClick={() => this.onUpdate(sponsor)}>Update</button>
                        <button className="submit_button" onClick={() => this.onDelete(sponsor)}>Delete</button>
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