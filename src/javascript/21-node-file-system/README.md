# JavaScript and Node.js

## [`Node.js`](https://nodejs.org)

So far, we have used the JavaScript language in a single enviroment... the browser.  Now we will look at Node.js.  Node.js is a program that allows you to apply your JavaScript skills outside of the browser.  With it you can build anything from small command line tools to HTTP servers that power dynamic websites.  The aim of this course in general is to teach the main concepts that Node.js uses and to give you enough information to write useful programs for it.  If you want to follow along and run the code in the lecture and in the book, you'll need to install Node.js version 10.1 or higher.  

You can find the documentation for Node.js here

[JavaScript Documentation](https://tc39.es/ecma262/)

[Node.js Documentation](https://nodejs.org)

## Asynchronous Programming

One of the more difficult problems with writing systems that communicate over the network is managing input and outputs.  
- That is, the reading and writing data to and from the network and hard drive.
- Moving data around takes time 
- Scheduling it cleverly can make a big difference in how quickly a system responds to the user or to network requests.  

In such programs, asynchronous programming is often helpful.

- It allows the program to send and receive data from and to multiple devices at the same time

- Without complicated thread management and synchronization


## In-Class Problem

1.  What is the difference between "node", "Node", "Node.js"

- `node` is the interpreter program for JavaScript
- `Node` is the system 
- `Node.js`  

2.  What is the CommonJS module system?
3.  What is the JavaScript module?
4.  What is the JavaScript package?
5.  What is the Node Package Manager (NPM)?
6.  What is the `package.json`?
7.  Let's set up a small project consisting two files?

    1.  The first one, called `main2.js`, defines a script that can be called from the command line to each a string.
    
    2.  The second file, `echo.js` defines a module for echoing strings.  It can be used both by the main2 command line tool (see below) and by other scripts.
    
    3.  Write a package.json for echo.js:

    ```CLI
    JavaScript
    $ node main2.js JavaScript
    ```

