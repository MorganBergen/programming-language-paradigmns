/*
The Global Object is the root of the JavaScript object hierarchy.
It is the default object when no other object is specified.
Object types, programmer defined objects, arrays, and functions are all objects.
One object is the Global Object, which is a regular object that serves a very specific role:
The properties of the Global Object are the globally defined identifiers that are available to a program.

When a interpreter starts, (or whenever a web browser loads a new page), it creates a new global object, and gives it an initial set of properties that define:
- Global Constants like NaN, Infinity, and undefined
- Global Functions like isNan(), parseInt(), eval()
- Constructor functions like Date(), RegExp(), String(), Object(), Array(), and Function()
- Global objects like Math and JSON.

The initial properties of the global object are not reserved words, but they deserve to be treated as though they are.  
In Node, the global object has a property named global whose value is the global object itself.
*/
console.log(global);
console.log(global.performance.nodeTiming);
console.log(global.performance.nodeTiming.name);
console.log(typeof globalThis);
console.log(typeof global);
console.log(typeof global.performance.nodeTiming.name);

/*
In Node, the global object has a property named global whose value is the global object itself, so you can always refer to the global object by the name global in Node programs.
In web browsers, the Window object serves as the global object for all JavaScript code contained in the browser window it represents. This global Window object has a self- referential window property that can be used to refer to the global object. The Win‐ dow object defines the core global properties, but it also defines quite a few other globals that are specific to web browsers and client-side JavaScript. Web worker threads (§15.13) have a different global object than the Window with which they are associated. Code in a worker can refer to its global object as self.

ES2020 finally defines globalThis as the standard way to refer to the global object in any context. As of early 2020, this feature has been implemented by all modern browsers and by Node.


*/

