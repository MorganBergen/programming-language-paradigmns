
/*
arrow function
*/


// this input (the parameters) produces this output (the return value)
const power = (base, exponent) => {
    let result = 1;
    for (let count = 0; count < exponent; count++) {
        result = result * base;
    }
    return (result);
};

console.log(power(2, 10));

