# Cloning repository for local development
## Using terminal
* Install GitHub pages npm install gh-pages --save-dev

* Clone the repository: clone https://github.com/UF-ACE/ACE_Website.git

* Create a personal branch: git checkout -b <branch_name>

* Add the files to the branch: git add <file_name> (to add a NEW file to branch) OR git add . (to update ALL files in branch)

* Commit to the branch: git commit -m "Your message"

* Push the commit to your remote branch: git push --set-upstream origin <branch_name>

* Run updated project: npm start

## Using GH desktop (assuming you also have Sublime Text)

Clone the repository

* Current Repository > Add > Clone Repositories > URL > https://github.com/cameron-keene/ACE_Website.git

Create a personal branch

* Current Branch > New Branch > "branch_name" > Create Branch > (If prompted) Bring my changes to "branch_name" > Switch Branch

Edit files

* On menu bar > Repository > Open in Sublime Text > (to add a NEW file to branch) OR git add . (to update ALL files in branch)

Commit to the branch and push it to the remote

* Commit to "branch_name" > Publish Branch > Push Origin

Run updated project

* npm start
Deploying Project to gh-pages
* npm run deploy
* commit/push to your branch
* merge to main branch
* result will show up on gh-pages in roughly 5-10 minutes

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# View Website
This project can be viewed at: https://uf-ace-website.herokuapp.com/#/

