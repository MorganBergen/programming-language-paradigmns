/*
Template Literals
In [ES6](https://en.wikipedia.org/wiki/ECMAScript) and later, string literals can be delimited with backticks.
This is more than just another string literal syntax, it is a template literal which can include arbitrary expressions.
The final value of a string literal in backticks is computed by evaluating any included expressions, converting the values of those expressions to strings and combing those computed strings with the literal characters within the backticks.

Everything between the ${ name } is interpreted as an expression and everything outside is interpreted as literal characters of type string.
The expression is evaluated and the result is converted to a string, and inserted into the template, replacing the dollar sign, the curly braces, and everything in between them.

*/

let s = 'hello world';
let man = "Khaled";
let hello = `Hello ${man}.`; // hello == "Hello Khaled"
console.log(hello);

console.log(typeof (`what`));
console.log(typeof (`${man}`));


/*
let filename = "main.txt";
let lineNumber = 17;
let errorMessage = `\
\u2718 Test failsure at ${filename}:${lineNumber}:
${exception.message}
Stack trace:
${exception.message}
`;
*/

// the backslash at the end of the first line escapes the newline, so it begins with unicode character ✘

/*
tagged template literals
Tagged template literals are a new feature in ES6.  They are a way to use string literals to include expressions in the string.  They're similar to template literals, but they use a tag to indicate where the expression should be inserted.  The tag can be any string, but it is common to use a variable name  Tagged templates are commonly used to apply HTML or SQL escaping to the values before substituting them into text.




Note that even though the tag portion of a tagged template literal is a function, there are no parentheses around it in its invocation.  This is a very specific case, the backtick characters replace the open and close parentheses.

The ability to define your own template tag functions is powerful feature in JavaScript.
*/


/*
the built-in function String.raw() returns the text within backticks without any processing of backslash escapes:
*/

console.log(`\n`.length); // => 1: the string has a single newline character
console.log(String.raw`\n`.length); // => 2: a backslash charactre and the letter n
console.log(String.raw`\n`); // => "\n": the string will output the letter n
console.log(String.raw`morgan bergen`); // => "morgan bergen": the string will output the word "morgan bergen"

/*
Note that even though the tag portion of a tagged template literal is a function, there are no parentheses around it in its invocation.  This is a very specific case, the backtick characters replace the open and close parentheses.
The ability to define your own template tag functions is powerful feature in JavaScript.

*/

let name = "Morgan";
// thus this will not work, because () is not allowed in a tagged template literal
// () is replaced instead with ``
console.log(`String.raw(name)`, "TypeError: Cannot convert undefined or null to object");
// however this works, if you want to insert as a variable 
console.log(String.raw`${name}`);
// as well as this if you want to insert a simple string literal
console.log(String.raw`Morgan`);
//therefore this is the correct way to use a tagged template literal
console.log(String.raw`Morgan` == String.raw`${name}`); // ==> true


/*
Pattern Matching
JavaScript deifne a datatype known as a regaular expression === RegExp  RegExp is for describing and matching patterns in strings of text.  RegExp is a special type of object and has methods like numbers and strings.  The syntax is complex and can be hard to understand, so more indepth details will be provided later in this repo.  However here is a brief overview of the RegExp syntax:
*/

// text between a pair of slashes constitutes a regular expression literal
// the second slash in the pair can also be followed by one or more letters, which modifies the meaning of the pattern.
// for example


/^HTML/;            // matches the string "HTML" at the start of a string
/[1-9][0-9]*/;      // match a nonzero digit, followed by any $ digits
/\bjavascript\b/i;  // match "javascript" as a word, case-insensitive

/*
RegExp objects define a number of useful methods and strings also have methods that accept RegExp arguments.
*/

let text = "testing: 1, 2, 3";
let pattern = /\d+/g;

console.log(pattern.test(text)); // => true
console.log(text.search(pattern)); // => 5: the first match is at index 5
console.log(text.match(pattern)); // => ["1", "2", "3"]: the first match is at index 5
console.log(text.replace(pattern, "@")); // => "testing: @, @, @": the first match is at index 5
console.log(text.split(/\D+/)); // => ["testing", "1", "2", "3"]: the first match is at index 5
console.log(`\n\n`); // => "0  1  2  3  4  5  6  7  8  9  ": the first match is at index 5

// template literals can hold expressions and convert them to strings
console.log(`${true + false === true}`)


// even functions can be inserted into template literals
function looping(size) {
    let output = "";
    for (let i = 0; i < size; i++) {
        output += `${i}  `;
    }
    return (output);
}

console.log(`${looping(10)}`); // => "0 1 2 3 4 5 6 7 8 9 "

























