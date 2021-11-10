// example on how to identify tags using information from the videos 
// Code can be tested here: https://app.codingrooms.com/w/Aart2u2quMQN

// Store the title and description of a video
const videoInfo = "This is an example! we are automating the tag identification using a youtube API, here are some random tags and characters to test the functionality. !#@ #* 23 ><.,/ c++ JAVA jpMoRgan | github, \|/ gbm GBM leetCODE"

// Call the getTagbyTitle() to identify if word is a saved tag
// For simplicity using the following variable:
let savedTags = ["c++","java","github","gbm", "jpmorgan", "api","leetcode"]
identifyTag(videoInfo);

function identifyTag(videoInfo){
    console.log(videoInfo);
	let word = "";
	videoInfo = videoInfo.toLowerCase();
	for(let i = 0;i < videoInfo.length; i++){
		let currChar = videoInfo[i];
		// Word delimeter
		if(currChar != ' '){
			word += currChar;
		}
        else{
		    word = "";
            continue;
        }
		if(isTag(word)){
			// Creates new tag in the video
			// updateVideobyTitle(), change tag
			// can we push_back to the current tags?
			console.log(word);
		}
	}
}

function isTag(word){
	// same procedure but using getTagbyTitle()
	return savedTags.includes(word);
}