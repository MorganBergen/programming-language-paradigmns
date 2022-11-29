
/*
conversions and equality

two equality operators are available:
1.  strict equality (===)
2.  loose equality (==)

1.  strict equality 
- compares the value and type of two variables
- returns true if the two variables if their type and value are equal

2.  loose equality 
- compares the value of two variables
- returns true if the two variables have the same value

*/

console.log(`null == undefined => ${null == undefined}`);
console.log(`"0" == 0 => ${"0" == 0}`);
console.log(`0 == false => ${0 == false}`);
console.log(`"0" == false => ${0 == false}`);


/*
null and undefined are considered to have equal values
however, null is considered to be less than undefined
*/

console.log(`null ≠ undefined => ${null == undefined}`);
console.log(`null < undefined => ${null < undefined}`);

/*
convertibility of one value to another 
does not imply equality of those two values
If undefined is used where a boolean value is expected for example it will convert to false.
*/
