const fs = require('fs');
const path = require('path');
// services/fileService.js

const ignoreUtil = require('../utils/ignoreUtil');

function scanProject() {
    const ig = ignoreUtil.getIgnore();
    return readDir('./', ig);
}

function readDir(rootDir, ig) {
    let structure = {};

    fs.readdirSync(rootDir, { withFileTypes: true }).forEach(dirent => {
        const fullPath = path.join(rootDir, dirent.name);
        if (ig.ignores(fullPath)) return;

        if (dirent.isDirectory()) {
            structure[dirent.name] = readDir(fullPath, ig);
        } else if (dirent.isFile()) {
            structure[dirent.name] = fs.readFileSync(fullPath, 'utf8');
        }
    });

    return structure;
}

module.exports = {
    scanProject,
};
