/**
 * @file    01-assignment.js
 * @author  Morgan Bergen
 * @date    Sat Sep  3 12:16:54 CDT 2022
 * @brief   assignment 01
 */


function main() {
    looping();
    fizzBuzz();
    console.log(grid(8));
    console.log(grid(14));
}

main();


/*
create in a single file the javascript code for the following modified exxericse from the end of Chapter 2 in Eloquent JavaScript:
write a loop that makes 10 calls to console.log to output the following triangle:
*/
/**
 * @pre         none
 * @param       none
 * @post        the local variable x will increment by itself for every iteration made
 * @return      undefined
 */
function looping() {
    // title of the program
    console.log("Looping a triangle");
    // variable initialization to string `x`
    let x = "x";
    // iterate this loop 10 times
    for (let i = 0; i < 10; i++) {
        // output the value of x
        console.log(x);
        // x is concatinated with itself
        x = x + "x";
    }
}

/**
 * @pre         none
 * @param       none
 * @post        program that uses console.log() to print all the numbers from 1 to 100
                with three exceptions:
                For numbers divisible by 4, print "Divisible by 4" instead of the
                number.
                For numbers divisible by 7, but not 4, print "Divisible by 7, but not
                4" instead.
                For numbers divisible by both 4 and 7, print “Divisible by both 4
                and 7”.
 * @return      undefined
 */
function fizzBuzz() {
    // title of the program
    console.log("FizzBuzz")
    // iterate this loop 100 times
    for (i = 1; i < 101; i++) {
        // if i is divisible by 4 and 7 then output "Divisible by both 4 and 7"
        if (i % 4 === 0 && i % 7 !== 0) {
            console.log(`${i} Divisible by 4`);
            // else if i is divisible by 7 and not 4 then output "Divisible by 7, but not 4"
        } else if (i % 4 !== 0 && i % 7 === 0) {
            console.log(`${i} Divisible by 7, but not 4`);
            // else if i is divisible by 4 and 7 then output "Divisible by both 4 and 7"
        } else if (i % 4 === 0 && i % 7 === 0) {
            console.log(`${i} Divisible by both 4 and 7`);
        }
    }
}

/**
 * @pre         size must be a integer
 * @param       {*} size 
 * @post        output should have a binding of the concatinated strings ` ` + `*`
 * @returns     output
 */
//this function will create a string that represents an n-by-n grid using newline characters to seperate lines
function grid(size) {
    // title of the program
    console.log("n-by-n grid");
    // we output an assertion to ensure that the size is an integer
    console.assert(typeof size === "number", `please size as a number type`);
    // variable initialization of an empty string
    let output = ``;
    // iterate this loop size times
    for (row = 0; row < size; row++) {
        // if row is even then loop through these types columns
        if (row % 2 === 0) {
            // iterate this loop size times
            for (col = 0; col < size; col++) {
                // if col is even then add a space to the output string
                if (col % 2 === 0) {
                    output += ` `;
                    // else add a * to the output string
                } else {
                    output += `*`;
                }
            }
            // else if row is odd then loop through these types columns
        } else {
            // iterate this loop size times
            for (col = 0; col < size; col++) {
                // if col is even then add a * to the output string
                if (col % 2 === 0) {
                    output += `*`;
                    // else add a space to the output string
                } else {
                    output += ` `;
                }
            }
        }
        // add a newline character to the output string
        if (row !== size - 1) {
            // output is concatinated with a newline character along with the output string
            output += `\n`;
        }
    }
    // we have exited all the loops and have a string that represents an n-by-n grid using newline characters to seperate lines and now will return the final string
    return (output);
}

