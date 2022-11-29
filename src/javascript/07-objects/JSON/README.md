# Objects

The most fundamental data type of JavaScript are it's objects.  In the following text we will outline a formal overview of objects, and then dives into practial sections about creating, querying, setting, deleting, testing, and then enumerating the properties of objects.  Properties in the following sections will explain how to extend, serialize, and define important methods on objects.  

## Intro to Objects
> A JavaScript object is mutable and is an arbirtary/unordered collection collection of _properties_ each of which has a name and a value.  

An object is an composite value:  which aggregates multiple values (primitive values or other objects) and allows you to store and retrieve those values by names.  Property names are most commonly strings, so we can say that objects map strings to values known as **string-to-value mapping** analogous to key value pairs in Python Disctionaries.  

An object is a string-to-value map that has its own set of properties, but also inherits the properties of another object known as a _prototype_.

_prototypal inheritance_ is a key feature of JavaScript that is essentially uis a method of an object that has inherited properties.  

```JavaScript
let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
// → false
console.log(day1.events);
// → ["work", "touched tree", "pizza", "running"]
```

Any value that is not a string, number, symbol, `true`, `false`, `null`, or `undefined` is an object.  And all objects are mutable can manipulated via reference rather than by variable.

**As you can see if a variable x refers to an object...**

```JavaScript
let x = {
    name: "Morgan",
    hungry: true,
}

let y = x;
y.name = "new name";
console.log(x.name);
```
...and the code `let y = x;` is executed, then the variable y holds a reference to the same object through the variable y are also visible through the variable x.  Thus making varible x and y refer to the same object.

Objects are intended to have their properties be created, have set, queried, deleted, tested, and enumerated upon.
## Properties
A property has a name and a value.  A property name may be any string, empty string, or symbol.  No objects have two properties with the same name.  The value may be any JavaScript value,, or it may be a getter or setter function.

```JavaScript
let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`);
}
rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'
```
**Property Attributes**

1. **writable** attribute specifies whether tha value of the property can be set.
2.  **enumerable** attribute specifies whether the property name is returned by a for/in loop.
3.  **configurable** attribute specifies whether the property can be deleted and whether its attributes can be altered.

By default all properties of objects that are created are writable, enumerable, and configurable.

## Object Literals
Object literals with the `new` keyword and with the `Object.create() function.

Object literals is way to create an object
- Is a comman-separated list of colon-separated name:value pairs enclosed with curly braces
- A property name is a JavaScript identifier or a string literal
- A property value is any JavaScript expression
    - the value expression may be a primitive value or an object value

A trailing comma following the last property in an object literal is legal and some programming styles encourage rthe use of these trailing commas so you're less likely to caus a syntax error if you add a new property at the end of the object literal at some later time.  

An object literal is an expression that creates and initializes a new and distinct object each time it's evaluated.
The value of each property is evaluated each time the literal is evaluated.
This means that a single object literal can create many new objects if it appears within the body of a loop or in a function that is called repeatedly and that the property values of these objects may differ from each other.  

```JavaScript
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
```
### `new` keyword for object initialization

The `new` operator must be followed by a function invocation.  A function used in this way will be refered to as a _constructor_ and serves to initialize a newly created object.  JavaScript includes constructors for its built-in types.

For example:


### Prototypes

An object’s prototype attribute specifies the object from which it inherits properties. (Review §6.2.3 and §6.3.2 for more on prototypes and property inheritance.) This is such an important attribute that we usually simply say “the prototype of o" rather than “the prototype attribute of o.” Remember also that when prototype appears in code font, it refers to an ordinary object property, not to the prototype attribute: Chapter 9 explained that the prototype property of a constructor function specifies the prototype attribute of the objects created with that constructor.

```JavaScript
Object.getPrototypeOf({});
Object.getPrototype([]);
Object.getPrototypeOf(()=>{});
```

You can set properties (aka private or public member variables/methods) and you can also set prototypes of those objects.  A prototype is in essence another object that is used as a fallback source of properties

### Object.create()

Object.create() creates a new object using its first argument as the prototype of that object

```JavaScript

let inherited_ob = Object.create({ key0: "value0", key1: "value1"});
console.log(inherited_obj.key0 + inherited_obj.key1);

```

### Querting and Setting Properties
### Objects as Associative Arrays
### Inheritance
### Property Access Errors
### Deleting Properties
### Testing Properties
### Enumerating Properties
### Property Enumeration Order
### Extending Obejcts
### Serializing Objects
### Object Methdods
### The toString() Method
### The toLocaleString() Method
### The valueOf() Method
### The toJSON() Method
### Extended Object Literal Syntax
### Shortand Properties
### Computed Property Names
### Symbols as Property Names
### Spread Operator
### Sorthand Methods
### Property Getters and Setters