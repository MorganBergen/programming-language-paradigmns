# haskell sudoku example part 2

morgan bergen

eecs 368 programming language paradigms

dec 2 2022

evaulate the following functions:

1.  `prune [[[3], [1,2,4]], [[1,3], [3,4]]]`

`[[[3], [1,2,4]], [[1], [4]]]`

2.  `fix prune [[[5], [6,8], [[7], [7,8]]]

`[[[5], [6]], [[7],[8]]]`

3.  `blocked [[[3, 4], [], [3]], [[1], [1,2], [1]]]`

`True`

4.  `expand [[[1,2], [3]], [[4], [1,2]]]`

`[[[[1], [3]], [[4], [1,2]]], [[[,2], [3]], [[4], [1,2]]]`
