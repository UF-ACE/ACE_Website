import "./AboutPage.css";
import React, { Component } from 'react'
import ProfileSponsor from "../../features/ProfileSponsor.js";
import ProfileOfficer from "../../features/ProfileOfficer.js";
import api, { getPeoplebyOfficer } from "../../api/index.js"
import styles from "./AboutPage.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        officers: [],
        alumni: [],
        sponsors: [],
        isLoadingOfficers: false,
        isLoadingAlumni: false,
        isLoadingSponsors: false,
    }
  }

  componentDidMount = async () => {
    this.setState({isLoadingOfficers: true, isLoadingAlumni: true, isLoadingSponsors: true})

    await api.getPeoplebyOfficer(true).then(officers => {
      this.setState({
        officers: officers.data.data,
        isLoadingOfficers: false,
      })
    })

    await api.getPeoplebyOfficer(false).then(alumni => {
      this.setState({
        alumni: alumni.data.data,
        isLoadingAlumni: false,
      })
    })


    await api.getSponsors().then(sponsors =>{
      this.setState({
        sponsors: sponsors.data.data,
        isLoadingSponsors: false,
      })
    })
  }

  render() {

    let officers;
    let officerProfiles;
    let sponsors;
    let sponsorProfiles;
    let alumni;
    let alumniProfiles;

    if (!this.state.isLoadingOfficers && this.state.officers.length != 0)
    {
      officers = this.state.officers;
      officerProfiles = officers.map((officer) =>
        <div key = {officer._id}>
          <ProfileOfficer
            src = {officer.imageURL}
            title = {officer.title}
            name = {officer.name}
            linkedin = {officer.linkedin}
            email = {officer.email}
          />
        </div>
      )     
    }
    else
    {
      officers = null;
      officerProfiles = null;
    }

    if (!this.state.isLoadingAlumni && this.state.alumni.length != 0)
    {
      alumni = this.state.alumni;
      alumniProfiles = alumni.map((alumnus) =>
        <div key = {alumnus._id}>
          <ProfileOfficer
            src = {alumnus.imageURL}
            title = {alumnus.title}
            name = {alumnus.name}
            linkedin = {alumnus.linkedin}
            email = {alumnus.email}
          />
        </div>
      )     
    }
    else
    {
      alumni = null;
      alumniProfiles = null;
    }

    if (!this.state.isLoadingSponsors && this.state.sponsors.length != 0)
    {
      sponsors = this.state.sponsors;
      sponsorProfiles = sponsors.map((sponsor) =>
        <div key = {sponsor._id}>
          <ProfileSponsor
            //imageURL = {sponsor.imageURL}
            name = {sponsor.name}
            description = {sponsor.description}
            linkedin = {sponsor.linkedin}
            site = {sponsor.site}
          />
        </div>  
      )
    }

    return(
      <div className = {styles.AboutPage}>
        <Row>
          <Col>
          <div className = "about_description">
            <h1> Founded in 2014</h1>
            <h3>
              The Association of Computer Engineers serves as a community dedicated to
              representing the union of computer science and electrical engineering.
              We provide an opportunity for students at the University of Florida to
              develop their technical skills, learn from upperclassmen, and develop as
              professionals. Come out to one of our events and meet an amazing group
              of students to help you through your academic journey.
            </h3>
          </div>
          </Col> 
          
        </Row>
        <Row> 
          <Col>
          <h2>Sponsors</h2>
          <div className = "about_sponsors">
            {sponsorProfiles}
          </div>
          </Col>
        </Row>
        <Row> 
          <Col>
          <h2>Officers</h2>
          <div className="about_officers">
              {officerProfiles}  
          </div>
          </Col>
        </Row>
        <Row> 
          <Col>
          <h2>Alumni</h2>
          <div className="about_alumni">
              {alumniProfiles}  
          </div>
          </Col>
        </Row>


         
      </div>  
      

    )

  }

  
}

export default AboutPage;
