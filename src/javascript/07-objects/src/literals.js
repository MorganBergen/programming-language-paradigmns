/*

object literals
- Is a way to create an object
- Is a comman-separated list of colon-separated name:value pairs enclosed with curly braces
- A property name is a JavaScript identifier or a string literal
- A property value is any JavaScript expression
    - the vlaue expression may be a primitive value or an object value

*/

// an object with no properties
let empty = {};

// an object with two numeric properties
let point = { x: 0, y: 0 };

// an object with more complete values
let point2 = { x: point.x, y: point.y + 1 };

let book = {
    // these property names include spaces, so they must be quoted
    "main title": "JavaScript",

    // and hypens, so use string literals
    "sub-title": "The Definitive Guide",

    // for is a reserved keyword, so no quotes
    for: "all audiences",

    // the value of this property is an object itself (nested object)
    author: {
        firstname: "David",
        surname: "Flanagan"
    }

};

/* Accessing object properties
    - The dot notation
    - The bracket notation
*/

// dot notation
console.log(book.author.surname);
console.log(book.for);
console.log(book.author.firstname);

// bracket notation
console.log(book["main title"]);
console.log(book["sub-title"]);





