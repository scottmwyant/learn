<p align="left"><img src="https://user-images.githubusercontent.com/29161635/96948663-2dccd700-14b4-11eb-9d41-af5a17a41f4a.png" width="100px" height="100x"></p>

# Powershell

Windows Powershell is an evolution of the classic windows shell, *cmd.exe*.  The big advantages of powershell over CMD is that powershell supports use of the .NET framework and object oriented scripting.

## Official Resources

- **[PowerShell Documentation](https://docs.microsoft.com/en-us/powershell/?view=powershell-6)**

## Gists

- [Find-File.ps1](https://gist.github.com/scottmwyant/3e39a9b36ba400b99e1da325d1dab596)

## Examples

The examples below are discussed in [Microsoft PowerShell for Beginners - Video 1](https://www.youtube.com/watch?v=IHrGresKu2w&t=1328s)

```

# See help on a cmdlet
Get-Help Get-Service

# Show exapmles of how to use a cmdlet
Get-Help Get-Service -Examples

# Show help in the browser
Get-Help Get-Service -online

# List all commands
Get-Command

# List all commands that have a noun starting with 's'
Get-Command -noun s*

# List all commands that have a noun of 'service'
Get-Command -noun service


```
