/*

for (initialization; condition; increment) {
    statement;
}

initialization: the variable line was initializaed with the str value "-"
condition: with line's initial length = 1, the function body will iterate based on the length of line with a maximum length of 6.
increment:  line will be reinitilaized after every iteration with a concatenated value of "-".

summary:  the following is a for loop that will iterate and increment the variable line and concatenate the string by an additional - until the line variable has "-" in it.

*/

for (let line = "-"; line.length < 7; line += "-") {
    console.log(line);
}


// => the following will be the output of the program

/*
-       framed var:  line.length = 1
--      framed var:  line.length = 2
---     framed var:  line.length = 3
----    framed var:  line.length = 4
-----   framed var:  line.length = 5
------  framed var:  line.length = 6
*/


let ten = 10;
ten = 11;
console.log(ten);

// => 11

let something;
let somethingeElse = typeof (something);
console.log(`the data type of undefined is ${somethingeElse}`);

// => the data type of undefined is undefined

var one = 1;
console.log(one);

const imm = "immutable";
imm = 21;

// => TypeError: Assignment to constant variable.


