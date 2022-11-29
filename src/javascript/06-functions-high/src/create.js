/*
 * @author      Morgan Bergen
 * @date        Fri Oct 14 09:33:33 CDT 202
 * @brief       Demonstrate how a function can create another new function
 */


function greaterThan(n) {
    return m => m > n;
}
console.log(greaterThan(10));
let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11).name);

// arrow functions
let square1 = (x) => { return x * x; };