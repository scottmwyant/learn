<p align="left"><img src="../img/logo_vscode.png" width="100px" height="100x"></p>

# Visual Studio Code

## Official Resources
- **[Home](https://code.visualstudio.com/)**
- **[Keyboard Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference)**
- **[CLI Options](https://code.visualstudio.com/docs/editor/command-line)**

## Extensions

**[TS Lint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)** - 
A Microsoft extension for linting TypeScript files.  Rules and linting options are configured at the root of the project in `tslint.json`.

## Sync Settings & Snippets

Use a file sync service like OneDrive or Dropbox to share settings and snippets across machines.

VS Code uses the following directories to load user settings and code snippets (note: the environment variable, %APPDATA%, will  typically resolve to C:\Users\\{user}\AppData\Roaming\):

- %APPDATA%\code\user\settings.json
- %APPDATA%\code\user\snippets

The idea here is to use symbolic links ("soft links" or "symlinks") to redirect from the default location to a locatoin in scope of the file sync service.  Use Windows Command Prompt ('Run as administrator' is required) to create symbolic links:

```
cd %APPDATA%\code\user
mklink settings.json c:\users\<user>\onedrive\...\settings.json
mklink /D snippets c:\users\<user>\onedrive\...\snippets
```

Note the `/D` option is used to set the link for snippets because we're linking to a directory, not a file.   The default behavior for `mklink` is to target a file.

Tested with Visual Studio Code 1.27.2 on September 16, 2018
