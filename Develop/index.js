// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //writeFile method
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the name of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please type a brief description of your project.",
    name: "description",
  },
  {
    type: "input",
    message: "Please type the installation instructions for your project.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide instructions and examples for usage.",
    name: "usage",
  },
  {
    type: "input",
    message: "What message would you like to include for contributing?",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please provide how to test your project",
    name: "tests",
  },
  {
    type: "list",
    message: "What license would you like to use?",
    choices: ["MIT", "GPLv3", "Apache", "NONE"],
    name: "license",
  },
  {
    type: "input",
    message: "What is your GitHub username?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  //path - join method
  fs.writeFile("README.md", data, (err) => {
    err ? console.log(err) : console.log("README file has been created");
  });
}

// TODO: Create a function to initialize app
function init() {
  //user will see the first question
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", generateMarkdown(data));
  });
}

// Function call to initialize app
init();
