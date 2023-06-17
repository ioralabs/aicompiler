#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ignore = require('ignore');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const initCommand = require('./commands/initCommand');

// Parse command-line arguments
const argv = yargs(hideBin(process.argv)).argv;

if (argv._[0] === 'init') {
  // Perform initialization...
  initCommand();
} else if (argv._[0] === 'ask') {
  // Ask a new user story solution...
  console.log('Ask user story...');
} else {
  console.error('Unknown command. Please use "init" or "ask"');
}

// Recursively read directory, excluding files that match .gitignore
function readDir(rootDir, ig) {
  fs.readdirSync(rootDir, { withFileTypes: true }).forEach(dirent => {
    const fullPath = path.join(rootDir, dirent.name);
    if (ig.ignores(fullPath)) return;
    if (dirent.isDirectory()) {
      readDir(fullPath, ig);
    } else if (dirent.isFile()) {
      console.log(fullPath);
      const contents = fs.readFileSync(fullPath, 'utf8');
      console.log(contents);
    }
  });
}

// Parse .gitignore
const ig = ignore();
ig.add(fs.readFileSync('.gitignore', 'utf8'));

readDir('./', ig);
