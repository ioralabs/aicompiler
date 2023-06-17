// src/commands/askCommand.js

const openaiService = require('../services/openaiService');
const fileService = require('../services/fileService');

async function askCommand(userStory) {
    console.log('Asking user story...');

    // Get the current project structure.
    const projectStructure = fileService.scanProject();

    // You may want to format the project structure and user story into a single message here.

    // Send the user story and project structure to OpenAI.
    const response = await openaiService.createChatCompletion([/* messages here */]);

    console.log('OpenAI response:', response.choices[0].message.content);
}

module.exports = askCommand;
