import React from "react";
import "./AboutPage.css";
import ProfileSponsor from "../features/ProfileSponsor.js";
import ProfileOfficer from "../features/ProfileOfficer.js";
import jpm_logo from "../imgs/jpm-logo.jpg";
import firebase from "./firebase";


function AboutPage() {
  const [officers, setOfficers] = React.useState([]);

  React.useEffect( () => {
    const db = firebase.firestore();
    return db.collection('officers').onSnapshot((snapshot) => {
      const officersData = [];
      snapshot.forEach(doc => officersData.push({ ...doc.data(), id: doc.id }));
      setOfficers(officersData);
    });
}, []);

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
        <ProfileSponsor
          src={jpm_logo}
          description="J.P. Morgan is a global leader in financial services, offering solutions to the world's most important corporations, governments and institutions in more than 100 countries."
          linkedin="https://www.linkedin.com/company/jpmorgan/"
          site="https://www.jpmorgan.com/global"
        />
      </div>

      <h2>Officers</h2>
      <div className="about_officers">
        
        <div className="about_officers">
              {officers.map(officer =>(
                <div key = {officer.id}>
                  <ProfileOfficer
                    src={(officer.avatar)}
                    role = {officer.role}
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
}

export default AboutPage;
