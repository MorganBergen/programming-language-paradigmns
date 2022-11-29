

/*
function expressions are similar to declarations, however they appear within  the context of a larger expression or statement.  
*/


// this function exprssion defines a function that squares its argument
// note that we assign it to a variable, so we can refer to it by name
const something = function (parameter) { return parameter + "has been returned"; };


// function expressions can include names, which is useful for recursion

// `const f =` := keyword is used to declare an immutable variable and assign a function object to it.
// `function factorial(x)` := function name with a singleton parameter sequence.
// `if (x <= 1) return 1;` := if the parameter is less than or equal to 1, else return x * itself and decrement x by 1.
const f = function factorial(x) { if (x <= 1) return 1; else return x * factorial(x - 1); };

console.log(typeof (f));
console.log(f(55));
console.log(factorial(33));
// console.log(f.factorial(33));

/*
Function names are optional for functions that are defined as expressions.  
A function declaration acutually declares a variable and assigns a function object to it, meaning 
*/