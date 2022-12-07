# haskell list comprehension

in-class problem

eecs368 programming language paradigms

morgan bergen

fri nov 4 22:52:23 CDT 2022

## question

1.  using a list comprehension, give an expression that calculates the sum of the first one hundred integer squares:

1^2 + 2^2 + 3^2 + ... + 100^2

```haskell

sum [x^2 | x <- [1..100]]

```

2.  A triple (x, y, z) of positive integers is called pythagorean if x^2 + y^2 = z^2.  Using a list comprehension, define a function:

`pyths :: Int -> [(Int, Int, Int)]`

that maps an integer n to all such triples with components in [1...n].  For example

```haskell
> pyths 5
[(3,4,5),(4,3,5)]
```

```haskell

pyths :: Int -> [(Int, Int, Int)]
pyths n = [(x, y, z) | x <- [1..n], y <- [1..n], z <- [1..n], x^2 + y^2 == z^2]

```
