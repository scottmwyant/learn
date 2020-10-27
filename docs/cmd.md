<img class="logo" src="https://user-images.githubusercontent.com/29161635/97065025-71891480-1578-11eb-9eff-bd68b852a3a5.png" width="100px" height="100px">

# cmd.exe

 **cmd.exe** is a [command-line shell](https://en.wikipedia.org/wiki/Shell_(computing)#Command-line_shells) built into Windows.  This application is built upon the Win32 API.  It is one of two command-line shells that ship with Windows.  [PowerShell](./powershell.md), which is built upon the [.NET Framework](https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet-framework) is the modern alternative to cmd.exe.

## Official resources

 - [Windows commands](https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/windows-commands)

## Third party resources

- [SS64.com - Command line reference - Database and OS scripting](https://ss64.com/)

- [DOS Command Index](http://web.csulb.edu/~murdock/dosindex.html)

- [Escape characters for batch files](https://www.robvanderwoude.com/escapechars.php)

## Day 1

The prompt presented in *cmd.exe* shows a directory such as: `C:\users\user>`. The directory shown in the prompt is the *working directory*. Commands are executed against the working directory.

`.` is used to refer to the working directory

`..` is used to refer to the parent of the working directory

`.\folder` or just `folder` are used to refer to a folder within the working directory

`/` is used to set options for commands

`/?` is used to get help on any command, for example: `cd /?` or `dir /?`

`cls` - clear screen

`chdir <path>` -  change directory

`dir` - list items in the current directory

`mkdir <folder>` - make a new directory (create a new folder)

`ren <old> <new>` - rename a file (or folder?)

`type nul > <file>` - create a new empty file

`del <file>` - delete a file

`echo %environment_variable%` - show the value for an environment variable

`set <variable>=<string>` - set the value of a variable for the life of the active command prompt window.

