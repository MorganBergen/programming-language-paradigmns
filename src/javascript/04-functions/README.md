# Functions

_function_ / _subroutine_ / _procedure_ is a block of code that is defined once, but may be executed or _invoked_ any number of times. JavaScript fnctions are _parameterized_: meaning a function definition may include a list of identifiers known as _parameters_ that work as local variables for the body of the function. _Invocations_ provide values, or _arguments_ for the function's parameters and are used to compute a _return value_ that then becomes the value of the function-invocation expression. In addition to the arguments, each invocation has another value—the invocation context— that is the value of the this keyword.

Functions that are assigned to a property of an object is known as a _method_ of that object. When the function is invoked _on_ or _through_ an object, that object is the invocation context or the _this_ value for the function. Functions designed to initilize a newly created object are called _constructors_.

All functions are objects and they can be manipulated by programs. JavaScript can assign functions to variables and pass them to other functions. Functions are objects, meaning you can set properties on them and even invoke methods on them.

_Closures_ are functions that are nested within other functions, and they have access to any variables that are in the scope for which they are defined.

## 0. Design Paradigm
Functions are very important to JavaScript, because the language was designed to support the function-oriented design paradigm.  A paradigm is an example or pattern that that can be copied.  Paradigms consist of "a set of assumptions, concepts, values, and practices that constitutes a way of viewing reality for the community that shares them, especially in an intellectual discipline."  When applied to software development, a paradigm guides the way that developers view a given problem and organize the solution.

## 1. Defining Functions

**aspects of defining functions**

- declarations
- expressions
- arrow functions
- nested functions

`function` keyword can be used as a declaration or an an expression for defining a function. \_Arrow functions" are also a way to compact syntax and are useful when passing one function as an argument to another function. In object literals and class defiitions, there is a shorthand syntax for defining methods. This shortand is equivalent to using a function definition expression and assigning it to an object property using the basic `name:vale` object literal syntax. You can use keywords `get` and `set` in object literals to define special property getter and setter method.

Function declarations is that the name of the function becomes a variable whose value is the function itself. Every function without an explicit return statement returns the value undefined. Implicitly speaking returning the value undefined as shown below will always be called by the compiler if one doesnt include a return statement. The value of identifier() is therefore undefinied.

### **`function`** components to declarations

```javascript
function identifier(parameter1, parameter2) {

  // statements for execution upon invocation

  return undefined;
}

```

1. **`function identifier( , , ) { `** that names the function also known as a variable. The name is a required part of function declarations and is used to be the name of a variable, the newly defined function object is assigned to the variable.

2. **`( , , )`** A pair of parenthese around a comma-separated list of zero or more identifiers. These identifiers are the parameter names for the function, and they behave like local variables within the body of the function.

3. **`{ ... }`** A pair of curly braces with zero or more JavaScript statements inside. These statements are the body of the function: they are executed whenever the function is invoked.

When you use the declaration form, the function objects are created before the code that contains them starts to run.  

### **`function`** expressions

Function expressions are similar to declarations, however they appear within the context of a larger expression or statement, and the name of the function is optional.

```javascript
// function expression
const square = function(x) {return (x*x)};
// const indicates immutablility
// square is the var name of the function
// function(x) is the type of square
```

A function expression does not declare a variable:  it is up to you to assign the newly defined function object to a constant or variable if you are going to need to refer to it multiple times.  A name is allowed for functions.  Now if a function expression inclues a name, the local function scope for that function will include a binding of that name to the function object.  **In effect, the function name becomes a local variable within that function!!**

```javascript

// function name is f()
// invoke f() outside of the scope
const f = function fact(x) {
  // function name is fact()
  // invoke fact() within the scope
  if (x <= 1) {
    return (1);
  } else {
    return (x * fact(x - 1));
  }
}

```

There is an important difference between defining a function f() with a function declaration and assigning a function to the variable f after creating it as an expression.  These functions do not exist until the expression that defined them are actually evaluated.  In order to invoke a function, you must be able to refer to it and you can't refer to a function defined as an expression until it is assigned to a variable, so functions defined with expressions cannot be invoked before they are defined.  




## 2. Invoking Functions

Functions are invoked as functions or as methods with an invocation expression
An invocation expression consists of a function expression that evaluates to a function object, followed by an open parenthesis, a comma-separated list of zero or more argument expresssions, and a close parenthesis.

```javascript
//function invocation expression

```

- You can define functions with the `function` keyword and with the ES6 `=>` arrow syntax.
- You can invoke functions, which can be used as methods and constructors.
- Some ES6 features allow you to define default values for optional function parameters, to gather multiple arguments into an array using a rest parameter and to destructure object and array arguments into function parameters.


## Arrow Functions

- When there is only one parameter name, you can omit the parentheses around the parameter list
- If the body is a single expression, rather than a block in braces, that expression will be returned from the function
- So if the two definitions of square do the same exact thing...

```JavaScript
const square1 = (x) => {return x*x};
const square2 = (x) => x*x;
```

## Variable Function Binding

- Typically a `function binding` usually simply acts as a name for a specific piece of the program.
- Such a binding is defined once and never changed, i.e. it is a constant, like a constant variable
- However in JavaScript a function binding that holds a function is still just another regular binding can be assigned a new value like so...

```JavaScript
let launchMissiles = function() {
	missileSystem.launch("now");
};
if (safeMode) {
	launchMissiles = function() {/* do nothing */};
}
```

## Recursion

javaScript supports recursion

```JavaScript
function power(base, exponent) {
	if (exponent == 0) {
		return 1;
	} else {
	 	return base * power(base, exponent - 1);
	}
console.log(power(2, 3));
// -> 8
```

Recall that recursion allows you to express a function closer to the way mathematcians define a function.  Sometimes recursion describes a concept more clearly than the looping variant.  However in typical JavaScript implementations, it's about three times slower than looping over somthing.

## Functios and Side Effects

Functions can be roughly divided into those that are called:

- for their side effects
- for their return value

Though it is differently possible to both have side effects and return a value.  
**For example**

```JavaScript
function printZeroPaddedWithLabel(number, label) {
	let numberString = String(number);
	while (numberString.length < 3) {
		numberString = "0" + numberString;
	}
	console.log(`${numberString} ${label}`);
}
printZeroPaddedWithLabel(1, "hello");
```

## Bindings and Scrope

Each binding (e.g. variable or function) has a scope, which is a part of the program.  Same as C++ and all other languages scopes are defined by whether the binding is defined.  For bindings dined outside of any function or block of code, the scipe is the whole program.  Local scopes can only be accessed with from that function.  This provides some isolation between functions - each function call acts in its own little world (its local enviroment) and can often be understoon without knowing a lot about what's going on in the global enviroment.

- Bindingds decalred with `let` and `const` are in fact local to the block that they are declared in, so if you create one of those inside of a loop, the code before adn after the loop cannot "see" it.
- Bindingds declared with `var` are visible throughout the whole function (not just block) that they appear in-or throughout the global scope, if they are not in a function.

**Scope Definitions**
- inside a function
- inside a block of code delimited by curly braces {}


```JavaScript
let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
	// -> 60
}
// y is not visible here
console.log(x + z);
// -> 40
```

## Nested Scope

JavaScript distinguishes not only just global blocks and functions can be created inside otehr blocks and function, producing multiple derees of locality, or nested scopes. 

For example, the hummus function - outputs the ingredients needed to make a batch of hummus - has another function inside of it called ingredient

- The code inside the ingredient function can see the factor binding from the outer function.
- Its local bindings, such as unit or ingredientAmount, are not visible in the outer function

```JavaScript
const hummus = function(factor) {
	const ingredients = function(amount, unit, name) {
	let ingredientAmount = amount * factor;
	if (ingredientAmount > 1) {
		unit += "s";
	} console.log(`${ingredientAmount} ${unit} ${name}`);
ingredient(1, "can", "chickpeas");
ingredient(0.25, "cup", "tahini"); 
ingredient(0.25, "cup", "lemon juice"); 
ingredient(1, "clove", "garlic"); 
ingredient(2, "tablespoon", "olive oil"); 
ingredient(0.5, "teaspoon", "cumin");
};
```
Note that a host environment is a particular choice of definition for all host-defined facilities. A host environment typically includes objects or functions which allow obtaining input and providing output as host-defined properties of the global object.

## Summary

- Function-oriented design paradigm vs. object-oriented paradigm

```JavaScript

// Define f to hold a function value
const f = function(a) {
	console.log(a + 2);
};


// Declare g to be a function
function g(a, b) {
	return a * b * 3.5;
}

// A less verbose arrow function
let h = a => a % 3;

```

In regards to scope each block creates a new scope.  Parameters and bindings declared in a given scope are local and not visible from the outside.  Bindings declared with var behave differently - they end up in the nearest function scope or the global scope.



























