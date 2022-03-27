import React, { Component } from 'react';
import apis from "../api/index"
import classes from "./Youtube.module.css";
var decode = require('decode-html');

require('dotenv').config()
const APIKey = process.env.REACT_APP_YOUTUBE_API_KEY //API key
const channelID = 'UCGGG_yIpk2LKlmNA498Y8Hg' //Web Channel ID
const resultMax = 50;


const selfURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelID}&maxResults=${resultMax}&order=date&key=${APIKey}`


async function updateDatabase(link, title, description) {
    // Uncomment the following to delete all videos in the database before pulling from Youtube:
    /*
    const videos = await apis.getVideos().then(res => res.data)
    for (let i = 0; i < videos.data.length; i++) {
        apis.deleteVideobyID(videos.data[i]._id)
    }
    */

    for (let i = 0; i < title.length; i++) {
        if (link[i] === "https://www.youtube.com/embed/undefined") {    // Bad video entry retrieved from YouTube
            i++;
            continue;
        }
        var query = { title: decode(title[i]) }
        await apis.getVideobyTitle(query) 
            .then(function(){   // Video is found (already exists in the database)
                console.log('Video already exists');
            }).catch(function(){    // Video was not found (does not exist in the database)
                console.log('Creating database entry')
                var entry = { title: decode(title[i]), description: description[i], link: link[i], blacklisted: false, tags: [] };
                apis.createVideo(entry)
                    .then(function() {
                        console.log('Successfully added video to database')
                    })
                    .catch(function() {
                        console.log('Video could not be added')
                    })
            })
    }
    window.location.reload()
}

class Youtube extends Component {
    
    clicked(){
        fetch(selfURL)
            .then((response) => response.json ())
            .then((responseJson) => {
                const link = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId)
                const title = responseJson.items.map(obj => obj.snippet.title)
                const description = responseJson.items.map(obj => obj.snippet.description)
                const dates = responseJson.items.map(obj => obj.snippet.publishedAt)
                console.log(dates)

                updateDatabase(link, title, description);   // Update the database with the retrieved videos
            })
            .catch((error) => {
                alert('Cannot fetch. Check that you are properly authenticated')
            })
    }      

    render(){
          
        return(
            <div className={classes.loadButton}>
                
                <button onClick={this.clicked}>Get Videos</button>
                      
            </div>
        );
    }
}

export default Youtube;