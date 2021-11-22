import React from "react";
import { SocialIcon } from "react-social-icons";
import styles from "./ProfileOfficer.module.css";

function ProfileOfficer({ src, title, name, linkedin, email }) {
  return (
    <div className={styles.profile}>
      <img src={src} alt={src} />
      <div className={styles.profile_info}>
        <h2>{title}</h2>
        <h4>{name}</h4>
        <div className={styles.profile_icons}>
          <SocialIcon url={linkedin} />
        </div>
        <div className={styles.profile_icons}>
          <SocialIcon url={email} />
        </div>
      </div>
    </div>
  );
}
export default ProfileOfficer;
