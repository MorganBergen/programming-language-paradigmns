

// this will be the main entry point for the application
const {writeFile} = require("fs");

// writeFile is a function that takes a file name, a string, and a callback
writeFile("graffiti.txt", "I promise the Node was here", err => {
	
	// if there is an error, throw it
	if (err) console.log(`Failed to write file: ${err}`);

	// otherwise, log success
	else console.log("File written");
});

const {readFile} = require("fs").promises;

// readFile returns a promise that resolves to the contents of the file
readFile("graffiti.txt", "utf8").then(text => console.log("The file contains:", text));





