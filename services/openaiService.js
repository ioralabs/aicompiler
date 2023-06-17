// src/services/openaiService.js

const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

module.exports = {
    createChatCompletion: (messages) => {
        return openai.createChatCompletion({
            model: "gpt-4",
            messages: messages,
        });
    }
};
