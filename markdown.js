// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenses = {
    MIT: {
      badge: "MIT-green",
      notice: "This application is covered under the MIT license.",
    },
    Apache: {
      badge: "Apache-blue",
      notice: "This application is covered under the Apache license.",
    },
    GPL: {
      badge: "GPL-red",
      notice: "This application is covered under the GPL license.",
    },
    BSD: {
      badge: "BSD-yellow",
      notice: "This application is covered under the BSD license.",
    },
    None: {
      badge: "",
      notice: "",
    },
  };

  const selectedLicense = licenses[license];

  if (selectedLicense) {
    const licenseBadge = selectedLicense.badge
      ? `![License](https://img.shields.io/badge/License-${selectedLicense.badge}.svg)`
      : "";
    const licenseNotice = selectedLicense.notice;
    return `## License
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
* [Usage](#usage)
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
