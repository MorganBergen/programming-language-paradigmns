/*


#### Arithmetic in Javascript

- basic arithmetic
< + > // addition
< - > // subtraction
< * > // multiplication
< ** > // exponentiation
< / > // division
< // > // integer division
< % > // modulus
< ++ > // increment
< -- > // decrement

- complex arithmetic
Math.pow(2, 53) > // => 9007199254740992: 2 to the power of 53
Math.round(.6)    // => 1: round to the nearest integer



*/

let power = Math.pow(2, 53);
let round = Math.round(.6);
let ceiling = Math.ceil(.6);
let floor = Math.floor(.6);
let absolute = Math.abs(-5);
let largest = Math.max(1, 2, 3, 4, 5);
let smallest = Math.min(1, 2, 3, 4, 5);
let pseudo_random = Math.random();
let sqrt = Math.sqrt(25);
let cube = Math.cbrt(8);
let sin = Math.sin(90);
let cos = Math.cos(90);
let tan = Math.tan(90);
let logarithm = Math.log(1024);
let log2 = Math.log2(1024);
let π = Math.PI;
let e = Math.E;
let φ = Math.PHI;
let ψ = Math.PSI;
let ω = Math.OMEGA



/* 

Aritnmetic does not raise errors in cases of overflow, underflow, or division by zero.

- Overflow/Underflow:  When the result of an operation is larger/smaller than the largest/smallest representable number (overflow), the result is a special infinity value.
        INFINITY
        -INFINITY

- Negative Underflow:  If underflow occurs from a negative number, JavaScript returns a special value known as “negative zero.”
        -0

- Division by Zero: When the result of an operation is divided by zero.
        ∞
        -∞

- Not a Number: When the result of an operation is not a number.
        NaN




*/


/* dates and times
- Javascript has a Date object that represents a point in time.
- They have a numeric value that represents the number of milliseconds since January 1, 1970.
- The Date object has methods that allow you to manipulate the date

*/

let timestamp = Date.now();
let now = new Date();
let ms = now.getTime();
let iso = now.toISOString();

function show() {
        console.log(timestamp); // => 1545010989801
        console.log(now);       // => Mon Jan 01 1970 00:00:00 GMT+0000 (GMT)
        console.log(ms);        // => 1545010989801
        console.log(iso);       // => 1970-01-01T00:00:00.000Z
}

show()