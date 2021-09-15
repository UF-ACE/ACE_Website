import React from "react";
import classes from "./BackgroundYoutube.module.css";
import PropTypes from "prop-types";

const BackgroundYoutube = ({ embedId }) => (
  <div className={classes.videoResponsive}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
BackgroundYoutube.propTypes = {
  embedId: PropTypes.string.isRequired,
};
export default BackgroundYoutube;
