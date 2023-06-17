# AICompiler

AICompiler is a command-line interface (CLI) tool that interacts with OpenAI's GPT-4 for code generation. It scans project directories, respects .gitignore rules, and sends the structure and content of the project to GPT-4 to generate code based on user story inputs. It can be used for continuous monitoring and requesting solutions for new user stories.

## Installation

You can install AICompiler using npm:

```bash
npm install -g aicompiler
```

This will install AICompiler globally on your system so that it can be run from any directory.

## Usage
### Initialization
To initialize the tool and scan your project, run:

```bash
aicompiler init
```

This command will scan the current directory and subdirectories, excluding any files or directories listed in your .gitignore file. The resulting project structure and file contents will be sent to OpenAI.

### Asking for a Solution
To ask GPT-4 for a solution to a user story, run:
```bash
aicompiler ask "Your user story here"
```

This command will send your user story along with the current project structure and file contents to OpenAI. It will print out the solution provided by GPT-4.

## Environment Variables
AICompiler requires the following environment variable:

- OPENAI_API_KEY: Your OpenAI API key. This is used to authenticate with OpenAI's API.

You can set this in a .env file in your project directory. This file is ignored by AICompiler.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
AICompiler is licensed under the MIT license.

