import React from "react";
import HomeCalendar from "../../features/HomeCalendar";
import HomeYoutube from "../../features/HomeYoutube";
import ParallaxContainer from "../../features/Parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import logo from "../../imgs/logo-min.png";
import styles from "./HomePage.module.css";
import { Parallax } from "react-scroll-parallax";
import { useParallax } from "react-scroll-parallax";

require("dotenv").config();

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.callToAction}>
        <h1 className={styles.h1}>
          Forget your class office hours, just{"  "}
          <img className={styles.img} src={logo} alt="ACE Logo" />
          {"  "} it
        </h1>
      </div>
      <Parallax speed={-3}>
        <div className={styles.background_video}>
          <HomeYoutube embedId={process.env.REACT_APP_HOME_VIDEO_EMBED_ID} />
        </div>
      </Parallax>
      <h1 className={styles.h1}>Check out the events coming up this month! </h1>
      <Parallax speed={-3}>
        <div className={styles.background_video}>
          <HomeCalendar />
        </div>
      </Parallax>
    </div>
  );
}

export default HomePage;
