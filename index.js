const inquirer = require("inquirer");
const fs = require('fs');
const axios = require('axios');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "gitname",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a brief description of the project:"
    },
    {
        type: "input",
        name: "usage",
        message: "Please explain the usage for your project:"
    }
  ]).then(function(response) {
    let {name,gitname,title,description,usage} = response;
    let avatarUrl;
    let email;
    let queryUrl = `https://api.github.com/users/${gitname}`;
    axios.get(queryUrl).then(
        (response) => {
            console.log(response);
            avatarUrl = response.data.avatar_url;
            console.log(avatarUrl);
            
            if(email==null) {
                email = ".";
            } else {
                email = ", or email me at " + response.data.email + ".";
            };

            let filename = name.toLowerCase().split(' ').join('_') + ".md";
            
let data = `# ${title}

<img src="${avatarUrl}" alt="avatar" style="border-radius: 36px" width="60" />

Author: ${name}

## Description

${description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

npm install

## Usage

${usage}

## License

This project is licensed under the MIT license.

## Tests

To run tests, run the following command:

npm test

## Questions

[![GitHub license](https://img.shields.io/badge/GitHubUser-${gitname}-orange)](${queryUrl})

If you have any questions about the repo, open an issue or contact me directly [here](${queryUrl})${email}`;

    fs.writeFile(filename, data, function(error) {
        if(error) {
            return console.log(error);
        } 
        console.log("Your README file has been generated.");
    })
});
    
  });
