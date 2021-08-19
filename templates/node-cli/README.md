# node-cli
Template for a node CLI app

## Steps taken to produce this template

1. Run `npm init -y`
2. Add `./bin/cli.js`
3. Update `package.json`
4. Run `yarn add yargs`

## Testing the application

One way to test the app would be to run `npm install --global` from the package directory, however, you would need to uninstall and re-install to see changes as you develop the app.  While in development, it makes more sense to use `npm link`, which creates a symlink in the global folder to this package folder. Use `npm unlink` to remove the symlink.


## References

- [Build a CLI with NodeJS](https://dev.to/rushankhan1/build-a-cli-with-node-js-4jbi)
- [npm link](https://docs.npmjs.com/cli/v7/commands/npm-link)
- [yargs](https://yargs.js.org/)


## Glossary

|Term| Definition|
|---|---|
| argv | We see this often in the `yargs` api and in node's `process.argv`.  This is referring to the 'argument vector' that is passed via command line.  Reference: [A Short Explaination of ARGV](https://flatironschool.com/blog/a-short-explanation-of-argv). |
