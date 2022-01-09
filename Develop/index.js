// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [title, description, tableOfContents, installation, usage, license, contributions, tests, questions];

inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title?'
    },
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
