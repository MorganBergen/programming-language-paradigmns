/*
 * @author	Morgan Bergen
 * @date	Mon Oct 17 15:24:21 CDT 2022
 * @brief	in-class problem for 
 * @file	exercise.js
 */

/*
 * assume:
 * this is javascript code for a function in our file server
 * rmdir removes a directory
 * unlink remove a file
 *
 * add a comment to each block of this code to describe what it is doing.
 * The HTTP 204 (No Content) success status response code indicates that the request has succeeded, but that the client doesn't need to go away from its current page.
 *
 */

const {createServer} = require("http");
const {parse} = require("url");
const {request} = require("http");
const methods = Object.create(null);


// will be a get method will be a get delete method to the file server
methods.UNKNOWN = async function(request) {
	let path = urlPath(request.url);
	// stat gives information about a file, if file does not exist then stat will provide an error code, gives us information about the file such as...
	// size property gives the size of the file in bytes
	// mtime property gives the last modified time of the file
	// whether the file is a directory or not
	// .isDirectory() method returns true if the file is a directory
	let stats;
	try {
		// stat will return information about the file at the path
		// if something happens when getting a file then an error will be thrown
		// if the file does not exist then an error will be thrown
		stats = await stat(path);
	} catch (error) {
		// a valid file request, however the file is not found
		if (error.code != "ENOENT") {
			// throw the error
			throw error;
		// the file does not exist
		} else {
			// file does not exist
			return {status: 204};
		// if stats is a directory then it will return a 204 status code
		} if (stats.isDirectory()) {
			// the await can be put in front of the expression to wait for a promise to resolve and only then continue to execution of the function.  You will await from the promise in order to remove the directory of the path.
			await rmdir(path);
		// if stats is a file then it will return a 204 status code
		} else {
			await unlink(path);
			return {status: 204};
		};
	};
};





