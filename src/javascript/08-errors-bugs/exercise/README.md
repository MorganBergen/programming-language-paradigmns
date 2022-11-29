# Overview 

Programming Language Paradigms

Morgan Bergen

September 12 2022

Bugs & Debugging 

## In-Class Problem

> "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it." 
>
>  – Brian Kernighan and P.J. Plauger, The Elements of Programming Style

## Questions

```JavaScript
function promptDirection(question) {
    let result = prompt(question);
    if (result.toLowerCase() == "left") return "L";
    if (result.toLowerCase() == "right") return "R";
    throw new Error("Invalid direction: " + result);
}

function look() {
    if (promptDirection("Which way?") == "L")
        return "a house";
    else
        return "two angry bears";
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}
```

What is the console output of this program, if you type:

**1.  Left**

`// → You see "a house"`

**2.  RIGHT**

`// → You see "two angry bears"`

**3.  UP**

`// → Something went wrong: Error: Invalid direction: UP`

**4.  List in order the statements executed by JavaScript for No. 1 above**

In order for the interpreter to execute all of the code...

`look()`

`promptDirection()` 

`toLowerCase() == left`

`promptDirection() == "L"`

 gets called in order to return...

`// → You see "a house"`

**5.  List in order the statements executed by JavaScript for No. 2 above**


In order for the interpreter to execute all of the code...

`look()`

`promptDirection()` 

`toLowerCase() == right`

`else {} / promptDirection() != "L"`

 gets called in order to return...

`// → You see "two angry bears"`

**6.  List in order the statements executed by JavaScript for No. 3 above**

In order for the interpreter to execute all of the code...

`look()`

`promptDirection()` 

`Something went wrong: Error: Invalid direction: UP`

 gets called in order to return...

`// → Something went wrong: Error: Invalid direction: UP`