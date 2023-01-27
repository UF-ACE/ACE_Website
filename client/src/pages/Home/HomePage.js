import React from "react";
import HomeCalendar from "../../features/HomeCalendar";
import HomeYoutube from "../../features/HomeYoutube";
import ParallaxContainer from "../../features/Parallax";
import logo from "../../imgs/logo-min.png";
import styles from "./HomePage.module.css";
import galaxy from "../../imgs/galaxy.jpg";

require("dotenv").config();

function HomePage() {
  return (
      <div className={styles.homepage}>
        <div className={styles.callToAction}>
          <h1 className={styles.h1}>
            Forget your class office hours, just{"  "}
            <img className={styles.img} src={logo} alt="ACE Logo" />
            {"  "} it!
          </h1>
        </div>
        <HomeYoutube embedId={process.env.REACT_APP_HOME_VIDEO_EMBED_ID} />
        <h1 className={styles.h1}>Check out the events coming up this month! </h1>
        <section class="image-txt-container">
          <h2 class="text2" amp-fx="parallax" data-parallax-factor="1.7">
            Hi!
            <img class="responsive1" src={galaxy} alt="Parallax Image" />
          </h2>
          <h2 class="text1">
            <img class="responsive2" src={galaxy} alt="Parallax Image" />
            Yo!
          </h2>
          <h2 class="text2">
            Hi!
            <img class="responsive1" src={galaxy} alt="Parallax Image" />
          </h2>
          <h2 class="text1">
            <img class="responsive2" src={galaxy} alt="Parallax Image" />
            Hi
          </h2>
        </section>
        <HomeCalendar/>
      </div>
  );
}

export default HomePage;
