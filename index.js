var inquirer = require("inquirer");
const fs = require('fs');
const axios = require("axios");
const generateMarkdown = require("./utils/generateMarkdown");
//const { clear } = require("console");


// array of questions for user
const questions = [
    {
        message: "what is your GitHub username?",
        name: "github",
        type: "input"
    },
    {
        message: "what is your email address?",
        name: "email",
        type: "input"
    },
    {
        message: "what would you like the title to be?",
        name: "title",
        type: "input"
    },
    {
        message: "provide a brief description",
        name: "description",
        type: "input"
    },
    {
        message: "Any notes for the installation of this project?",
        name: "installation",
        type: "input"
    },
    {
        message: "What is the usage?",
        name: "usage",
        type: "input"
    },
    {
        message: "Please select a licence",
        name: "license",
        type: "checkbox",
        choices: [
            "Apache",
            "MIT",
            "BSD",
            "GPL"
        ]
    },
    {
        message: "Who were the contributors on this project?",
        name: "contributors",
        type: "input"
    },
    {
        message: "Are there any tests that you had to run?",
        name: "test",
        type: "input"
    },
    {
        message: "Do you have any questions about the project?",
        name: "questions",
        type: "input"
    }




];
console.log(questions);

// function to write README file
function writeToFile(fileName, data) {

    //var fileName = data.name.toLowerCase().split(' ').join('') + "README.md";

    fs.writeFile(fileName, data, (err) => {

        if (err) {
            return console.log(err);
        }

        console.log("successful README!");
    })

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then ((answers) => {
        const data = generateMarkdown(answers);

        console.log(answers);
        writeToFile("README.md", data)
    })
}

// function call to initialize program
init();
