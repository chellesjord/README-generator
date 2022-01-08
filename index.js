// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./generateMarkdown.js")

// TODO: Create an array of questions for user input
/**
 * 
 * @param {*} readMeUserData 
 * @returns 
 */
const promptUser = readMeUserData => {
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

/**
 * 
 * @param {*} readMeContent 
 * @returns 
 */
// TODO: Create a function to write README file
const generateReadME = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', markdown(fileContent), err => {
            //if there's an error, reject the Promis and send the error to the PRomise's `.catch()`
            if(err) {
                reject(err);
                //return out fo the function here to make sure the Promis doesn't accidentally execute resolve()
                return;
            }
            // if everything went correctly, resolve the Promise and sen the successful data to the `.then()`
            resolve({
                ok:true,
                message: 'File created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    // start promptUser to get information about the README from user
    promptUser()
    //then get the readMeUserData and send it to generateReadME() function
    .then(readMeUserData => {
        return generateReadME(readMeUserData);
    });
};

// Function call to initialize app
init();