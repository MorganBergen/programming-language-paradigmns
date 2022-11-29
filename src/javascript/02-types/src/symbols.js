/*
Symbols
Javascripts fundamenatal Object type is an unordered collection of properities.  Each property has a name and a value.
Property names are typically strings, but they can be any value at all.  Symbols are served as non-string property names.  Each property has a name and a value
*/

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


/*
The symbol types does not have literal syntax.  In order to object a symbol values you call the Symbol() function .
toString() is the only interesting method of Symbol instances. There are two other Symbol-related functions you should know about, however. Sometimes when using Symbols, you want to keep them private to your own code so you have a guarantee that your properties will never conflict with properties used by other code. Other times, however, you might want to define a Symbol value and share it widely with other code. This would be the case, for example, if you were defining some kind of extension that you wanted other code to be able to participate in, as with the Symbol.iterator mechanism described earlier.
*/

let green = Symbol("xxxxx"); // => Symbol(xxxxx)
let x = Symbol("sym_x"); // => Symbol(sym_x)
console.log("TO STRING", x.toString()); // => Symbol(sym_x)
console.log(Symbol.for("sym_x")) // => Symbol(sym_x)
console.log(Symbol.keyFor(x)) // => sym_x
console.log(Symbol.keyFor(green)) // => xxxx

console.log(green);
console.log(typeof green);
console.log(green.toString());

/*
JavaScript defines a 
*/

// Javascript defines a global Symbol registry
let s = Symbol.for("green");
let t = Symbol.for("yellow");
console.log(s === t); // true
s.toString(); // "Symbol(shared)"
t.toString(); // "Symbol(shared)"
console.log(Symbol.keyFor(s)); // "shared"
console.log(Symbol.keyFor(t)); // "shared"