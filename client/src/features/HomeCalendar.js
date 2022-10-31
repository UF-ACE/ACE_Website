import React from "react";
import classes from "./HomeCalendar.module.css";

const HomeCalendar = () => (
  <div className={classes.calendarResponsive}>
    <iframe
      src={
        "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=0&showNav=1&showPrint=0&showDate=1&showCalendars=0&showTabs=0&showTz=0&title=ACE%20Upcoming&src=ZjNpbTJvMWgyMzE1cW9oMjRzYzRwZ2ZraGdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bmZjZWhuZWUyOW92OWluZGsxODU3M3Fnc2NAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=dWRzOGQwY2IzMWg1Yjh0Y2JzZXZ0NjJoN2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=bjdnamtxZmlnMTdjMGluZG5pNjc0b2huMG9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%233F51B5&color=%237986CB&color=%23D81B60&color=%23F09300&color=%23039BE5"
      }
      style={{
        border: "solid 1px #777",
      }}
      width="800"
      height="600"
      frameborder="0"
      scrolling="no"
      title="ACE Calendar"
    ></iframe>
  </div>
);

export default HomeCalendar;
