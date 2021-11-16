import React from "react";
import HomeCalendar from "../../features/HomeCalendar";
import HomeYoutube from "../../features/HomeYoutube";
import Youtube from "../../features/Youtube";
import logo from "../../imgs/logo-min.png";
import styles from "./HomePage.module.css";

require('dotenv').config()

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.callToAction}>
        <h1 className={styles.h1}>
          Forget your classes office hours, just{"  "}
          <img className={styles.img} src={logo} alt="ACE Logo" />
          {"  "} it
        </h1>
      </div>
      <div className={styles.background_video}>
        {/*Make the embedId a .env variable*/}
        <HomeYoutube embedId={ process.env.REACT_APP_HOME_VIDEO_EMBED_ID } />
      </div>
      <h1 className={styles.h1}>Check out the events coming up this month!</h1>
      <div className={styles.background_video}>
        <HomeCalendar />
      </div>
    </div>
  );
}

export default HomePage;
