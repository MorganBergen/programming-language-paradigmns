# Overview

Morgan Bergen

EECS 368 Programming Language Paradigms

Monday August 29 2022

## In-Class Problem

Show the output for the 2 line program

```
for (let = "-"; line.length < 7, line += "-") {
    console.log(line);
}
```

- Hint: line.length gives the length of the string named "line".
- Add comments to describe what each part of the for statement is doing.

## Answer

```
/*

for (initialization; condition; increment) {
    statement;
}

initialization: the variable line was initializaed with the str value "-"
condition: with line's initial length = 1, the function body will iterate based on the length of line with a maximum length of 6.
increment:  line will be reinitilaized after every iteration with a concatenated value of "-".

summary:  the following is a for loop that will iterate and increment the variable line and concatenate the string by an additional - until the line variable has "-" in it.

*/

for (let line = "-"; line.length < 7; line += "-") {
    console.log(line);
}


// => the following will be the output of the program

/*
-       framed var:  line.length = 1 START
--      framed var:  line.length = 2 ITERATE
---     framed var:  line.length = 3 ITERATE
----    framed var:  line.length = 4 ITERATE
-----   framed var:  line.length = 5 ITERATE
------  framed var:  line.length = 6 STOP
*/

```
