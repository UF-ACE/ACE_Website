import React from "react";
import HomeCalendar from "../../features/HomeCalendar";
import HomeYoutube from "../../features/HomeYoutube";
import logo from "../../imgs/logo-min.png";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={styles.homepage}>
      <div className={styles.callToAction}>
        <h1 className={styles.h1}>
          Forget your classes office hours, just{"  "}
          <img className={styles.img} src={logo} />
          {"  "} it
        </h1>
      </div>
      <div className={styles.background_video}>
        {/*Make the embedId a .env variable*/}
        <HomeYoutube embedId="wY55CdGx4H0" />
      </div>
      <h1 className={styles.h1}>Check out the events coming up this month!</h1>
      <div className={styles.background_video}>
        <HomeCalendar />
      </div>
    </div>
  );
}

export default HomePage;
