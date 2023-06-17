// src/utils/ignoreUtil.js

const fs = require('fs');
const ignore = require('ignore');

let ig;

function getIgnore() {
    if (!ig) {
        ig = ignore();
        if (fs.existsSync('.gitignore')) {
            ig.add(fs.readFileSync('.gitignore', 'utf8'));
        }
    }
    return ig;
}

module.exports = {
    getIgnore,
};
