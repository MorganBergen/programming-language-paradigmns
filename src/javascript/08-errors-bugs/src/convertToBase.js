/*
 * @author	Morgan Bergen
 * @date 	Sun Oct 23 13:37:37 CDT 2022
 * @brief 	convert whole number to a string in a given base
 * @name	convertToBase
 */


function numberToString(n, base = 10) {
	let result = "";
	let sign = "";

	if (n < 0) {
		sign = "-";
		n = -n;
	}

	do {
		result = String(n % base) + result;
		n /= base;
	} while (n > 0);

	return (sign + result);
}

console.log(numberToString(13, 10));

