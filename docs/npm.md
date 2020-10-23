<p align="left"><img src="https://user-images.githubusercontent.com/29161635/96948630-1e4d8e00-14b4-11eb-8af7-b812b1efc747.png" width="100px" height="100x"></p>

# Node Package Manager (NPM)

Developers can share NodeJS packages through the *Node Package Manager (NPM)*.  You will interact with NPM through the command line, just as with NodeJS.

## Official Resources

- **[NPM Home](https://www.npmjs.com/)**
- **[CLI Documentation](https://docs.npmjs.com/cli-documentation/)**
- **[Creating Package.json](https://docs.npmjs.com/creating-a-package-json-file)**
- **[NPM Folders](https://docs.npmjs.com/files/folders)**

## Command line interface

`npm -v | npm --version`  Checks your version of npm.

`npm <command> -h`  Use this option to get help on any command.

### Installing packages

`npm install -g <package>` Installs a package to a common location; by default, the user's %APPDATA% folder on a Windows machine.

`npm install` Run this at the root of a repository that contains a valid *package.json* file and npm will install the project's dependancies into a *node_modules* folder within the current working directory.

`npm install [--global] <package>@latest` Use this format to install the latest version of a package.

`npm udpate [--global] [package]` Use without specifying a package to update all packages.

### Configuration

`npm config list` Use to see the hierarchy of configuration values.

`npm config get prefix` Use to see the location used for global installs.
