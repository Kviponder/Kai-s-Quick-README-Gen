// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    const licenseBadge = `![License](https://img.shields.io/badge/License-${license}-brightgreen.svg)`;
    const licenseNotice = `This application is covered under the ${license} license.`;
    return `
## License
${licenseBadge}
${licenseNotice}
`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

    ${data.description}

${renderLicenseSection(data.license)}

## Table of Contents
* [Installation](#installation)
* Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
    ${data.installation}

## Usage
    ${data.usage}

## Contributing
    ${data.contribution}

## Tests
    ${data.test}

## Questions
    If you have any questions, please contact me at ${data.email}.
    You can find more of my work at [${data.github}](https://github/com/${
    data.github
  }).
  `;
}

module.exports = generateMarkdown;
