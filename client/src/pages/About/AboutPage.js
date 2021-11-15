import "./AboutPage.css";
import React, { Component } from 'react'
import ProfileSponsor from "../../features/ProfileSponsor.js";
import ProfileOfficer from "../../features/ProfileOfficer.js";
//import jpm_logo from "../imgs/jpm-logo.jpg";
import api, { getPeoplebyOfficer } from "../../api/index.js"
import styled from 'styled-components'
import axios from 'axios'
//import 'react-table/react-table.css'


/*function AboutPage() {
  //const [officers, setOfficers] = React.useState([]);

  /*React.useEffect( () => {
    const db = firebase.firestore();
    return db.collection('officers').onSnapshot((snapshot) => {
      const officersData = [];
      snapshot.forEach(doc => officersData.push({ ...doc.data(), id: doc.id }));
      setOfficers(officersData);
    });
}, []);

  const sponsors = api.getSponsors();
  const officers = api.getPeoplebyOfficer();
 

  return (
    <div className="aboutpage">
      <h1> Founded in 2014</h1>
      <h3>
        The Association of Computer Engineers serves as a community dedicated to
        representing the union of computer science and electrical engineering.
        We provide an opportunity for students at the University of Florida to
        develop their technical skills, learn from upperclassmen, and develop as
        professionals. Come out to one of our events and meet an amazing group
        of students to help you through your academic journey.
      </h3>
      
      <h2>Sponsors</h2>
      <div className="about_sponsors">
        {
          /*<div key = {sponsors[0].id}>
            <ProfileSponsor
              src={sponsors[0].name}
              description={sponsors[0].description}
              linkedin={sponsors[0].linkedin}
              site={sponsors[0].site}
            />
        </div>
        }
        
      </div>

      <h2>Officers</h2>
      <div className="about_officers">
        
        <div className="about_officers">
              {officers.map(function(officer) {

              }
                <div key = {officer.id}>
                  <ProfileOfficer
                    //src={(officer.avatar)}
                    title = {officer.title}
                    name = {officer.name}
                    linkedin = {officer.linkedin}
                    email = {officer.email}
                  />
                </div>
              ))}
      </div>

      </div>
    </div>
  );
}*/



class AboutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        officers: [],
        sponsors: [],
        isLoadingOfficers: false,
        isLoadingSponsors: false,
    }
  }

  componentDidMount = async () => {
    this.setState({isLoadingOfficers: true, isLoadingSponsors: true})

    await api.getPeoplebyOfficer(true).then(officers => {
      this.setState({
        officers: officers.data.data,
        isLoadingOfficers: false,
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

    if (!this.state.isLoadingOfficers && this.state.officers.length != 0)
    {
      officers = this.state.officers;
      officerProfiles = officers.map((officer) =>
        <div key = {officer._id}>
          <ProfileOfficer
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

    if (!this.state.isLoadingSponsors && this.state.sponsors.length != 0)
    {
      sponsors = this.state.sponsors;
      sponsorProfiles = sponsors.map((sponsor) =>
        <div key = {sponsor._id}>
          <ProfileSponsor
            src = {sponsor.name}
            description = {sponsor.description}
            linkedin = {sponsor.linkedin}
            site = {sponsor.site}
          />
        </div>  
      )
    }
    
    return(
      <div className = "AboutPage">
        <h1> Founded in 2014</h1>
        <h3>
          The Association of Computer Engineers serves as a community dedicated to
          representing the union of computer science and electrical engineering.
          We provide an opportunity for students at the University of Florida to
          develop their technical skills, learn from upperclassmen, and develop as
          professionals. Come out to one of our events and meet an amazing group
          of students to help you through your academic journey.
        </h3>
        <h2>Sponsors</h2>
        <div className = "about_sponsors">
          {sponsorProfiles}
        </div>
        <h2>Officers</h2>
        <div className="about_officers">
            {officerProfiles}  
        </div>
        

      </div>  
      

    )

  }

  
}

export default AboutPage;
