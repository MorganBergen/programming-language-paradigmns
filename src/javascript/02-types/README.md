# types, variables, and values

## overview of the language

- Javascript is an imperative programming language
- Within JavaScript there are multiple Domain Specific Languages:

  - JavaScript Support Vector Graphics (SVG)
  - JavaScript Canvas

- explaination of the fundamental details about how data is represented and manipulated in JavaScript
- supported data types is the most fundamental characteric of any programming language.
- the way variables work is the second most fundamental characteric as well.
- JavaScript was introduced in 1995 as a new way to add programs to web pages in the Netscape Navigator browser.
- The language has been adopted by all other major graphical web browers ever since
- Modern web applications interact directly without doing a page reload for every action.
- Javascript has nothing to do with the Java programming language. The only reason why it has the same name is for marketing techniques.
- ECMAScript standard after the Ecma international organization that did its standardization.
- [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript)
- ECMAScript and JavaScript are two names for the same language

### Data Types

1.  Primitive Data Types

    > Primitive types are immutable values and everything but null & undefines have methods attached to them that can be invoked!

    - numbers
    - strings
    - boolean truth values
    - undefined
    - null
    - symbols

2.  Object Data Types

    > An object is a mutable data type and is a member of the type object is a collection of properties where each property has a name and a value, either a primative value, or another object. There are global object types or ordinary object types.

    - Arrays
    - Sets
    - Map
    - RegExp
    - Date
    - Error
    - Function
    - Class

- Magic Methods

        let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        a.sort();
         // to sort the elements of an array a for example we don't pass a to a sort function,
         // instead we invoke the sort method of a...

3.  Memory Management

    > javascript interpreter performs automatic garbage collection for memory management

    - destruction & deallocation of objects or other values is done automatically
    - garbage collection will be performed when a porgram no longer has any way to refer to a variabl and will then reclaim the RAM memory it was previously occupying.

4.  Object Orientation in JavaScript

    > The best part of OOP is the fact that globally defined functions become a thing of the past...

- equality operator

        == // performes implicit type conversion

- strict equality

        === // does not perform type conversions

### Constants and Variables

> Are programmer dsefined names used to refer to certain values. Constants and varibale declarations are untyped meaning declarations do not specify what kind of value will be assigned in the future.

1.  constants declaration

        const name = "data";

2.  variables declaration

        let name; // new style
        var name; // old style

## Numbers

> Numbers are primary numeric type in javascript and represented by floating point numbers. All numbers can represent all integers between (-2^53) and (2^53 \* 1)

1.  integer literals

        0
        3
        100000

2.  hexadecimal literals

        0x0 // = 0
        0xff // = 255
        0xBADCAFE // = 195939070

3.  binary literals

        0b0 // = 0
        0b1010 // = 10
        0b10101 // = 21 (1* 16 + 0* 8 + 1* 4 + 0* 2 + 1\* 1)

4.  octal literals

        0o377 // = 255 (3* 64 + 7* 8 + 7* 4 + 7* 2 + 7\* 1)

5.  floating points

        0.1 // = 0.1
        0.1e2 // = 1.0
        0.1e-2 // = 0.001

6.  exponential notation

          1.0e+2 // =  100.0
          [digits][.digits][(E|e)[(+|-)]digits]

7.  separators

        let billion = 1_000_000_000;
        let bytes = 0x89_AB_CD_EF;   // =  0x89ABCDEF
        let factions = 0.123_456_789;   // =  0.123456789
        // separators in numeric literals _ you can use underscores within numbers to separate digits _ separators are implemented by all major browsers and by Node.js

### Arithmetic in Javascript

1.  basic arithmetic

         +     // addition
         _      // subtraction
         *      // multiplication
         **     // exponentiation
         /      // division
         //     // integer division
         %      // modulus
         ++     // increment
         --     // decrement

2.  complex arithmetic

        let power = Math.pow(2, 53); // => 9007199254740992: 2 to the power of 53   (2 ** 53)
        let round = Math.round(.6); // => 1: round to the nearest integer
        let ceiling = Math.ceil(.6); // => 2: round up to the nearest integer
        let floor = Math.floor(.6); // => 0: round down to the nearest integer
        let absolute = Math.abs(-5); // => 5: absolute value of -5
        let largest = Math.max(1, 2, 3, 4, 5); // => 5: largest value of 1, 2, 3, 4, 5
        let smallest = Math.min(1, 2, 3, 4, 5); // => 1: smallest value of 1, 2, 3, 4, 5
        let pseudo_random = Math.random(); // => 0.5: random number between 0 and 1
        let sqrt = Math.sqrt(25); // => 5: square root of 25
        let cube = Math.cbrt(8);  // => 2: cube root of 8
        let sin = Math.sin(90);   // => 1: sine of 90
        let cos = Math.cos(90);  // => -1: cosine of 90
        let tan = Math.tan(90); // => Infinity: tangent of 90
        let logarithm = Math.log(1024); // => 10: logarithm of 1024
        let log2 = Math.log2(1024); // => 10: logarithm of 1024 to the base 2
        let π = Math.PI; // => 3.141592653589793: pi
        let e = Math.E; // => 2.718281828459045: e
        let φ = Math.PHI; // => 1.618033988749895: phi
        let ψ = Math.PSI; // => 1.618033988749895: psi
        let ω = Math.OMEGA // => 1.618033988749895: omega

- Some complex aritnmetic does not raise errors in cases of overflow, underflow, or division by zero.

- Overflow/Underflow: When the result of an operation is larger/smaller than the largest/smallest representable number (overflow), the result is a special infinity value.

        INFINITY
        -INFINITY

- Negative Underflow: If underflow occurs from a negative number, JavaScript returns a special value known as “negative zero.”

        -0

- Division by Zero: When the result of an operation is divided by zero.

        ∞
        -∞

- Not a Number: When the result of an operation is not a number.
  NaN

### Dates and Times

- Javascript has a Date object that represents a point in time.
- They have a numeric value that represents the number of milliseconds since January 1, 1970.
- The Date object has methods that allow you to manipulate the date

        let timestamp = Date.now();
        let now = new Date();
        let ms = now.getTime();
        let iso = now.toISOString();

        function show() {
            console.log(timestamp); // => 1545010989801
            console.log(now);       // => Mon Jan 01 1970 00:00:00 GMT+0000 (GMT)
            console.log(ms);        // => 1545010989801
            console.log(iso);       // => 1970-01-01T00:00:00.000Z
        }

        show()

## Strings

> A string is an immutable ordered sequence of 16 - bit values, each of whcih typically represents a unicode character.

- the length of a string is a number of 16 - bit values it contains
- strings and arrays do zero base indexing
- strings are iterable

1.  UTF-16

         let euro = "€";
         let heart = "♥";
         console.log(euro.length); // => 1
         console.log(heart.length); // => 1

2.  String Literals

        let empty = ""; // => "" (empty string)
        let single = 'single'; // => 'single'
        let double = "double"; // => "double"
        let unicode = "I'm 💩"; // => "I'm 💩 " || "I am shit"
        let inside = 'name="value"'; // => name="value"

3.  Interpolated Strings

        // multi line strings
        let multi = 'two\nlines';

        // three lines
        let three = "one\
                     long\
                     line";

        let two = `the newline character at the end of this line is included literally in this string`;

4.  Client-side javascript programming

- when combining HTML and JavaScript it is a good iea to use one style of quotes for JavaScript and the other for HTML.
- the style of quotes used for HTML is most commonly called double quotes and the style of quotes used for JavaScript is called single quotes.

      < button onclick = "alert('Thank you')" > Click Me </button >

5.  Escape Sequences in String Literals

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

6. Working with strings

- string concatenation

        let name = "Morgan";
        let message = "Hello, " + "world"; // => "Hello, world!"
        let greeting = "Welcome to my site " + " " + name; // => "Welcome to my site, visitor!"

- string comparison

> coparison is done simply by comparing the 16 - bit values.

        let company = "Google";
        let same_company = "Google";
        let different_company = "Microsoft";

        console.log(company === anotherCompany); // => true
        console.log(company !== different_company) // => true
        console.log(company > different_company) // => false
        console.log(company < different_company) // => false
        console.log(company >= different_company) // => false
        console.log(company <= different_company) // => false
        console.log(company == same_company) // => true
        console.log(company != different_company) // => true

- string length

        let me = "Morgan";
        console.log(me.length); // => 5

- substring, slice, split

        let me = "Morgan Bergen";
        me.substring(1, 4); // => "org"
        me.slice(1, 4); // => "org" same as substring
        me.slice(-3); // => "erg" last three characters
        me.slice(-3, -1); // => "er" last three characters, but not the last character
        me.slice(1); // => "orgen" from the second character
        me.split(", "); // => ["Morgan", "Bergen"]

- string search

        let me = "Morgan Bergen";
        me.indexOf("Morgan"); // => 0 position of the first occurrence of the substring
        me.indexOf("M", 3); // => 3rd position of the first occurrence of the substring
        me.indexOf("zz"); // => -1: zz does not include in the string
        me.lastIndexOf("B"); // => 6: last position of the first occurrence of the substring

- boolean searching fucntions

        let me = "Morgan Bergen";
        me.includes("Morgan"); // => true
        me.startsWith("B"); // => false
        me.endsWith("en"); // => true
        me.includes("org"); // => true
        me.includes("zz"); // => false

- creating modified versions of strings

        let me = "Morgan Bergen";
        me.replace("Morgan", "David") // => "David Bergen"
        me.toLowerCase(); // => "morgan bergen"
        me.toUpperCase(); // => "MORGAN BERGEN"
        me.normalize(); // => "Morgan Bergen"
        me.normalize("NFD"); // => "Morgan Bergen"

- inspecting individual characters of strings

        let me = "Morgan Bergen";
        me.charAt(0); // => "M"
        me.charAt(me.length - 1); // => "n"
        me.charCodeAt(0); // => 77: ASCII code for M
        me.charCodeAt(me.length - 1); // => 110: ASCII code for n

- miscellaneous string methods

        let me = "Morgan Bergen";
        me.repeat(3, "#"); // => "#####Morgan#####": repeat the string 3 times
        me.concat("!"); // => "Morgan Bergen!"
        "concat".concat(" will this work")); // => "concat will this work"

- bracket notation equivalence
  Strings can also be treated like read-only arrays, whereby you can access individual characters of a string using the bracket notation instead of the dot notation.

        let str = "chemistry";
        str.charAt(0); // => "c"
        str[0]; // => "c"
        (str.charAt(0) === str[0]); // => true
        str.charAt(str.length - 1); // => "y"
        str[str.length - 1]; // => "y"
        (str.charAt(str.length - 1) === str[str.length - 1]); // => true

- remember that string are immutable in javascript. Thus, methods such as replace() andtoUpperCase() return a new string.
- There are no methods that modify the original string on which they are invoked.

7.  Template Literals
    In [ES6](https://en.wikipedia.org/wiki/ECMAScript) and later, string literals can be delimited with backticks.
    This is more than just another string literal syntax, it is a template literal which can include arbitrary expressions.
    The final value of a string literal in backticks is computed by evaluating any included expressions, converting the values of those expressions to strings and combing those computed strings with the literal characters within the backticks.
    Everything between the ${ name } is interpreted as an expression and everything outside is interpreted as literal characters of type string.
    The expression is evaluated and the result is converted to a string, and inserted into the template, replacing the dollar sign, the curly braces, and everything in between them.

        let string_name = "Khaled";
        let template_message = `Hello ${name} how are you?`;
        console.log(template_message)   // ==> Hello Khaled how are you?

Template literals can hold expressions and convert them to strings

        console.log(`${true + false === true}`)

Even `functions()` can be inserted into template literals

        function looping(size) {
            let output = "";
            for (let i = 0; i < size; i++) {
                output += `${i}  `;
            }
            return (output);
        }

        console.log(`${looping(10)}`); // => "0 1 2 3 4 5 6 7 8 9 "

8.  Tagged Template Literals
    Tagged template literals are a new feature in ES6. They are a way to use string literals to include expressions in the string. They're similar to template literals, but they use a tag to indicate where the expression should be inserted. The tag can be any string, but it is common to use a variable name Tagged templates are commonly used to apply HTML or SQL escaping to the values before substituting them into text.

        // The built-in function String.raw() returns the text within backticks without any processing of backslash escapes:
        console.log(`\n`.length); // => 1: the string has a single newline character
        console.log(String.raw`\n`.length); // => 2: a backslash charactre and the letter n
        console.log(String.raw`\n`); // => "\n": the string will output the letter n
        console.log(String.raw`morgan bergen`); // => "morgan bergen": the string will output the word "morgan

The ability to define your own template tag functions is powerful feature in JavaScript.

> :warning: **NOTE REGARDING SYNTAX**: Even though the tag portion of the tagged template literal `String.raw` is a function, there is no parenthese around it in its invocation. This is a very specific case, the backtick characters replace the open and close parentheses.

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

9.  Pattern Matching
    JavaScript deifne a datatype known as a regaular expression === RegExp RegExp is for describing and matching patterns in strings of text. RegExp is a special type of object and has methods like numbers and strings. The syntax is complex and can be hard to understand, so more indepth details will be provided later in this repo. However here is a brief overview of the RegExp syntax:

        /^HTML/;            // matches the string "HTML" at the start of a string
        /[1-9][0-9]*/;      // match a nonzero digit, followed by any $ digits
        /\bjavascript\b/i;  // match "javascript" as a word, case-insensitive

RegExp objects define a number of useful methods and strings also have methods that accept RegExp arguments.

        let text = "testing: 1, 2, 3";
        let pattern = /\d+/g;

        console.log(pattern.test(text)); // => true
        console.log(text.search(pattern)); // => 5: the first match is at index 5
        console.log(text.match(pattern)); // => ["1", "2", "3"]: the first match is at index 5
        console.log(text.replace(pattern, "@")); // => "testing: @, @, @": the first match is at index 5
        console.log(text.split(/\D+/)); // => ["testing", "1", "2", "3"]: the first match is at index 5
        console.log(`\n\n`); // => "0  1  2  3  4  5  6  7  8  9  ": the first match is at index 5

## Boolean Values

Booleans are reserved by lowercase true and false.
0 === false;
1 === true;

Booleans primarily serve to indicate the state of something, specifally the state of a condition. Therefore the primitive data type booleans are utilized in for control structures in most programs.

        if (true !== false) {
            console.log("condition is true");
        } else {
            console.log("condition is false");
        } // => "condition is true"

Any JavaScript value can be converted to a boolean. Objects and arrays convert and work like true.

        if (undefined === false ||
            null === false ||
            0 === false ||
            "" === false ||
            NaN === false ||
            " " === false ||
            "0" === false ||
            "false" === false ||
            false === false) {
            console.log("All of these values are considered false");
        }

1. Falsy Values

- undefined
- null
- 0
- ""
- NaN
- " "
- "0"
- "false"
- false

2. Truthy Values

- any non-falsey value
- arrays with at least one element
- objects with at least one property

3.  Implict vs Explicit conversion for booleans

        o = null;

        if (o !== null) {
            console.log("explicitly checking for null is more restrictive, but less simplistic");
        }

        if (o) {
            console.log("implicitly checking for null is less restrictive, but more simplistic");
        }

4.  Boolean Operators

- && (and)
- || (or)
- ! (not)

        let x = 0;
        let y = 0;
        let z = 1;

        if ((x === 0 && y === 0) || !(z === 0)) {
            console.log(`x is ${x} and y is ${y}`);
        }

## Symbols

Javascripts fundamenatal Object type is an unordered collection of properities. Each property has a name and a value.
Property names are typically strings, but they can be any value at all. Symbols are served as non-string property names. Each property has a name and a value

        let string_name = "string name";
        let symbol_name = Symbol("property name");
        console.log(`object data type of string_name is ${typeof (string_name)}`);
        console.log(`object data tyype of symbol_name is ${typeof (symbol_name)}`);

        let object_name = {};
        object_name[string_name] = "string value";
        object_name[symbol_name] = "symbol value";
        console.log(`object_name[string_name] is ${object_name[string_name]}`);
        console.log(`object_name[symbol_name] is ${object_name[symbol_name]}`);
        console.log("object_name is ", object_name);

The symbol types does not have literal syntax. In order to object a symbol values you call the Symbol() function .
toString() is the only interesting method of Symbol instances. There are two other Symbol-related functions you should know about, however. Sometimes when using Symbols, you want to keep them private to your own code so you have a guarantee that your properties will never conflict with properties used by other code. Other times, however, you might want to define a Symbol value and share it widely with other code. This would be the case, for example, if you were defining some kind of extension that you wanted other code to be able to participate in, as with the Symbol.iterator mechanism described earlier.

        let green = Symbol("xxxxx"); // => Symbol(xxxxx)
        let x = Symbol("sym_x"); // => Symbol(sym_x)
        console.log("TO STRING", x.toString()); // => Symbol(sym_x)
        console.log(Symbol.for("sym_x")) // => Symbol(sym_x)
        console.log(Symbol.keyFor(x)) // => sym_x
        console.log(Symbol.keyFor(green)) // => xxxx

        let s = Symbol.for("green");
        let t = Symbol.for("yellow");
        console.log(s === t); // true
        s.toString(); // "Symbol(shared)"
        t.toString(); // "Symbol(shared)"
        console.log(Symbol.keyFor(s)); // "shared"
        console.log(Symbol.keyFor(t)); // "shared"
