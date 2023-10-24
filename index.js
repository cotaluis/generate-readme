const fs = require ('fs');
const inquirer = require('inquirer');
const MarkDown = require('./lib/readmeGen');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Who contributed to your project?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'questions',
        message: 'What questions do you have about your project?',
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license do you use for your project?',
    }
]

function runQuery() {
    return inquirer.prompt(questions)
        .then((answers) => {
            const mark = MarkDown.generateReadMe(answers)
            console.log(mark)
            return answers
        })
        .catch((error) => {
            console.log(error)
        })
}

runQuery()
