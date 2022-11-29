# Overview
Morgan Bergen

EECS 368 Programming Language Paradigms

August 31st 2022

## In-Class Problem
For this program, what is the console output for?
1. `console.log(countEs("EECS"));`

    `=> 2`

The purpose of `countEs` this is to encapsulate the countChar method, so that invokcation will be done implicitly by countEs.  The functionality of this program is to return an integer value of how many times `E` exists in the string argument.  `countEs(string)` is analogous to a parent function that allows for a more general use case application.

2. `console.log(countChar("david", "d"));`

    ` => 2`

The purpose of `countChar` is to iterate through a string and terminate iteration once the iteration has summed to the tring's length.  If there are zero occurances of the target `ch` in the `string` then the value returned will be the originally initialized value of `0`.


3.  Add a comment to each line of code to tell what it is doing.

```javascript
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        } 
    }
    return (counted);
}

function countEs(string) {
    return countChar(string, "E");
}
```

## `Doxygen` Comments

[Doxygen Documentation](https://doxygen.nl/manual/index.html)

```javascript
/**
 * @file    exercise.js
 * @author  Morgan Bergen
 * @brief   This file contains the code for the in-class problem
 * @date    Wed Aug 31 13:40:17 CDT 2022
 */


/**
 * @pre     string must be an iterable object type of str and ch must be an element of that object.
 * @post    counted will be returned as an integer value of the number of times ch appears in string.
 * @param   string will be searched and iterated upon.
 * @param   ch will be the target element upon searching the string.
 * @return  counted will be returned as an integer value of the number of times ch appears in string, if there is no element of ch in string, then 0 will be returned.
 */
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return (counted);
}


/**
 * @pre     string must be an iterable object type of str.
 * @post    upon invocation the return value will be the return value of countChar(string, "E") 
 * @param   string will be searched and iterated upon.
 * @return  countChar will be returned as an integer value of the number of times "E" appears in string, if there is no element of "E" in string, then 0 will be returned.
 */
function countEs(string) {
    return (countChar(string, "E"));
}
```
### Cheat Sheet

`@file`: Filename

`@author`: Name of the author

`@brief`: A brief description of the file contents and purpose 

`@date`: date started coding

`@pre`: States the condition that must be true for a member method to work as expected (e.g invalid values, invalid range, invalid conditions)

`@post`: Describe the side effects of the function. It describes whether the function modifies the input parameter or the calling objects or any other functionality of the program

`@param`: Parameters that are passed to the function

`@return`: Specify what does the function returns after execution 

`@throw`: Specify the error a function might throw


## Regular In-line Comments


```javascript
// this function will take a string and a character as an argument and return the number of times that character appears in the string
function countChar(string, ch) {
    // initializing counted to 0 so incase the character is not found in the string, 0 will be returned
    let counted = 0;

    // iterating through the string till the end of the string
    for (let i = 0; i < string.length; i++) {
        // if the character at the current index is equal to the character we are looking for, then increment counted
        if (string[i] == ch) {

            // counted will be incremented by 1
            // alternative syntax is counted++;
            counted += 1;
        }
    }

    // return the number of times the character was found in the string represented by the integer counted.
    return (counted);
}

// the return value of this function will be the return value of countChar(string, "E")
function countEs(string) {

    // this return value will be of type integer.
    return (countChar(string, "E"));

}

// output to the console the amount of times E appears in EECS
console.log(countEs("EESC"));
// => 2

// output to the terminal the amount of times d appears in david
console.log(countChar("david", "d"));
// => 2

```