# Overview

Morgan Bergen

EECS 368 Programming Language Paradigms

Friday August 25 2022

### Questions

Evaluate these expressiosn as Javascript would:

1. `2.99e+1`

   `console.log(2.99e+1);`

   `=> 29.9`

   - the reason for this is becasue e indicates scientific notation for an exponent
   - for example 2.998e8 = 2.998 x 10^8 = 299,800,000

1. `100 + 4 \* 11`

   `console.log(100 + 4 * 11);`

   `=> (100 + (4 * 11))`

   `=> (100 + 44)`

   `=> (144)`

   - When operators appear together without parentheses, the order in which they are applied is determined by the precedence of the operators.
   - Therefore when multiple operators with the same precedence appear right next to each other, as in 1 - 2 + 1 they are always applied left to right: (1 - 2) + 1
   - It's good standard practice to use parentheses.

   **levels of precedence**

   1. `\*\*`
   1. `\*, /, %`
   1. `+, -`

1. `100 + 4 \* 11 \*\* 2`

   `console.log(100 + 4 * 11 ** 2);`

   `=> (100 + (4 * (11**2)))`

   `=> (100 + (4 * (121)))`

   `=> (100 + (4 * (121)))`

   `=> (100 + 484)`

   `=> (584)`

1. "In" + '-' + `Problem`

   `console.log("In" + '-' + `Problem`);`

   `=> In-Problem`

   - string concatenation happens with the plus operator

1. -101/0

   `Infinity`

1. `"one or two\\nlines"`

   `console.log("one or two\\nlines");`

   `=> one or two\\nlines`

   `console.log("one or two\nlines");`

   `=> one or two`

   `lines`

1. `half of 50 is: ${50/2}`

   `console.log('half of 50 is: ${50 / 2}');`

   `=> half of 50 is: 25`

1. `-(10 - 21)`

   `console.log(-(10 - 21));`

   `=> 11`

1. `(2>3) || (4<=4) && (3!=3)`

   `console.log(((2>3) || (4<=4) && (3!=3)))`

   `=> false`

1. `3 > 2 ? 1 : 2`

   `console.log(3 > 2 ? 1 : 2)`

   `=> 1`
