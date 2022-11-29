

/**
 * @brief       example
 */

// declaration
function distance(x1, y1, x2, y2) {
    let dx = x2 - x1;
    let dy = y2 - y1;
    return (Math.sqrt(dx * dx + dy * dy));
}

// caller
console.log(distance(1, 1, 2, 3));


/*
the distance() function is designed to compute a value and use a return statement to return that value to the caller.
The return statement causes the function to stop executing and to return the value of its expression (if any) to the caller.
If the return statement does not have an associated expression, the function returns undefined.
*/