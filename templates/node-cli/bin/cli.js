#! /usr/bin/env node

// When executing a javascript file with Node, the "argument vector" can be accessed
// using `process.argv`.  This property is rather primitive though, it's an array of
// strings.  The `yargs` package provides methods to parse the array into a more
// consumable form.  See the example below:

// The first element of the `process.argv` array shows the path to the Node executable 
const node = process.argv[0];
console.log(node);

// The second element is the absolute path to the file that is being run
const script = process.argv[1];
console.log(script);

// The remaining elements in the array are the arguments passed from the command-line
cliArgs = process.argv.slice(2);
console.log(cliArgs);

// The `yargs` package is used to coerce this input to a friendlier format,
// the flags are keys in the object, the value for the key is what follows the flag
//   - There are two additional keys on the object: `_` and `$0`.  The `_` key is an
//     array of values that don't have an associated flag from the CLI input and the
//     `$0` key is the file that is the script that is being executed (usually a js
//     file in the global node_modules folder). 
const yargs = require('yargs/yargs');
const obj = yargs(cliArgs).argv ;
console.log(obj);
