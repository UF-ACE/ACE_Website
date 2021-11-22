import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./ProfileSponsor.module.css";

function ProfileSponsor({ src, name, description, linkedin, link }) {
  return (
    <div className={styles.profile}>
      <img src={src} alt="" />
      <div className={styles.profile_info}>
        <h2>{name}</h2>
        <h4>{description}</h4>
        <div className={styles.profile_icons}>
          <SocialIcon url={linkedin} />
        </div>
        <div className={styles.profile_icons}>
          <SocialIcon url={link} />
        </div>
      </div>
    </div>
  );
}
export default ProfileSponsor;
