<img class="logo" src="https://user-images.githubusercontent.com/29161635/96948599-0d9d1800-14b4-11eb-86ab-d7773eb713a3.png" width="100px" height="100px">

# NodeJS

Node JS is a JavaScript runtime that exists outside of a web browser.  Traditionally, JavaScript is loaded into a browser as part of a webpage and each browser has it's own JavaScript engine which executes the code.  Node is a stand-alone JavaScript engine; the idea is to be able to execute JavaScript code without a web browser.  The primary use case is for back-end web.  Using the Node runtime, developers can use JavaScript to handle requests on the server.

## Official resources

- https://nodejs.org/en/
- https://nodejs.org/en/download/
- https://nodejs.org/en/docs/

## Third party resources

- [How to build a command line tool in NodeJS](https://blog.bitsrc.io/how-to-build-a-command-line-cli-tool-in-nodejs-b8072b291f81)

## Getting started

Developers interact with the Node runtime through the console.  All commands will start with `node`.  The command line interface includes familiar options such as `node --version` and `node --help`.

Create a new file named *test.js*, this will be the JavaScript file that node executes.  Start with a single line of JavaScript in the test file: `console.log("Hello World");`

Open a console window in the directory with your test file.  Run the command:

`node test.js`

You should see *Hello World* output to the console window.
