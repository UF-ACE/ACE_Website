import React from "react";
import { SocialIcon } from "react-social-icons";
import classes from "./ProfileSponsor.module.css";

function ProfileSponsor({ src, description, linkedin, site }) {
  return (
    <div className={classes.profile}>
      <img src={src} alt="" />
      <div className={classes.profile_info}>
        <h4>{description}</h4>
        <div className={classes.profile_icons}>
          <SocialIcon url={linkedin} />
        </div>
        <div className={classes.profile_icons}>
          <SocialIcon url={site} />
        </div>
      </div>
    </div>
  );
}
export default ProfileSponsor;
