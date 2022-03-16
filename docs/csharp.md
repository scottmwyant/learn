<img class="logo" src="https://user-images.githubusercontent.com/29161635/96948462-b5feac80-14b3-11eb-9c68-27c574f46037.png" width="100px" height="100px">

# C#

Perhaps the most popular language for working with Microsoft's [.NET Framework](https://dotnet.microsoft.com/learn/dotnet/what-is-dotnet-framework), C# supports object oriented programming, strong typing, and polymorphism.

## Official resources

- [Microsoft C# Guide](https://docs.microsoft.com/en-us/dotnet/csharp/)

## Third party resources

**Podcasts**

- [Coding Blocks Podcast](https://www.codingblocks.net/)

**Books**

- [C# 7.0 in a Nutshell: The Definitive Reference, 1st Edition by Joseph and Ben Albahari](https://www.amazon.com/C-7-0-Nutshell-Definitive-Reference-ebook/dp/B076DMK61S/ref=sr_1_1?keywords=c%23+albahari&qid=1562900213&s=gateway&sr=8-1)

- [Design Patterns: Elements of Reusable Object-Oriented Software (Addison-Wesley Professional Computing Series) 1st Edition](https://www.amazon.com/Design-Patterns-Object-Oriented-Addison-Wesley-Professional-ebook/dp/B000SEIBB8)

- [Clean Code: A Handbook of Agile Software Craftsmanship 1st Edition](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)

- [Clean Architecture: A Craftsman's Guide to Software Structure and Design (Robert C. Martin Series) 1st Edition](https://www.amazon.com/Clean-Architecture-Craftsmans-Software-Structure/dp/0134494164/ref=pd_lpo_sbs_14_t_0?_encoding=UTF8&psc=1&refRID=1KTFDPMH4T7FJSD7ECD2)

## Compiling source code

C# is compiled into intermediate language (known as ["IL" or "MSIL"](https://en.wikipedia.org/wiki/Common_Intermediate_Language)).  Compilation is one step in the build process.  .NET projects are built with MSBUILD, which is typically called by an IDE like Visual Studio, but it can be used directly from the command line.  In modern .NET projects (aka .Net Core, .NET5 and up) the dotnet cli wraps MSBUILD.  Use commands like `dotnet restore`, `dotnet clean`, `dotnet build`, and `dotnet publish`.  See https://docs.microsoft.com/en-us/dotnet/core/tools/.

It is possible to have MSBUILD in multiple places on your system; it comes bundled with installation of Visual Studio, with the C# extension for Visual Studio Code, and can also be installed seperately from the IDE with the [Build Tools](https://visualstudio.microsoft.com/downloads/?q=build+tools) download.

The [C# Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp) will look for MSBUILD in the usual places as the extension starts.  Looking at the extension's log output can give you some idea of where you might find it on your system (check the Output pane for the Omnisharp log).

Below is a sample from the Omnisharp log.  The first line references MSBUILD put in place with the 'Build Tools' installer mentioned above.  The second line is showing an instance that's associated with a VS Code extension. Note that these are two seperate versions; using an unexpected version can be problematic.

```
Visual Studio Build Tools 2019 16.0.28803.916 16.0.462 -
"C:\Program Files (x86)\Microsoft Visual Studio\2019\BuildTools\MSBuild\Current\Bin"

StandAlone 17.1.0 -
"C:\Users\user\.vscode\extensions\ms-dotnettools.csharp-1.24.1\.omnisharp\1.38.1\.msbuild\Current\Bin"
```


## Building in VS Code

Configure a build task in `.vscode/tasks.json`.  Here's an example:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "dotnet publish",
      "type": "shell",
      "command": "dotnet publish -c Release -r win-x64 --no-self-contained -o dist src",
      "group": {
        "isDefault": true,
        "kind": "build"
      },
    }
  ]
}

```

## Frequently used options for MSBUILD

Traditionally, MSBUILD is configured in the `.csproj` file:

```
<PropertyGroup>
    <DebugType>None</DebugType>
    <PublishSingleFile>true</PublishSingleFile>
</PropertyGroup>
```
Options can also be passed through the dotnet cli with the `-p:<key>=<value>` snytax:

`-p:DebugType=None`

Suppress output of .pdb files, which are used for debugging.  See https://stackoverflow.com/q/5457095.

`-p:PublishSingleFile=true`

Specifies single-file publishing.  Requires either `--self-contained` or `--no-self-contained`, along with a runtime identifier, ex. `-r win-x64`.  See [docs.microsoft.com](https://docs.microsoft.com/en-us/dotnet/core/deploying/single-file/overview#publish-a-single-file-app---sample-project-file).
