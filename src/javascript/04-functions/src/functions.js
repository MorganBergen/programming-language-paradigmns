
/*sandbox for functions*/

// in the following lines of code i will declare a function

function add(x, y) {
    return x + y;
}


function morgan() {
    return "morgan";
}

console.log(`withourt () operator => \n`);
console.log(morgan);
console.log(`${morgan}`);
console.log(morgan());
console.log(`${morgan()}`);

/*
functions are objects
- you can set properties on them (like a variable)
- and you invoke methods on them with the . operator
*/

console.log((typeof (morgan)));
console.log(morgan().charAt(0));
console.log(morgan().charAt(1));
console.log(morgan().charAt(2));

// built-in properties on functions
console.log(morgan.length);
console.log(morgan.name);
console.log(morgan.prototype);
console.log(morgan.arguments);
console.log(morgan.caller);
console.log(morgan.constructor);


// built-in methods on functions
console.log(morgan().search("m"));
something = morgan();
console.log(something);

// example of function definitionscid
function printprops(o) {
    for (let p in o) {
        console.log(`${p}: ${o[p]}\n`);
    }
    // return (undefined);
}

/*
Because the return statment is non existent, the invokcation of the function will execute each statement in the function body, determine if there is an end to the function, and then return the value undefined.
*/


console.log(printprops(morgan()));

function printIt(x) {
    for (let i in x) {
        console.log(`${i}: ${x[i]}\n`);
    }
}

console.log(printIt(morgan()));

function here() {

    //code goes here

    /* every function without an explicit return statement
    returns the value undefined, thus implicitly returning the value undefined */


}


// function expressions
const word = function (param) { return (param + `1`) };

console.log(word);