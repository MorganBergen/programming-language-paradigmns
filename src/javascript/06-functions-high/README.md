# Higher - Order Functions


### [Table of Contents](#table-of-contents)

1. [Higher order functions](#higher-order-functions)
2. [Examples](#example)
3. [Creating new functions](#creating-new-functions)
4. [Changing other functions](#changing-other-functions)
5. [Changing other functions](#changing-other-functions)
6. [Providing new types of control flow](#providing-new-types-of-control-flow)
7. [Built-in higher-order array methods](#built-in-higher-order-array-methods)
8. [forEach array method](#foreach-array-method)
9. [Script Data Set](#script-data-set)
10. [Filter array method](#filter-array-method)
11. [Map Array method](#map-array-method)
12. [Reduce Array method](#reduce-array-method)
13. [Summary](#summary)
14. [In-class problem](#in-class-problem)

## Higher order functions
- Higher-order functions are functions that operate on other functions, either
    - taking functions as arguments
    - returning functions
- Since we have already seen that functions are regular values, there is nothing particularly remarkable about the fact that such functions exist.  The term comes from mathematics, where the distinction between functions and other values is taken more seriously.

## Examples

It is common for a program to do something a given number of times.  You can write a for loop for that, such as:
```JavaScript // Can we abstract "doing something N times" as a function? for (let i = 0; i < 10; i++) { console.log(i); } // well it's easy to write a function that calls console.log N times function repeatLog(n) { for (let i = 0; i < n; i++) { console.log(i); } }
// but what if we want to do something other than loggin the numbers?  
// well since "doing something" can be represented as a function 
// and functions are just values, we can pass our action as a function value
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
} repeat(3, console.log); ``` We don't have to pass a predefined function to repeat.  Often times it is easier to create a function value on the spot instead. ```JavaScript let labels = []; repeat(5, i => { labels.push(`Unit ${i + 1}`); }); console.log(labels); // → ["Unit 1", "Unit 2", "Unit 3", "Unit 4", "Unit 5"] ``` The function value represnted as an arrow function is wrapped in the parentheses of the call to repeat. ## Creating new functions We can have functions that create new functions: ```JavaScript function greaterThan(n) { return m => m > n;                  // returning a new function } let greatherThan10 = greaterThan(10);   // m => m > 10
console.log(greaterThan10(11));         // 11 => 11 > 10
// → true
```
## Changing other functions

We can have functions that change other functions:

```JavaScript
function noisy(f) {         // makes f more verbose
    return (args) => {      
        // first by printing out arguments
        console.log("calling with", args);

        // then printing out arguments and results of function
        let result = f(args);

        console.log("called with", args, ", returned", result); return result; }; } noisy(Math.min)(3, 2, 1); // → calling with [3, 2, 1] // → called with [3, 2, 1] , returned 1 ``` ## Providing new types of control flow

We can write functions that provide new types of control flow:

```JavaScript
function unless(test, then) {
    if (!test) {
        then(); // do nothing if test is false, then do arrow function
    }
}
    repeat(3, n => {
        // if n is dividible by 2, i.e., no remainder
        unless(n % 2 == 1, () => {
            // then print out "n is even"
            console.log(n, "is even");
        });
    });
```

## Built-in higher-order array methods

Arrays provide a number of built-in useful higher-order methods.
We will look at four to see how high-order functions are used.
1. [forEach](#forEach-Array-method)
2. [filter](#filter-array-method)
3. [map](#map-array-method)
4. [reduce](##reduce-array-method)
## forEach Array method

There is a a built-in array method, forEach, that provides something like a for/of loop as a higher order function.  You can use forEach to loop over the elements in an array.

```JavaScript
["A", "B"].forEach(l => console.log(l));
// → A
// → B
```
## Script Data Set

In order to illustrate the other higher-order array methods, we will use the Script Data Set (SCRIPTS).  One area where higher order functions shine is in data processing.  To process data, we'll need some actual data
Unicode is a system that assigns a number to each character in the written languages.  Most of these characters are associated with a specific script.  The standard conatins 140 differe scripts 81 are still in use today, and 59 are historic.  The Scirpt Data Set contains information about the 140 non Latin character scripts defined in Unicode.  For example here is a sameple of Tamil script.  The binding contains an array of objects, each of which describes a script

```JSON
{
    name: "Coptic",                                         // name of script
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],  // unicode ranges assigned to it
    direction: "ltr",                                       /* 
                                                             * direction in which the lang is written
                                                             * "ltr" left to right
                                                             * "rtl" right to left
                                                             * "ttb" top to bottom
                                                             */
    year: -200,                                             // the approximate origin time
    living: false,                                          // whether it is still in use
    link: https://en.wikipedia.org/wiki/Coptic_alphabet     // link to more information

}
```


## filter Array method

filter filters out the elements in an array that don't pass a test.  Filter is a standard array method. 

```JavaScript
function filter(array, test) {
    let passed = [];

    for (let element of array) {
        if (test(element)) {
            passed.push(element);
        }
    }
    return passed;
}

console.log(filter(SCRIPTS, script => script.living));
```

The example defined the function only to show what it does internally.  In a real JavaScript program, we would use filter like this instead:

```JavaScript
console.log(SCRIPTS.filter(s => s.direction == "ttb"));
// → [{name: "Mongolian", ...}, ...]
```

## map Array method

map transforms an array by applying a function to all of its elements and building a new array from the returned values.  The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.  Map is a standard array method.  The example defined the function only to show what it does internally.  

```JavaScript

// how the map function (even though it's standardized) is written
function map(array, transform) {
    let mapped = [];
    for (let element of array) {
        mapped.push(transform(element));
    }
    return (mapped);
}

let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl")
console.log(map(rtlScripts, s => s.name));
// → ["Adlam", "Arabic", "Imperial Aramaic", ...]

console.log(Math.round(average(
    SCRIPTS.filter(s => s.living).map(s => s.year);
    )))
```

## reduce Array method

reduce (sometimes called fold) computes a single value from an array.  It builds a value by repeatedly taking a single element from the array and combining it with the current value.  If your array contains at least one element, you are allowed to leave off the start argument.  The method will take the first element of the array as its start value and start reducing at the second element.

```JavaScript
console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
```

- `[1, 2, 3, 4]` is the array to reduce
- `(a, b) => a + b` is the combination rule
- `0` is the starting value


## Summary

- Higher-order functions are functions that operate on other function, either:
    - taking functions as arguments
    - returning functions
- We can have higher-order functions that:
    - create new functions
    - change other functions
    - provide new types of control flow
- Arrays provide a number of useful higher-order methods:
    - The `forEach` method loops over the elements in an array
    - The `filter` method returns a new array containing only the elements that pass the predicate function
    - The `map` method transforms an array by putting each element through a function
    - The `reduce` method combines all the elements in an array into a single value.

## In-class problem

Morgan Bergen

EECS 368 Programming Language Paradigms

Friday Sept 7th 2022

## In-Class Problem

1.  What will the function in the blue box below calculate for a script from the Script Data Set?
```javascript
function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a,b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));
```

This function will calculate the script that contains the largest amount of character in unicode.  The script data set is where higher-order functions process data.  In order to do so we use data sets about scripts - writing systems such as `Coptic`.

The characterCount method reduces the `ranges` assigned to a script by summing their sizes.  The second call to reduce then uses this to find the largest script by comparing two scripts and returning the larger one.
`ranges` being the property that contains an array of unicode character ranges, each of which is a two-element array containing alower bound and an upper bound.  The lower bound in this case is an inclsuive (for example code 994 is a coptic character), and the upper bound is a non-inclusive code (for example 1108 is not).


2.  What will console.log display?


```JSON
{
  name: 'Coptic',
  ranges: [ [ 994, 1008 ], [ 11392, 11508 ], [ 11513, 11520 ] ],
  direction: 'ltr',
  year: -200,
  living: false,
  link: 'https://en.wikipedia.org/wiki/Coptic_alphabet'
}
```

3.  Describe what this code from below does:

The reduce function will compute a single value from the array of ranges and return 

```JavaScript
function characterCount(script) {
    return (
        // will get the ranges of the script
        script.ranges.reduce((count, [from, to]) => {
            return count + (to - from);
        }), 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));
```
