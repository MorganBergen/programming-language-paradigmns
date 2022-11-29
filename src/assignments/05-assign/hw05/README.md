## assignment 5

author		Morgan Bergen
date		Mon Oct 31 11:50:09 CDT 2022
brief		assignment 5
file		readme instructions

## instructions

Using what you've learned about Node.js, write JavaScript code for an HTTP server that allows remote access to a file system.  

Use the http methods GET, PUT, and DELETE to read, write, and delete files on the server, respectively.

Then add support for the MKCOL method ("make collection"), which should create a directory by calling mkdir from the fs module.

MKCOL is not a widely used HTTP, but it does exist for the same purpose in the WebDAV standard, which specifies a set of conventions on top of HTTP that make it suitable for creating documents.

The server should include code to detect an invalid request and return a status code of 405 with the message "The method XXX is not supported"  here XXX is the invalid method requested.

feel free to use code you find on the Internet.  Just be sure to include comments that adequately describe the code.

Provide comments for the JavaScriot code that explain what each line of code is doing.

## rubric 

```
exceeds expectations
software is adequately commented ith prolongue comments, comments summarizing major blocks of code, and comments on every line.

adequate prolongued comments
- name of program contained in the file
- brief description of the program
- inputs (none, for a function, it would be parameters passed to it)
- ouput (browser window with 3 tabs and text
- author's full name
- creation date

adequate comments summarizing major blocks of code and comments on every line
- provide comments that explain hat each line of code is doing
- you may comment each line of code // or provide multi-line comment /* */ that explains hat a group of lines does.
- multi line comments should be detailed enough that it is clear what each line of code is doing.
```


