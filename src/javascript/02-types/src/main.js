
/*
 * @author: 	Morgan Bergen
 * @date:   	Mon Oct 10 20:44:03 CDT 2022
 * @brief:  	Testing mutability and boolean operators
 * @name:   	main.js
 */

let red = {value: 0};
let green = {value: 1};
let blue = {value: 2};
let yellow = {value: 3};
let dark_red = red;


// Testing mutability
console.log(`red === dark_red = ${red.value === dark_red.value}`);
console.log(`red === green = text string literal`);

console.log(`loose equality: red == dark_red = ${red == dark_red}`);
console.log(`strict equality: red === dark_red = ${red === dark_red}`);

// the following line will cause an errr

// console.log(`red === green = ${red === green}`);
// the reason for this is because the objects are not the same object
// the = operator is an assignment operator, not a comparison operator


