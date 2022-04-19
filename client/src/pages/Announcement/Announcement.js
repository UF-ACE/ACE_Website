import React from "react";
import classes from "./Announcement.module.css";
import PropTypes from "prop-types";
import parse from "html-react-parser"

const Announcement = ({ timestamp, message }) => (
    <div className={classes.Announcement}>
        <div className={classes.Timestamp}>
            <h4><i><strong>Date: {timestamp}</strong></i></h4>
        </div>
        <div className={classes.AnnouncementBody}>
            {parse(message)}
        </div>
    </div>
);
Announcement.propTypes = {
    timestamp: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Announcement;