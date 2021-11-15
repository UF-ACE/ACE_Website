import React from "react";
import { SocialIcon } from "react-social-icons";
import classes from "./ProfileOfficer.module.css";

function ProfileOfficer({ src, title, name, linkedin, email }) {
  return (
    <div className={classes.profile}>
      <img src={src} alt={src}/>
      <div className={classes.profile_info}>
        <h2>{title}</h2>
        <h4>{name}</h4>
        <div className={classes.profile_icons}>
          <SocialIcon url={linkedin} />
        </div>
        <div className={classes.profile_icons}>
          <SocialIcon url={email} />
        </div>
      </div>
    </div>
  );
}
export default ProfileOfficer;
