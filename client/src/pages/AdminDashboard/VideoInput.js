import React, { Component } from "react";
import "./OfficerInput.css";
import Youtube from "../../features/Youtube";
import Row from "react-bootstrap/Row";
import VideoUpdateDelete from "./VideoUpdateDelete";

class VideoInput extends Component {
    
    render() {
        return (
            <div className = "officer_input">
                    <div className="test_input">            
                        <Row>
                            <h3>Load All Videos</h3>
                            {/*Do not click API Call too many times */}
                            <Youtube />
                        </Row>
                        <Row>
                            <VideoUpdateDelete/>
                        </Row>
                    </div>
            </div>
        )
    }

}

export default VideoInput;