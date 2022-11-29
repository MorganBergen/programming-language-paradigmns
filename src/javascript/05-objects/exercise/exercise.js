/**
 * @file        exercise.js
 * @author      Morgan Bergen
 * @brief       This file contains the in class problem fro JavaScript Objects and Arrays
 * @date        Fri Sep  2 12:43:46 CDT 2022
 */


let listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[2]);
// => 5

console.log(listOfNumbers[0]);
// => 2

console.log(listOfNumbers[2 - 1]);
// => 3





let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };


// object 2 was assigned by object one, thus true
console.log(object1 == object2);
// => true

// they are not exactly the same
console.log(object1 == object3);
// => false

// rebinding causes assigned variables to change
object1.value = 15;
console.log(object2.value);
// => 15

console.log(object3.value);
// => 10

