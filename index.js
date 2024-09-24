// TODO: Include packages needed for this application
import fs from "fs"
import inquirer from "inquirer";
import generateMarkdown from "./utils/generateMarkdown.js";
import Choices from "inquirer/lib/objects/choices.js";

/*
    Done: "Title",
    Done: "Description",
    Done: "Table of Contents",
    Done: "Installation",
    Done: "Usage",
    Done: "License",
    Done: "Contributing",
    "Tests",
    "Questions"
*/



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "README Title:",
        name: "title"
    },
    {
        type: "input",
        message: "Project Description:",
        name: "description"
    },
    {
        type: "input",
        message: "Installation Prerequisites:",
        name: "installPrerequisites"
    },
    {
        type: "input",
        message: "Installation Steps*:",
        name: "installation"
    },
    {
        type: "input",
        message: "Usage Steps*:",
        name: "usage"
    },
    {
        type: "list",
        message: "Which license do you choose?",
        name: "license",
        choices: [
            "none",
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err):console.log("File Created")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile("New_README.md", generateMarkdown(response))
        })
}

// Function call to initialize app
init();
