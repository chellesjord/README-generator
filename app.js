// const fs = require("fs");
const inquirer = require("inquirer");

const promptUser = readmeData => {
    console.log(`
    ===============
    New ReadMe File
    ===============`);

    // //if there's not "projects" array property, create one
    // if (!readmeData.projects) {
    //     readmeData.projects = [];
    // }
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Project Title:",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a response");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "What does your project do?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a response");
                    return false;
                }
            }
        },
        {
            type: "checkbox",
            name: "techlanguages",
            message: "What did you build this project with? (Check all that apply)",
            choices: ["JavaScript", "HTML", "CSS", "ES6", "jQuery", "Bootstrap", "Node"]
        },
        {
            type: "input",
            name: "challenges",
            message: "What are some challenges you faced?"
        },
        {
            type: "input",
            name: "futurefeatures",
            message: "What are some features you hope to implement in the future?"
        },
        {
            type: "input",
            name: "link",
            message: "Enter a screenshot link of the working appplication:"
        },
        {
            type: "input",
            name: "credits",
            message: "If you worked on this project with a team, list your collaborators/team members:"
        },
        {
            type: "input",
            name: "license",
            message: "Add a license. If you need help choosing a license, check out https://choosealicense.com"
        },
    ])
};

promptUser()
    .then(readmeData => {
        console.log(readmeData);
    });