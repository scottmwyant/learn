<img class="logo" src="https://user-images.githubusercontent.com/29161635/96948787-6bc9fb00-14b4-11eb-989e-a299930c1cb6.png" width="100px" height="100px">

# VS Code Extensions

How to author a VS Code extension (.visx package).

## Official resources

- **[Extension Manifest (Package.json)](https://code.visualstudio.com/api/references/extension-manifest)**
- **[Help with package.json](https://code.visualstudio.com/docs/extensionAPI/extension-manifest)**
- **[Publishing Extensions](https://code.visualstudio.com/docs/extensions/publish-extension)**
- **[User Defined Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets)**
- **[Extension Points](https://code.visualstudio.com/docs/extensionAPI/extension-points)**
- **[Install from a .VISX](https://code.visualstudio.com/docs/editor/extension-gallery#_install-from-a-vsix)**
- **[Color Theme](https://code.visualstudio.com/api/extension-guides/color-theme)**


## Root Directory

### Package.json

The root directory of the extension contains a file named package.json.  This file defines what the extension does and what resources (other files) are used to "do it".  The package.json file will need to define a grammars file, a theme file, and a snippets file.  The grammars file will use [Oniguruma regular expressions](https://macromates.com/manual/en/regular_expressions) to define parts of the syntax of the language.  The theme file will then style the syntax.
## Visual Studio Code Extension CLI

Extensions are packaged and published using the *Visual Studio Code Extension Manager (VSCE)*.  This is a command-line tool built in NodeJS, and distributed throguh the Node Package Manager (NPM), just as any other NodeJS package. Verify that NodeJS and NPM are installed on your system by running `node --version` and `npm --version`.  Once that's in place, install the VSCE CLI: 

`npm install -g vsce`

### Commands for VSCE CLI

`vsce --version` - check version of vsce tool

`vsce package` - myExtension.vsix generated
  
`vsce publish` - <publisherID>.myExtension published to VS Code MarketPlace
  
 `vsce login <publisherID>` - login to a publisher with a new personal access token
 
 `vsce create-publisher <publisherID>` - create a new marketplace publisher

### Personal Access Token & Marketplace Publishers

You need a *Personal Access Token* to publish your extension to the marketplace.  The access token is used to login as marketplace publisher.  A publisher (think of this as a marketplace developer account) can be created with the command line tool by running `vsce create-publisher <publisher>`.  If a known publisher has already been created but the token expired, login with a new token by running `vsce login <publisher>`.

Access tokens have a maximum validity of 1 year for security purposes.  Get a PAT by creating a Azure DevOps account (formerly branded as Visual Studio Team Servics).  Click on your user icon and go to Security.  Add a personal access token.  Make sure to set the [Accounts] field to 'All accessible organizations'.  Click the 'Show all scopes' link and scroll to the permissions related to 'Marketplace'.  This token needs permission to *Acquire* and *Manage*.

Reference [VS Code: Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#vsce)


## 3rd Party References

regular expressions
- [RegEx101](https://regex101.com/)
- [Oniguruma regular expressions](https://macromates.com/manual/en/regular_expressions)

textmate grammars and themes
- [TextMate grammar definitions](https://macromates.com/manual/en/language_grammars)
- [Help on language grammars](https://benparizek.com/notebook/notes-on-how-to-create-a-language-grammar-and-custom-theme-for-a-textmate-bundle)
- [More help on textmate grammars](http://www.apeth.com/nonblog/stories/textmatebundle.html)
- [TextMate themes](https://macromates.com/manual/en/themes)
- [Someone's experience with language grammars](https://www.apeth.com/nonblog/stories/textmatebundle.html)
- [textMate schema](https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json)

other third party resources:
- [Example of a Hello World extension](https://code.visualstudio.com/docs/extensions/example-hello-world)

