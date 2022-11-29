/*
null
null is a language keyword that indicates the absence of a value.  When you use the typeof operator on null it will return the string "object", which indicates that null cna be thought of as a special object value that indicates "no object".  In practice, however, null is typically regarded as the sole member of its own type, and it can be used to indicate “no value” for numbers and strings as well as objects.  nullptr in C++ is similar to null in JavaScript.
using a . or [] operator will casue a TypeError to be thrown.
*/

console.log(typeof (null)); // => object (null is a special object)

/*
undefined

The undefined value represents a deeper kind of absence of a value.  It indicates that when you query the value of an object property or array element that does not exist.  The undefined value is also the return value of functions that do not expliictly return a vlaue and the value of the function parameters for which no argument is passed in.
using a . or [] operator will casue a TypeError to be thrown.
*/

console.log(`undefined is an object of it's own type ${typeof undefined}`);

// the equality operator considered them to be equal becasue they are both objects
console.log(`null == undefined is ${null == undefined} `); // => true

// the strict equality operator distinguishes them from one another because even though they are both objects they are of different types
console.log(`null === undefined is ${null === undefined} `); // => false

class Morgan {
    constructor(name) {
        console.log(`constructor of object type Morgan has been called with name set to ${name}`);
        this.name = name;
    }
}

function hello() {
    console.log(`contains no return value nor parameters`);
}

let morgan = new Morgan()

console.log(`morgan.name == null is ${morgan.name == null} because morgan.name DNE`);
console.log(`morgan.name === null is ${morgan.name === null} because morgan.name is uninitilized`);
console.log(`morgan.name == undefined ${morgan.name == undefined} because morgan.name is uninitilized`);
console.log(`morgan.name === undefined ${morgan.name === undefined} because morgan.name is equal to undefined`);

console.log(` hello() === undefined ${hello() === undefined}`); // ==> true
console.log(` hello() == undefined ${hello() == undefined}`); // ==> true
console.log(` hello() === null ${hello() === null}`); // ==> false
console.log(` hello() == null ${hello() == null}`); // ==> false


/*
Undefined represents a system-level, unexpected, or error-like absence of value
Null to represent a program-level, normal, or expected absence of value. 
*/

