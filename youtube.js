import React, { Component } from 'react';
require('dotenv').config();
console.log(process.env.REACT_APP_GOOGLE_API_KEY)
const APIKey = process.env.REACT_APP_GOOGLE_API_KEY //API key
const channelID = 'UCGGG_yIpk2LKlmNA498Y8Hg' //Web Channel ID
const resultMax = 50;

const selfURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${resultMax}&order=date&key=${APIKey}`


class Youtube extends Component {
    
    constructor(props){

        super(props);
        this.state = {
            resultYoutube: []
        };
        this.clicked = this.clicked.bind(this);

    }
    
    clicked(){

        fetch(selfURL)
            .then((response) => response.json ())
            .then((responseJson) => {
                const resultYoutube = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
                this.setState({resultYoutube});
            })
            .catch((error) => {
                console.log(error);
            })

    }  

    
    render(){
        
        //first load & blank array. after click button get data into array.
        console.log(this.state.resultYoutube);
        return(
            <div className="generalWrapper">
                <button onClick={this.clicked}>Get Videos</button>
                {
                    this.state.resultYoutube.map((link, i) => {
                        console.log(link);
                        var iframe = <div key={i} className="videoThumb"><iframe width="560" height="315" src={link} title="video" frameBorder="0" allowFullScreen></iframe></div>
                        return iframe;
                    })
                }

                {this.iframe}
            </div>
        );
    }
}

export default Youtube;