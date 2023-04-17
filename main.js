const generateMarkdown = require("./markdown.js");
const inquirer = require("inquirer");
const fs = require("fs");

// the array of questions is passed to the inquirer.prompt method
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
   validate: (value) => {
      if (value.trim().length > 0) {
        // if the user doesn't enter a title, the prompt will repeat
        return true;
      } else {
        return "Please enter a title for your project.";
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of your project.",
    validate: (value) => {
      if (value.trim().length > 0) {
        // if the user doesn't enter a description, the prompt will repeat
        return true;
      } else {
        return "Please enter a description for your project.";
      }
    },
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter installation instructions for your project.",
  },
 {
    type: "input",
    name: "usage",
    message: "Please enter usage information for your project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter contribution guidelines for your project.",

 },
  {
    type: "input",
    name: "test",
    message: "Please enter test instructions for your project.",
  },
  {
    type: "input",
    name: "email",
    message: "Please enter your email address.",
    validate: (value) => {
      const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // returns true if valid email, else returns error message

      return valid ? true : "Please enter a valid email address.";
    },
  },
  {
    type: "input",
    name: "github",
    message: "Please enter your GitHub username.", // if the user doesn't enter a GitHub username, the prompt will repeat
    validate: (value) => {
      if (value.trim().length > 0) {
        return true;
      } else {
        return "Please enter a GitHub username.";
      }
    },
  },
];

// TODO: Create a function to write README file
// the write file function takes two parameters: the file name and the data to write to the file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    // if there's an error, log it, otherwise log a success message

    err
      ? console.error(err)
      : console.log("You've successfully created a README.md file");
  });
}

// TODO: Create a function to initialize app
// the init function is called to initialize the app by calling the inquirer.prompt method
function init() {
  inquirer
    .prompt(questions)
    .then((data) => {
      const markdownContent = generateMarkdown(data);
      writeToFile("README.md", markdownContent);
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
