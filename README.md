# Simple Readme Generator

***Author: Anees Azeez***

## Description

This is a simple node.js application that allows users to dynamically generate README files using command-line input.

## Dependencies used

The app uses "inquirer" for the user prompts, "axios" to connect to the GitHub API, and "fs" to create and write into a file.

## User input

The terminal prompts the user for the following information:
* Name - This will be used for the filename and in the content of the README.
* GitHub username - This will get the user's avatar and email from GitHub. If the email is null, a link to the user's profile will show.
* Title of the project - This will be the main header in the README.
* Description - A brief description of the project.
* Usage - An explanation on what the app is used for.

## Link to the Project's Repository

You can find the project files [here](https://github.com/afazeez82/readme-generator-githubio.com).