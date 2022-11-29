
/* @author      Morgan Bergen
 * @date        Fri Oct 14 10:48:21 CDT 2022
 * @brief       arrow function in action
 * @name        arrow.js
 */


//Syntax
(param1, param2) => { statements };
(param1, param2) => expression;
(param1, param2) => { return expression; }

(singleParam) => { statements }
singleParam => { statements }

() => { statements };
() => expression;
() => { return expression; }

(param1, param2, paramN) => expression;

// we will write to the console hello world in the following function

// function declaration
function helloWorld() {
	console.log("Hello World");
}

// here we will do the same function but with arrows

// arrow function
const helloWorld = () => {
	console.log("Hello World");
}

