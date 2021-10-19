import React from "react";
import classes from "./BackgroundImage.module.css";
import image from "./background.png";
function BackgroundImage() {
  return (
    <div className={classes.BackgroundImage}>
      <h1>UF Association of Computer Engineers!</h1>
      <img src={image} alt=""></img>
    </div>
  );
}
export default BackgroundImage;
