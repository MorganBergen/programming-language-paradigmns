
/**
 * @brief Arrow functions
 * @details Arrow functions are a new way to write functions in ES6.
 */


function sum0(p1, p2) {
    return p1 + p2;
}

const sum1 = (p1, p2) => p1 + p2;
const sum2 = (p1, p2) => { return (p1 + p2) };

/*
these three functions are equivalent
*/


// if an arrow function has only one parameter then you can omit the parentheses entirely
const increment = p1 => p1 + 1;

// arrow functions without parameters must include parentheses
let getName = () => "Morgan Bergen";


const f = x => { return { value: x } };
const g = x => ({ value: x });
console.log(f(1).value);
console.log(g(1).value);

