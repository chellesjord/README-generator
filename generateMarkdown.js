// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
  if (license === "GNU AGPLv3") {
    return "https://img.shields.io/badge/License-GNU%20AGPLv3-blue"
  } else if (license === "GNU GPLv3") {
    return "https://img.shields.io/badge/License-GNU%20GPLv3-blue"
  } else if (license === "GNU LGPLv3") {
    return "https://img.shields.io/badge/License-GNU%20LGPLv3-blue"
  } else if (license === "Mozilla Public License 2.0") {
    return "https://img.shields.io/badge/License-Mozilla%20Public%202.0-blue"
  } else if (license === "Apache License 2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue"
  } else if (license === "MIT License") {
    return "https://img.shields.io/badge/License-MIT-blue"
  } else if (license === "Boost Software License 1.0") {
    return "https://img.shields.io/badge/License-Boost%201.0-blue"
  } else if (license === "The Unlicense") {
    return "https://img.shields.io/badge/License-Unlicensed-lightgrey"
  } else {
    return "NA"
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "GNU AGPLv3") {
    return "https://choosealicense.com/licenses/agpl-3.0/#"
  } else if (license === "GNU GPLv3") {
    return "https://choosealicense.com/licenses/gpl-3.0/"
  } else if (license === "GNU LGPLv3") {
    return "https://choosealicense.com/licenses/lgpl-3.0/"
  } else if (license === "Mozilla Public License 2.0") {
    return "https://choosealicense.com/licenses/mpl-2.0/"
  } else if (license === "Apache License 2.0") {
    return "https://choosealicense.com/licenses/apache-2.0/"
  } else if (license === "MIT License") {
    return "https://choosealicense.com/licenses/mit/"
  } else if (license === "Boost Software License 1.0") {
    return "https://choosealicense.com/licenses/bsl-1.0/"
  } else if (license === "The Unlicense") {
    return "https://choosealicense.com/licenses/unlicense/"
  }
  else {
    "NA"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "No license") {
    return ""
  } else {
    return `
## License: 

![badge](${renderLicenseBadge(license)}) 

[Click here for license information](${renderLicenseLink(license)})`
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //destructure readme data
  //create template for markdown readme file
  return `
  # ${data.title}

  ## Description:
  ${data.description}

  ## Table of Contents:

  * [Installation](#Installation)
  * [Usage](#Usage)
  * [Credits](#Credits)
  * [Liscense](#Liscense)


  ## Installation
  ${data.techlanguages} 

  ${data.installation}

  ## Usage
  ![application in action](${data.link})

  ## Credits:
  ${data.credits}

  ${renderLicenseSection(data.license)}
  `;
};

module.exports = generateMarkdown;
