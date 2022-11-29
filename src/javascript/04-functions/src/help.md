# Question Help

Why am I getting the following type error from this code:

**Answer** The reason as to why is because you have binded the function to the variable.  This variable is not an object, but rather a variable that has bounded that function's return value.

```javascript
/**
 * @file express.js
 **/

// `const f =` := keyword is used to declare an immutable variable and assign a function object to it.
// `function factorial(x)` := function name with a singleton parameter sequence.
// `if (x <= 1) return 1;` := if the parameter is less than or equal to 1, else return x * itself and decrement x by 1.
const f = function factorial(x) { if (x <= 1) return 1; else return x * factorial(x - 1); };

console.log(f.factorial(55));
console.log(typeof (f));
```

```console
owner@morgan 03-functions % node express.js
/Users/owner/Documents/2022fall/eecs368/programming-language-paradigms/src/03-functions/express.js:21
console.log(f.factorial(55));
              ^

TypeError: f.factorial is not a function
    at Object.<anonymous> (/Users/owner/Documents/2022fall/eecs368/programming-language-paradigms/src/03-functions/express.js:21:15)
    at Module._compile (node:internal/modules/cjs/loader:1120:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1174:10)
    at Module.load (node:internal/modules/cjs/loader:998:32)
    at Module._load (node:internal/modules/cjs/loader:839:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:17:47

Node.js v18.7.0
```
