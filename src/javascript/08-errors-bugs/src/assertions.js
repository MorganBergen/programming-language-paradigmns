/*
 * @author	Morgan Bergen
 * @date	Sun Oct 23 14:41:30 CDT 2022
 * @brief	contains functions for assertions
 * @file	assertions.js
 */

function firstElement(array) {
	
	if (array.length == 0) {
		throw new Error("empty array");
	}
	
	return array[0];
}

try {
	firstElement([]);
} catch (error) {
	console.log("error caught: " + error.message);
}
