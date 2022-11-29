# Overview
Morgan Bergen

EECS 368 Programming Language Paradigms

Friday Sept 2nd 2022

## In-Class Problem

Show the console output (?) for each of these code snippets

## Code Snippet 1

```JavaScript
let listOfNumbers = [2, 3, 5, 7, 11];

console.log(listOfNumbers[2]);
// => 5

console.log(listOfNumbers[0]);
// => 2

console.log(listOfNumbers[2 - 1]);
// => 3
```

## Code Snippet 1
```JavaScript
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
```