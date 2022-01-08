// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //destructure readme data
  //create template for markdown readme file
  return `# ${data.title}

    ## Description:
    ${data.description}

    ## Progamming Languages used
    ${data.techlanguages}

    ## Challenges:
    ${data.challenges}

    ## Future Features:
    ${data.futurefeatures}

    ## Screenshot of working app
    <img alt="application in action" src ="${data.link}">

    ## Collaborators & Team Members:
    ${data.credits}

    ## License: 
    ${data.license}
    `;
};

module.exports = generateMarkdown;
