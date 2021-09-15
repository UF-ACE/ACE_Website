import React from "react";
import BackgroundImage from "../features/BackgroundImage";
import BackgroundYoutube from "../features/BackgroundYoutube";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="homepage">
      <BackgroundImage />
      <div className="background_video">
        <h1>Latest Video</h1>
        <BackgroundYoutube className="homepage_video" embedId="rokGy0huYEA" />
      </div>
    </div>
  );
}

export default HomePage;
