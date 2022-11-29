

/**
 * @pre         size must be a integer
 * @param       {*} size 
 * @post        output should have a binding of the concatinated strings ` ` + `*`
 * @returns     output
 */
//this function will create a string that represents an n-by-n grid using newline characters to seperate lines
function grid(size) {
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

console.log(grid(8));

