// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   if (license === "MIT") {
//     return //MIT link
//   } else if (license === "boost") {
//     return //boost link
//   } else (license === "unlicense" {
//     return //UNLISENSE link
//   }
// };

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let badge
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //grab license badge
  // grab license linked to badge
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //destructure readme data
  //create template for markdown readme file
  return `# ${data.title}

  ## Description:
  ${data.description}

  ##Table of Contents:
  Installation
  Usage
  Credits
  Liscense


  ## Installation
  ${data.techlanguages}
  ${data.installation}

  ## Usage
  <img alt="application in action" src ="${data.link}">

  ## Credits:
  ${data.credits}

  ## License: 
  ${data.license}
  `;
};

module.exports = generateMarkdown;
