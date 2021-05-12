// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your project name?",
    name: "title",
  },
  {
    type: "input",
    message: "Write a description of your project.",
    name: "description",
  },
  {
    type: "list",
    message: "What license would you like to use?",
    choices: ["MIT", "ISC", "GPL"],
    name: "lisence",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  //user will see the first question
  inquirer.prompt(questions).then((data) => {
    //figure out how to take those responses from the user and write them to a file
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
