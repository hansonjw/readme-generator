const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown, licenses} = require('./utils/generateMarkdown.js');


// array of questions for user...an array of question objects
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions for your project:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions on how to use your project:'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide information on how users can contribute to you project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which licenses are applicable for this application?',
        choices: Object.keys(licenses)
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide a link to your Github profile'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is an email address that users can contact you at?'
    },
];

// function to write README file
const writeToFile = (fileName, answersObj) => {
    
    // Call content generator function, module
    const fileContent = generateMarkdown(answersObj);
    
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
            reject(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
            }

            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            resolve({
            ok: true,
            message: 'File created!'
            });
        });
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(answers=>writeToFile('README.md', answers))
    .then(writeFileResponse => {
        console.log(writeFileResponse.message);
    })
    .catch(err => {
    console.log(err);
    })
};

// function call to initialize program
init();