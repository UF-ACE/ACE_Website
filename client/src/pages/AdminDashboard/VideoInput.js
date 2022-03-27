import React, { Component } from "react";
import "./OfficerInput.css";
import Youtube from "../../features/Youtube";
import Row from "react-bootstrap/Row";
import VideoUpdateDelete from "./VideoUpdateDelete";

class VideoInput extends Component {
    
    render() {
        return (
            <div className = "officer_input">
                    <div className="test_input d-grid gap-3">            
                        <Row>
                            <h3>Load All Videos</h3>
                            {/*Do not click API Call too many times */}
                            <Youtube />
                        </Row>
                        <Row>
                            <b>NOTE:</b> &emsp;Tags are inputted below in the form of a comma-separated list (x1,x2,x3,...,xn).
                            This structure must be followed for correct behavior.
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