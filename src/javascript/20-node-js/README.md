#  node js

## background

asynchronous programming allows the program to send and receive data from and to multiple devices at the same time without complicated thread management and synchronization.

## the node command

##  modules

##  installing with npm

`npm` is a javascript package manager for the node platform, it puts modules in placce so that node can find them, and manages dependency conflicts intelligently.  

it is extremely configurable to support a variety of use cases.  most commonly, however you use it to publish, discover, install, and develop node programs.

calling `npm help` provides a full list of commands.

npm by default comes pre-configured to use npm's public registry at [registry.npmjs.org](https://registry.npmjs.org) 

you probably got `npm` because you want to install stuff.

the very first thing you will most likely want to run in any node program is `npm install` to install its dependencies.

run `npm install blerg` to install the latest version of `blerg` 

run `npm search` to show everything that's available in the public registry.

run `npm ls` to show everything you have currently installed.

##  package files

##  [package.json](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#homepage)

###  book introduction

create a `package.json` file in the root of your project or call `npm init` to create one.

it contains information about the project such as its name, version, and dependencies.

```json
{
    "author": "first name last name",
    "name": "project name",
    "description": "description of the project",
    "version": "version number",
    "main": "main.js",
    "dependencies": {
        "blerg": "1.0.0"
    },
    "license": "ISC",
}
```

when you run `npm install` without naming a package to install, npm will install the dependencies listed in `package.json`. 

when you install a specific package that is not already listed as a dependency, npm will add it to `package.json` and install it.

###  video introduction

`package.json` is npm's configuration file.  it is a json file that typically lives in the root directory of your package and holds various metadata relevant to that package.

`package.json` is a central place to configure and describe how to interact and run your package

`package.json` is primarily used in the cli to install, update, and run your package.




##  versions

##  the file system module

##  the http module

##  streams

##  a file server

##  summary

