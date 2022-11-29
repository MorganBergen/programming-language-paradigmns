/*

Boolean Values

Booleans are reserved by lowercase true and false.
0 === false;
1 === true;

Booleans primarily serve to indicate the state of something, specifally the state of a condition.
Therefore the primitive data type booleans are utilized in for control structures in most programs.
*/

if (true !== false) {
    console.log("condition is true");
} else {
    console.log("condition is false");
} // => "condition is true"

/*
Any JavaScript value can be converted to a boolean.  Objects and arrays convert and work like true.
*/

if (undefined === false ||
    null === false ||
    0 === false ||
    "" === false ||
    NaN === false ||
    " " === false ||
    "0" === false ||
    "false" === false ||
    false === false) {
    console.log("All of these values are considered false");
}

/*
Falsey Values are:
- undefined
- null
- 0
- ""
- NaN
- " "
- "0"
- "false"
- false

Truthy Values are:
- any non-falsey value
- arrays with at least one element
- objects with at least one property
*/

/*
choosing implict vs explicit conversion for booleans is a good way to shorthand your code.

*/

o = null;

if (o !== null) {
    console.log("explicitly checking for null is more restrictive, but less simplistic");
}

if (o) {
    console.log("implicitly checking for null is less restrictive, but more simplistic");
}

/*
    The boolean operators are:
    - && (and)
    - || (or)
    - ! (not)
*/

let x = 0;
let y = 0;
let z = 1;

if ((x === 0 && y === 0) || !(z === 0)) {
    console.log(`x is ${x} and y is ${y}`);
}



