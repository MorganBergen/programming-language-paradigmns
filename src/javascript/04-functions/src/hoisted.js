

/*
One of the important things to understand about function declarations is that the name of the function becomes a variable whose value is the function itself. Function declaration statements are “hoisted” to the top of the enclosing script, function, or block so that functions defined in this way may be invoked from code that appears before the definition. Another way to say this is that all of the functions declared in a block of JavaScript code will be defined throughout that block, and they will be defined before the JavaScript interpreter begins to execute any of the code in that block.
*/

function factorial(x) {
    if (x <= 1) {
        return 1;
    } else {
        return (x * factorial(x - 1));
    }
}

/*
The factorial function is designed to compute a value, and will return that value to the caller.  However the return statement cases the function to stop executing and to return the value of its expression to the caller.  If the return statement does not have an associated expression the return value of the function is `undefined`.

*/
