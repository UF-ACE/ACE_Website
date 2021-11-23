import React from "react";
import classes from "./HomeCalendar.module.css";

const HomeCalendar = () => (
  <div className={classes.calendarResponsive}>
    <iframe
      src={
        "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showNav=0&showDate=0&showPrint=0&showTabs=0&showCalendars=0&showTz=1&title=ACE%20Events&src=ZGV2ZWxvcG1lbnQudWYuYWNlQGdtYWlsLmNvbQ&src=NDA0ZW9wNDE1Nm4xdHJlN2ZmOGhzcjg2c2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=bmZjZWhuZWUyOW92OWluZGsxODU3M3Fnc2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZjNpbTJvMWgyMzE1cW9oMjRzYzRwZ2ZraGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YnQ2dGRlN3N2ZnBicjM2aDg2aWpzcTNlaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=dWRzOGQwY2IzMWg1Yjh0Y2JzZXZ0NjJoN2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bjdnamtxZmlnMTdjMGluZG5pNjc0b2huMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23D81B60&color=%23EF6C00&color=%23616161&color=%23D50000&color=%237CB342&color=%23AD1457&color=%238E24AA&color=%23F4511E&color=%234285F4"
      }
      style={{
        border: "solid 1px #777",
      }}
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
      title="Embedded calendar"
    ></iframe>
  </div>
);

export default HomeCalendar;
