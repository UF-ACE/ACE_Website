import styles from "./AboutPage.module.css";
import React, { Component } from "react";
import ProfileSponsor from "../../features/ProfileSponsor.js";
import ProfileOfficer from "../../features/ProfileOfficer.js";
import api from "../../api/index.js";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "./Loader"

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
    };
  }

  componentDidMount = async () => {
    this.setState({
      isLoadingOfficers: true,
      isLoadingAlumni: true,
      isLoadingSponsors: true,
    });

    await api.getPeoplebyOfficer(true).then((officers) => {
      this.setState({
        officers: officers.data.data,
        isLoadingOfficers: false,
      });
    });

    await api.getPeoplebyOfficer(false).then((alumni) => {
      this.setState({
        alumni: alumni.data.data,
        isLoadingAlumni: false,
      });
    });

    await api.getSponsors().then((sponsors) => {
      this.setState({
        sponsors: sponsors.data.data,
        isLoadingSponsors: false,
      });
    });
  };

  arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));        
    bytes.forEach((b) => binary += String.fromCharCode(b));       
    return window.btoa(binary);
  };

  render() {
    let officers;
    let officerProfiles;
    let sponsors;
    let sponsorProfiles;
    let alumni;
    let alumniProfiles;

    if (!this.state.isLoadingOfficers && this.state.officers.length !== 0) {
      officers = this.state.officers;
      officerProfiles = officers.map((officer) => (
        <div key={officer._id}>
          <ProfileOfficer
            src={'data:' + officer.image.contentType + ';base64,' + this.arrayBufferToBase64(officer.image.data.data)}
            title={officer.title}
            name={officer.name}
            linkedin={officer.linkedin}
            email={officer.email}
          />
        </div>
      ));
    } else {
      officers = null;
      officerProfiles = null;
    }

    if (!this.state.isLoadingAlumni && this.state.alumni.length !== 0) {
      alumni = this.state.alumni;
      alumniProfiles = alumni.map((alumnus) => (
        <div key={alumnus._id}>
          <ProfileOfficer
            src={'data:' + alumnus.image.contentType + ';base64,' + this.arrayBufferToBase64(alumnus.image.data.data)}
            title={alumnus.title}
            name={alumnus.name}
            linkedin={alumnus.linkedin}
            email={alumnus.email}
          />
        </div>
      ));
    } else {
      alumni = null;
      alumniProfiles = null;
    }

    if (!this.state.isLoadingSponsors && this.state.sponsors.length !== 0) {
      sponsors = this.state.sponsors;
      sponsorProfiles = sponsors.map((sponsor) => (
        <div key={sponsor._id}>
          <ProfileSponsor
            src={'data:' + sponsor.image.contentType + ';base64,' + this.arrayBufferToBase64(sponsor.image.data.data)}
            name={sponsor.name}
            description={sponsor.description}
            linkedin={sponsor.linkedin}
            link={sponsor.link}
          />
        </div>
      ));
    }

    return (
      <div className={styles.aboutpage}>
        <Row>
          <Col>
            <div className={styles.about_description}>
              <h1>Founded in 2014</h1>
              <h3>
                The Association of Computer Engineers serves as a community
                dedicated to representing the union of computer science and
                electrical engineering. We provide an opportunity for students
                at the University of Florida to develop their technical skills,
                learn from upperclassmen, and develop as professionals. Come out
                to one of our events and meet an amazing group of students to
                help you through your academic journey.
              </h3>
            </div>
          </Col>
        </Row>
        {
          this.state.isLoadingAlumni || this.state.isLoadingOfficers || this.state.isLoadingSponsors ?
            <Loader/>
          :
          <Col>
            <Row>
              <Col>
                <h2>Sponsors</h2>
                <div className={styles.about_sponsors}>{sponsorProfiles}</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Officers</h2>
                <div className={styles.about_officers}>{officerProfiles}</div>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>Alumni</h2>
                <div className={styles.about_alumni}>{alumniProfiles}</div>
              </Col>
            </Row>
          </Col>
        }
        <Row>
          <Col>
            <div className={styles.footerSpace}>
              <h2>The Builders</h2>
              <div>
                {/*Put a group image here*/}
                <h3>
                  This website was built by ACE's newly formed Website
                  Committee. To explore the source code and contribute, go to to
                  repository
                </h3>
                <div className={styles.link}>
                  <a href="https://github.com/UF-ACE/ACE_Website">
                    ACE Website Source Code
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default AboutPage;
