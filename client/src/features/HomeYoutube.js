import React from "react";
import classes from "./HomeYoutube.module.css";
import PropTypes from "prop-types";

const HomeYoutube = ({ embedId }) => (
  <div className={classes.videoResponsive}>
    <iframe
      width="3000"
      height="800"
      src={`https://www.youtube.com/embed/${embedId}?&autoplay=1&rel=0`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
HomeYoutube.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default HomeYoutube;
