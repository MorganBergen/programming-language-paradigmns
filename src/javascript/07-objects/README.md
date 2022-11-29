# The Secret Life of JavaScript Objects

[#table of contents](#table-of-contents)
1. [review](#review)
2. [methods](#methods)
3. [this keywork](#this-keyword)
4. 

## review

A javascript object is an arbitrary collection of properties.  One way to create an object is by using braces as an expression.  Inside the braces, there is a list of properties separated by commas.  Each property has a name followed by a colon and a value.

```JavaScript
let day1 = {
	squirrel: false,
	events: ["worked", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
// -> false
console.log(day1.events);
// -> Array(4)["work", "touched tree", "pizza", "running"] 
```

## methods

Recall that properties that contain functions are called methods.  Here is an example of a simple method

```JavaScript
let rabbit = {};
rabbit.speak = function(line) {
	console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive");
// -> the rabbit says 'I'm alive'.

/*
 * when you are writing something inside ${} in a Template Literal, 
 * its result will be computed, converted to a string, 
 * and included at that position
 */
```

## this keyword

Usually a method needs to do something with the object it was called on.  When a function is called as a method the binding called `this` in its body automatically points at the object that it was called on.

```JavaScript
function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers," + "how late it's getting");

hungryRabbit.speak("I could use a carrot right now.");

speak.call(hungryRabbit, "I could use a carrot right now.");
```

Now arrow functions are different.  They do not bind their own this but can see this binding of the scope around them.  Thus you can do something like the following code, which references `this` from inside a local function:

```JavaScript
function normalize() {
	console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});
// -> [0, 0.4, 0.6]
```

If I had written the argument to map usingthe function keyword, the code wouldn't work.

## Prototypes

In addition to their set of properties, most objects also have a prototype.  A prototype is another object that is used as a fallback source of properties.  When an object gets a request for a property that it does not have, its prototype will be searched for the property, then the prototype's prototype, and so on.  This is an example of _inheritance_.  The prototype relations of JavaScript objects form a tree-shaped structure, and at the root of this structure sits Object.prototype.  It provides a few methods that show up in all objects, such as toString, which converts an object to a string representation. 
`Function.prototype`, `Array.prototype`, `Number.prototype` are built-in prototypes with their own set of default properties and methods.









