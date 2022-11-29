# program structure

Expressions, statements, bindings, binding names, the enviroment, functiosn, the console.log function, return values, control flow, condition execution, while and do loops, indenting code, for loops, breaking out of a loop, updating bindings succinctly, dispatching on a value with switch, capitalization, and comments will consist of the following readme.

## expressions and statements

Code blocks that produce values are called pressions.
Every values that is weitten literally is an expression.
An expression between parentheses is an expression even with unary or binary opperators applied in-between.
If an expression corresponds to a sentence fragment a statement coressponds to a full statement.

ex of expression

```
1;
!false;
```

A statement is one that changes the internal state of the machine in a way that will affect the statements that come after it. Changes are called **side-effects**.

## binding / variable

```
let name = value;
var name = value;
const immutable = value;
```

How does a program keep its interal state? How does it remember things? It is possible to produce new values from old values. To catch and hold values, JavaScript provides a thing called binding also known as a variable.

```
let caught = 5 * 5;
```

`let` is a keyword literal notifying to the compiler that we will store a value within a varibale.
`=` is the assignment operator which binds the value to the variable.
`=` can be used multiple times against the same variable to disconnect values from preexisting bindings.

Bindings grasp onto values by refering to them.
A program can access only the values that it still has references to.

```
let something;
console.log(something);
// => undefined

const imm = "immutable";
imm = 21;
// => TypeError: Assignment to constant variable.
```
