import React from "react";
import classes from "./Announcement.module.css";
import PropTypes from "prop-types";

const Announcement = ({ timestamp, message }) => (
    <div className={classes.Announcement}>
        {timestamp}
        <p>{message}</p>
    </div>
);
Announcement.propTypes = {
    message: PropTypes.string.isRequired,
};
export default Announcement;