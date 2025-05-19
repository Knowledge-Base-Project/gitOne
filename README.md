# Knowledge Base App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Prerequisites

1. Git Bash
2. VS Code

# To clone this repository:
1. Open Git Bash.
2. Change the current working directory to the location where you want the cloned directory.
3. git cloneRun command below:
```
$ git clone https://github.com/Knowledge-Base-Project/gitOne.git
```
# Push the updates to the GitHub repository
1.Push the React app to the GitHub repository
```
$ npm run deploy
```
*optional: push and add comment example:*
```
$ npm run deploy -- -m "Deploy React app to GitHub Pages"
```
[!NOTE]
This action will create a new build folder and push the updates (build folder content) into the default branch (gh-pages).  
For more information see https://github.com/gitname/react-gh-pages?tab=readme-ov-file#7-push-the-react-app-to-the-github-repository

# Store the updated source code on GitHub (branch: master)
```
$ git add .
$ git commit -m "Configure React app for deployment to GitHub Pages"
$ git push origin master
```
For more information see https://github.com/gitname/react-gh-pages?tab=readme-ov-file#9-optional-store-the-react-apps-source-code-on-github
