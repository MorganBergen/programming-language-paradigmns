# in-class problem

Morgan Bergen

EECS 368 programming language paradigmns

Mon Oct 24 23:22:13 CDT 2022

## Questions

The Haskeel library module Prelube provides a large number of standard functions.  In addition to the familiar numeric functions, the library also provides many useful functiosn on lists.  For example, `take` selects the first `n` elements of a list:

```Haskell
> take 3[1, 2, 3, 4, 5]
[1, 2, 3]
```

Knowing this, what is the result of these

```Haskell
double x = x + x
quadruple x = double (double x) 

take (double 2) [1, 2, 3, 4, 5, 6] -> [1, 2, 3, 4]
take (quadruple 2) [1, 2, 3, 4, 5, 6] -> [1, 2, 3, 4, 5, 6]
take (1 + 2) [1, 2, 3, 4, 5, 6] -> [1, 2, 3]
```
