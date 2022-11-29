/*
 * @author:	Morgan Bergen
 * @date:	Wed Oct 12 12:16:43 CDT 2022
 * @brief:	calling functions for side effects vs return value
 * @file:	print.js
 */

// this function prints a line and calls the function for its side effect


function printZeroPaddedWithLabel(number, label) {
	// this converts the number to a string data type
	let numberString = String(number);

	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${label}`);
}

printZeroPaddedWithLabel(1, "hello");
