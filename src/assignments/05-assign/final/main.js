/*
 * @author	Morgan Bergen
 * @date	Mon Oct 31 2022
 * @brief	HTTP server that allows remote access to a file system
 * @file	main.js
 */


// import http module
const {createServer} = require('http');

// create a null object in order to store the methods for the server
const methods = Object.create(null);

createServer((request, response) => {
	// get the method from the request
	let handler = methods[request.method] || notAllowed;

	// call handler with the request
	handler(request).catch(error => {
		
		// if there is an error, return a 500 error
		if(error.status != null) return error;
		
		// if there is no error, return a 500 error
		return {body: String(error), status: 500};

	// call the respond method with the response
	}).then(({body, status = 200, type = 'text/plain'}) => {
			response.writeHead(status, {'Content-Type': type});
			if(body && body.pipe) body.pipe(response);
			else response.end(body);
		});
	
// listen on port 8000 for requests
}).listen(8000);


// this will be called when a request is made to the server
async function notAllowed(request) {
	return {
		status: 405,
		
		// method should show not allowed if it is not allowed is called
		body: `Method ${request.method} not allowed.`
	};
}

// this will parse the url
var {parse} = require('url');

// resolve the path for the file system
const {resolve, sep} = require('path');

/*
 * @pre		url
 * @return 	path of the url
 */
function urlPath(url) {
	
	// parse the url
	let {pathname} = parse(url);

	// let the path be resolved by removing the first character
	// and replacing the rest of the slashes with the path separator
	let path = resolve(decodeURIComponent(pathname).slice(1));
	if(path != baseDirectory && !path.startsWith(baseDirectory + sep)) {
		// if the path is not the base directory and does not start with the base directory
		throw {status: 403, body: 'Forbidden'};
	}
	return path;
}

// import the file system module
const {createReadStream} = require('fs');

// fs promises module for async functions
/*
 * /Users/owner/Documents/2022fall/eecs368/programming-language-paradigms/src/assignments/05-assign/final/main.js:78
const {stat, readdir} require('fs').promises;
      ^^^^^^^^^^^^^^^

SyntaxError: Missing initializer in destructuring declaration
    at Object.compileFunction (node:vm:352:18)
    at wrapSafe (node:internal/modules/cjs/loader:1027:15)
    at Module._compile (node:internal/modules/cjs/loader:1063:27)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1153:10)
    at Module.load (node:internal/modules/cjs/loader:975:32)
    at Function.Module._load (node:internal/modules/cjs/loader:822:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:77:12)
    at node:internal/main/run_main_module:17:47
*/

//const {stat, readdir} require('fs').promises;

// import the mime module in order to obtain the mime type of file
const mime = require('mime');

methods.GET = async function(request) {
	
	// call urlpath function to get the path
	let path = urlPath(request.url);
	
	// stats will be the stats of the file
	let stats

	// create a stats variable to store the stats of the file
	try {
		stats = await stat(path);
	} catch(error) {
		// if there is an error, return a 500 error
		if (error.code != 'ENOET') throw error;
		else return {status: 404, body: 'File not found'};
	}

	// if the file is a directory, return the directory
	if (stats.isDirectory()) {

		// get the files in the directory
		return {body: (await readdir(path)).join("\n")}; 
  	} else {
    
		return {body: createReadStream(path),
            		type: mime.getType(path)}; 
  	}
};

// takes rmdir from fs promises module
const {rmdir, unlink} = require('fs').promises;

methods.DELETE = async function(request) {
	
	// obtain the path
	let path = urlPath(request.url);

	// declare stats variable
	let stats;

	try {
		stats = await stat(path);
	} catch (error) {
		// if there is an error, return a 500 error
		if (error.code != 'ENOENT') throw error;
		else return {status: 204};
	}

	if (stats.isDirectory()) await rmdir(path);
	else await unlink(path);
	return {status: 204};
};

// import the fs module
const {createWriteStream} = require('fs');

// takes streams and pipeline from the stream module
function pipeStream(from, to) {
	// return a promise that resolves when the pipeline is finished
	return new Promise((resolve, reject) => {
		// pipe the streams
		from.on('error', reject);
		to.on('error', reject);
		to.on('finish', resolve);
		from.pipe(to);
	});
}

methods.PUT = async function(request) {
	let path = urlPath(request.url);
	await pipeStream(request, createWriteStream(path));
	return {status: 204};
};

const {mkdir} = require('fs').promises;

methods.MKCOL = async function(request) {
	let path = urlPath(request.url);
	let stats;

	try {
		stats = await stat(path);
	} catch (error) {
		// if there is an error, return a 500 error
		if (error.code != 'ENOENT') throw error;
		else return {status: 204};
	}
	// if the file is a directory, return the directory
	if (stats.isDirectory()) return {status: 204};
	// otherwise return a 400 error
	else return {status: 400, body: 'File exists'};
};


