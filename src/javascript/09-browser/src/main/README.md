# html

- html is the document format used for web pages
- an html document contains text, as well as tags, that give structure to the text, descring things such as links, paragraphs, and headings.
- the tags, rapped in angle brackets (< and >) provide 
- the other text is just plain text

```html
<!DOCTYPE html>
<html>
	<head>
		<meta charset="utf-8">
		<title>My home page</title>
	</head>
	<body>
		<h1>my home page</h1>
		<p>Hello, my name is Morgan Bergen and this is my homepage</p>
		<p>
		<a href="http://morganbergen.com">
		</p>
	</body>
</html>
```

### `<!DOCTYPE html>`

This line tells the browser to interpret the page as modern HTML, as opposed to other various past versions.

### `<head>...</head>`

HTML documents have a head which contains information _about_ the document.

### `<body>...<body>`

The body contain _the_ document itself.

### `<meta charset="utf-8">`

This tag uses utf-8 encoding, which is a way to encode Unicode text as binary data.

### `<title>my homepage</title>`

The title is what will be displayed on the browsers tab.

### `<h1>...</h1>`
headings go from h1 highest precedence to h9 lowest precedence typographically
```


• A "Hello, World!" program generally is a computer program that outputs or displays the message "Hello, World!".
• Such a program is very simple in most programming languages.
• It is often used to illustrate the basic syntax of a programming language.
• It is often the first program written by people learning to code a new language.
• It can also be used as a sanity test to make sure that computer software intended to compile or run source code is correctly installed, and that the operator understands how to use it.
• Write a “Hello World!” program in HTML.
• For full credit, include:
– Tag that tells the browser to interpret the page as modern HTML. – Header and body.
– Tag that tells the browser that the character set is “utf-8”.
– Tag that will display “Hello World!” on the browser tab.
– Tags that will display “Hello World!” in the browser window.
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
<h7>...</h7>
<h8>...</h8>
<h9>...</h9>
```

## tags

Tags come in several forms
An element such as the `<body></body>`, `<p></p>`, is started by an opening tag and a closing tag.  

However some tags do not enclose anything and do not need to be closed, such as `a href="http://morganbergen.com">` 

Some opening tags, such as the one from this link `<a>` contain extra information in the form of name="value" pairs

name="value" pairs are called attributes.

## `<a href="https://morganbergen.com"> here </a>`

### tag
`<a ...> ... </a>`

### attribute 
`href="https://morganbergen.com"`

In this case the destination of the link is indicated with the `href` where href stands for "hypertext reference".

## HTML and JavaScript

The context of this course and one of the most important HTML tag is `<script>`

This tag allos us to include a pice of javaScript in a document.  Such a script will run as soon as its script tag is encountered while the browser reads the html.  This page will pop up a dialog when opened - the alert function resembles prompt, in that it pops up a little window, but only shows a message without asking for input.  A script tag must always be closed with `</script>` even if it refers to a script file and doesnt contain any code.  If you forget this, the rest o fthe page will be interpreted as part of the script.

```
<h1>testing alert</h1>
<script>alert("hello");</script>
```

https://www.coursera.org/learn/javascript-basics/lecture/DE9W8/dot-syntax-and-methods

## `src="code/hello.js"`

Including large programs directly in HTML documents is often impractical.  Thus the `<script>` tag can be given an arc attribute to fetch a script file (a text file containing a JavaScript program) from a url

```HTML
<h1>testing alert</h1>
<script src="code/hello.js"></script>
```

The `code/hello.js` file contains the following,

```JavaScript
alert("hello");
```

When an html page references other urls as part of itself web browsers will retrieve them immediately and include them in the page.

Some attributes can also conatin a JavaScript program.  The `<button>` tag shown next (which shows up as a button) has an onclick attribute.  The attribute's value will be run whenever the button is clicked.  Use single quptes for the string in the onclick attribute... because double quotes is already used to quote the whole attribute.
```HTML
<button onclick="alert('Boom!');">do not press</button>
```
## summary

All modern web applications are based on Client-Server Architecture.  The **client** program runs on one computer, while the **server** program runs on another computer.  The client and server programs communicate over a computer network.

Computer networks are composed of two or more computers with connection between them to send data back and forth over that connection.  The **network protocol** describes the style of communication over that connection.  One protocol is HTTP (Hypertext Transfer Protocol `HTTP`) this is a protocol for retrieving named resources (chunks of information, such as webpages or pictures).  Transmission Control Protocol (TCP) is a protocol to ensure that you can treat a network just like writing bitstreams to a device, where you can put bits into it and have them arrive at the correct destination and in the correct order.  The **world wide web** `www` is a set of protocols and formats that allow us to visit webpages in each and ever browser.  A browser in this sense is just a fancy compiler.  Each document on the web is named by a `URL` **uniform resource locator**.  

Machines that are connected to the internet get an IP address, which is a scalar quantity that can be used to send messages to that machine.  `HTML` Hypertext markup language is the document format for web pages.  HTML tags, are wrapped up in angle brackets `<` `>`, and provide information about the structure of the document.  **JavaScript** can be embedded in html documents using the `<script>`.
