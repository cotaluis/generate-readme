class MarkDown {
    static generateReadMe(answeres) {
        return `
        # ${answeres.title}

        ## Table of Contents
        - [Description](#Description)
        - [Usage](#Usage)
        _ [Contributing](#Contributing)
        - [Installation](#Installation)
        - [Questions](#Questions)
        - [License](#License)

        ## Description
        ${answeres.description}

        ## Usage
        ${answeres.usage}

        ## Contributing
        ${answeres.contributing}

        ## Installation
        ${answeres.installation}

        ## Questions
        ${answeres.questions}

        ## License
        ${answeres.license}
        `
    }
}

module.exports = MarkDown;


