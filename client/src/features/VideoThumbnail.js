import React from "react";
import "./VideoThumbnail.css";

function Thumbnail({ embedId, title, description, tags }) {
  return (
    <div class="container">
      <div class="row mb-4">
      <div class="col-sm lg-mb-4 mb-2">
        <div class = "thumbnail">
          <a href={"https://www.youtube.com/watch?v=" + embedId}
          rel="noopener noreferrer" target="_blank">
          <img src={"http://img.youtube.com/vi/" + embedId + '/0.jpg'}
            alt={title} class="img-fluid rounded"/>
          </a>
        </div>
      </div>
      <div class="col-sm mb-4">
        <div class="row">
            <div class = "title">
            <h2>{title}</h2>
            </div>
        </div>
        <div class="row">
            <div class = "description">
            <h4>{description}</h4>
            </div>
        </div>
        <div class="row">
          <div className="tags">
              <span class="badge badge-pill badge-primary">{tags}</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Thumbnail;