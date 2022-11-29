

// function expressions can include names
const f = function fact(x) {
    if (x <= 1) return (1);
    else return (x * fact(x - 1));
    // within here fact is defined
}

function fact(x) {
    if (x <= 1) {
        return (1);
    } else {
        return (x * fact(x - 1));
    }
}

console.log(fact(0));
console.log(fact(1));
console.log(fact(2).name);

const x = function here() {
    return (x);
}

console.log(`typeof(x)  ${typeof (x)}`);
console.log(`x.name     ${x.name}`);
console.log(f(3));

// ReferenceError: fact is not defined
// console.log(fact(3)); 

/*
- A function expression does not declare a variable
it is up to you to assign th enewly defined function object to a constant or variable if you are going to need to need to refer to it multiple times.
- It is always standard practice to assign a function expression to a constant or variable.
*/