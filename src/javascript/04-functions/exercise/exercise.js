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


/**
 * @pre     string must be an iterable object type of str.
 * @post    upon invocation the return value will be the return value of countChar(string, "E") 
 * @param   string will be searched and iterated upon.
 * @return  countChar will be returned as an integer value of the number of times "E" appears in string, if there is no element of "E" in string, then 0 will be returned.
 */

// the return value of this function will be the return value of countChar(string, "E")
function countEs(string) {

    // this return value will be of type integer.
    return (countChar(string, "E"));

}


console.log(countEs("EESC"));
// => 2

console.log(countChar("david", "d"));
// => 2