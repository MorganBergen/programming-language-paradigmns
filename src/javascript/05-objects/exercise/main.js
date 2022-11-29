/*
 * @author		Morgan Bergen
 * @date		Fri Oct 14 13:31:20 CDT 2022
 * @brief		map reduce method in action
 * @file		main.js
 */


console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
// Output: 10
// Explanation:
// 1. a = 0, b = 1	=> a + b = 0 + 1 = 1
// 2. a = 1, b = 2	=> a + b = 1 + 2 = 3
// 3. a = 3, b = 3	=> a + b = 3 + 3 = 6
// 4. a = 6, b = 4	=> a + b = 6 + 4 = 10
// 5. return 10
// a represents the accumulator
// b represents the current value
// 0 represents the initial value of the accumulator
// 0 is the default value of the accumulator if no initial value is provided

// demonstration of an arrow function

// function declaration
function add(a, b) {
	return a + b;
}


console.log(add(1, 2));












