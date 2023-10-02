## ACE_Website
# What is it?
ACE is the Association of Computer Engineers that provides an opportunity for students at the University of Florida to develop
their technical skills and develop professionally.

The ACE Website is an ongoing open-source project started in 2021. The website was made on the MERN Stack, MongoDB, Express, React, Node.
Since its creation, the website has had many updates, making it a better experience for all who use it. As we continue the
development of the website, we hope to make it one that can be enjoyed outside of ACE as an academic resource for the 
University of Florida and beyond.

This readme will guide you through the installation and the prequisites required to develop the website further.


# Prerequites
Before beginning the installation process, you must make sure to have Node Version Manager for Windows. The website requires
node version 16 or 18 in order to run. NVM for windows can be installed here: https://github.com/coreybutler/nvm-windows

To install:
    * Use the latest installer and once that is done, in your terminal use
    * nvm
        * This will give you the version of NVM if installed properly
    * nodee -v 
        * This will give you the current version of Node being used, if not 16 then use:
    * nvm install 16.18.0
    * npm use 16.18.0
        * This ensures you install node and the correct version of it.


# Cloning repository for local development
## Using terminal
* Install GitHub pages npm install gh-pages --save-dev

* Clone the repository: clone https://github.com/UF-ACE/ACE_Website.git

* Install project dependencies. From the root directory:

   * `npm install`

   * `cd client`

   * `npm install`

* Create a personal branch: git checkout -b <branch_name>

* Add the files to the branch: git add <file_name> (to add a NEW file to branch) OR git add . (to update ALL files in branch)

* Commit to the branch: git commit -m "Your message"

* Push the commit to your remote branch: git push --set-upstream origin <branch_name>

* To run updated project use this command under /ACE_Website/ not under /client/: 
    * `npm run dev`
    * Go to: [http://localhost:3000](http://localhost:3000)
        * This command is used to run both development server and frontend to simulate real changes.


## Using GH desktop

Clone the repository

* Current Repository > Add > Clone Repositories > URL > https://github.com/UF-ACE/ACE_Website.git

Install project dependencies. From the root directory:

* `npm install`

* `cd client`

* `npm install`

Create a personal branch

* Current Branch > New Branch > "branch_name" > Create Branch > (If prompted) Bring my changes to "branch_name" > Switch Branch

Edit files

* To open files in code editor, select your preferred IDE in GitHub desktop by selecting it.
* To add more files, in your IDE add another file.

* For Sublime Text
* On menu bar > Repository > Open in Sublime Text > (to add a NEW file to branch) OR git add . (to update ALL files in branch)

Commit to the branch and push it to the remote

* Commit to "branch_name" > Publish Branch > Push Origin

* To run updated project use this command under /ACE_Website/ not under /client/: 
* `npm run dev`
* Go to: [http://localhost:3000](http://localhost:3000)
    * This command is used to run both development server and frontend to simulate real changes.

Deploying Project to gh-pages
* npm run deploy
* commit/push to your branch
* merge to main branch
* result will show up on gh-pages in roughly 5-10 minutes

## Common Issue
* If you are unable to get the website running after using `npm install` under `/client`, you might have to use:
    * `npm instaill --force`, then try using script again
    * `npm audit fix --force`, then try using script again

# Getting Started with Create React App (contained in `/client`)

This project's frontend was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project's `/client` directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
<b>Note that this command is for front-end testing only.<b>

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# View Website
This project can be viewed at: https://www.uf-ace.com/

# File Structure
The codebase is organized into three separate areas: the root directory, and the client and server subdirectories.

## root
This location contains some files pertaining to the site's backend (a Node project). Important files are as follows.

`.env_sample`: contains an outline of back-end environment variables. This structure should be copied to a `.env` file prior to backend development.
    * A new file should be made in /ACE_Website/ and will just be named ".env", just the extension.
    * The file should contain (Can use your own or if with ACE, will be given to you): 
        * REACT_APP_URI=<SERVERURI>

`index.js`: the entry point of the Node project. Handles connecting to our database, establishing routes, and serving static pages. 

`package.json`: contains backend dependencies and execution scripts. Note that `npm run dev` can be used for creating a production build from the React app contained in `/client`, and subsequently running that build from the backend. The site will then be accessible at [http://localhost:3000](http://localhost:3000).

## client
This directory is home to the React app that serves as the site's frontend. It contains, in `./src`, the frontend source code. This code is organized in a relatively straightforward manner. Noteworthy files include:

 `/src/api/index.js`: contains frontend functions that make use of backend routing (via Axios).

`/src/App.js`: contains the site's routing behavior

`.env_sample`: contains an outline of front-end environment variables. This structure should be copied into a `.env` file prior to frontend development.
    * A new file should be made in /ACE_Website/client and will just be named ".env", just the extension.
    * The file should contain (Can use your own or if with ACE, will be given to you): 
            * REACT_APP_YOUTUBE_API_KEY=<APIKEY>
            * REACT_APP_PASSWORD=<YoutubeAPIPass>

`package.json`: contains, among other things, frontend dependencies and execution scripts. Note that these scripts must be called from within the client directory to be executed. `npm run build` is used to create a production build.

## server
Contains code responsible for backend functionality and database communication. Contained file locations are:

`/control`: contains functions for retrieving, editing, deleting, and creating each of the data types that are stored in our database. Token control is a query to the database.

`/db/index.js`: contains code required to connect to the ACE MongoDB cluster upon the website's launch.

`/models`: outlines the structure of each data type that is stored in our database. These structures are stored as Mongoose schema objects.

`/routes`: specifies the routing behavior for each data type's functions (i.e. what URLs API calls should be directed to). Specifying this allows the front end to see them. This is done in Express.

# Notes
- As noted above, production testing should call `npm run dev` to start both the frontend and backend. This will simulate the application's deployment environment. It will subsequently be accessible at [http://localhost:3000](http://localhost:3000).
- The `/uploads` folder contains images uploaded via the admin dashboard. `.gitignore` specifies that the contents of this folder are not included in Git pushes, but the folder itself will always be present for local storage.

- Images are stored in Mongo as array buffers encoded with base64. As such, they have to be decoded after they are retrieved and before they are displayed to the user.
    - For the same reason, we cannot store images larger than 16MB.

- Although the feature is currently unavailable due to security concerns, emails sent via the footer's Contact Form are handled by NodeMailer. Basically, an ACE email address sends emails to itself that contains the respondent's name, email address, and message. Responses are also logged in the Mongo database.

# License
Free to use under an MIT License. This is meant to help others learn how to do webdevelopment. If it can help anyone learn the process while contributing to the website, feel free to explore the code.