/* 
Strings

    > A string is an immutable ordered sequence of 16 - bit values, each of whcih typically represents a unicode character.

- the length of a string is a number of 16 - bit values it contains
- strings and arrays do zero base indexing
- strings are iterable
*/

// UTF-16:
let euro = "€";
let heart = "♥";

console.log(euro.length); // => 1
console.log(heart.length); // => 1


/*

#### String Literals
- String literals are surrounded by double quotes ("") or single quotes ('')
- They can contain any character, including Unicode characters and can contain escape sequences.

*/

let empty = ""; // => "" (empty string)
let single = 'single'; // => 'single'
let double = "double"; // => "double"
let unicode = "I'm 💩"; // => "I'm 💩 " || "I am shit"
let inside = 'name="value"'; // => name="value"

/*
interpolated strings
- strings delimited with backticks (`) allow for expressions to be embeedded in the string


\n: newline
\r: carriage return
\t: tab
\b: backspace
\f: form feed
\v: vertical tab
\0: null


Multi line strings:

*/

// multi line strings
let multi = 'two\nlines'; // => "two\nlines"


// three lines
let three = "one\
             long\
             line"; // => "one\nlong\nline" 

let two = `the newline character at the end of this line
            is included literally in this string`; // => "the newline character at the end of this line\n            is included literally in this string"

function show() {
    console.log(multi);
    console.log(two);
    console.log(three);
}

show()

/*
 
client-side javascript programming
- when combining HTML and JavaScript it is a good iea to use one style of quotes for JavaScript and the other for HTML.
- the style of quotes used for HTML is called double quotes and the style of quotes used for JavaScript is called single quotes.

< button onclick = "alert('Thank you')" > Click Me </button >
 
*/


/*
Escape Sequences in String Literals
chapter 3 goes from page 23 - 60
currently on page 35

        sequence        character representation
        \0              null character
        \b              backspace
        \t              tab
        \n              newline
        \v              vertical tab
        \f              form feed
        \r              carriage return
        \"              double quote
        \'              single quote or apostrophe
        \\              backslash
        \xnn            hexadecimal number nn represents the character with that number
        \u{n}           unicode character with code point n

- If the \ character preceds any character other than the above, the backshalh is simply ignored. For example:  

        \# \\ is the same as #

*/

/*
Working with Strings

    > built-in methods for strings

- string concatenation
- string comparison

*/

let name = "Morgan";
let message = "Hello, " + "world!"; // => "Hello, world!"
let greeting = "Welcome to my site, " + " " + name; // => "Welcome to my site, visitor!"


// string comparison
// - String comparison is done simply by comparing the 16 - bit values.
let company = "Google";
let same_company = "Google";
let different_company = "Microsoft";

console.log(company === same_company); // => true
console.log(company !== different_company) // => true
console.log(company > different_company) // => false
console.log(company < different_company) // => false
console.log(company >= different_company) // => false
console.log(company <= different_company) // => false
console.log(company == same_company) // => true
console.log(company != different_company) // => true


// length
let me = "Morgan Bergen";
console.log(me.length); // => 5


// API: string methods

// obtaining portions of the string
me.substring(1, 4); // => "org"
me.slice(1, 4); // => "org" same as substring
me.slice(-3); // => "erg" last three characters
me.slice(-3, -1); // => "er" last three characters, but not the last character
me.slice(1); // => "orgen" from the second character
me.split(", "); // => ["Morgan", "Bergen"]

// searching for substrings
me.indexOf("Morgan"); // => 0 position of the first occurrence of the substring
me.indexOf("M", 3); // => 3rd position of the first occurrence of the substring
me.indexOf("zz"); // => -1: zz does not include in the string
me.lastIndexOf("B"); // => 6: last position of the first occurrence of the substring

// boolean searching fucntions
me.includes("Morgan"); // => true
me.startsWith("B"); // => false
me.endsWith("en"); // => true
me.includes("org"); // => true
me.includes("zz"); // => false

// creating modified versions of strings

me.replace("Morgan", "David") // => "David Bergen"
me.toLowerCase(); // => "morgan bergen"
me.toUpperCase(); // => "MORGAN BERGEN"
me.normalize(); // => "Morgan Bergen"
me.normalize("NFD"); // => "Morgan Bergen"

// inspecting individual characters of strings
me.charAt(0); // => "M"
me.charAt(me.length - 1); // => "n"
me.charCodeAt(0); // => 77: ASCII code for M
me.charCodeAt(me.length - 1); // => 110: ASCII code for n

// string padding
me.padStart(10); // => "  Morgan":  add spaces on the left to a length of 10
me.padStart(10, "*"); // => "**Morgan": add stars on the left to a length of 10
me.padEnd(10); // => "Morgan  ": add spaces on the right to a length of 10
me.padEnd(10, "-"); // => "Morgan": add dashes on the right to a length of 3

// Space trimming functions. trim() is ES5; others ES2019
" test ".trim() // => "test": remove spaces at start and end
" test ".trimStart() // => "test ": remove spaces on left. Also trimLeft
" test ".trimEnd() // => " test": remove spaces at right. Also trimRight

// miscellenaous string methods
me.repeat(3, "#"); // => "#####Morgan#####": repeat the string 3 times
me.concat("!"); // => "Morgan Bergen!"
console.log("concat".concat(" will this work")); // => "concat will this work"


/*
- remember that strinsg are immutable in javascript.
- methods such as replace() andtoUpperCase() return a new string.
- there are no methods that modify the original string on which they are invoked.
- strings can also be treated like read-only arrays.
- you can access individual characters of a string using the bracket notation instead of the dot notation.
*/

// charAt() method in [] notation

let str = "chemistry";
str.charAt(0); // => "c"
str[0]; // => "c"
(str.charAt(0) === str[0]); // => true

str.charAt(str.length - 1); // => "y"
str[str.length - 1]; // => "y"
(str.charAt(str.length - 1) === str[str.length - 1]); // => true

























