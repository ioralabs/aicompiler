// src/commands/initCommand.js

const fileService = require('../services/fileService');

async function initCommand() {
    console.log('Initialization...');

    const projectStructure = fileService.scanProject();
    console.log('Project structure:', JSON.stringify(projectStructure, null, 2));

    // You can send the project structure to OpenAI here or store it for later use.
}

module.exports = initCommand;
