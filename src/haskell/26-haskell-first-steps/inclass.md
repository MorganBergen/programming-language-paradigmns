# in-class problem

eecs 368 programming language paradigmns

Morgan Bergen

Wed Oct 26 22:34:10 CDT 2022

haskell first steps

## questions

The script below contains three syntax errors:

```Haskell
N = a 'div' length xs
	where
		a = 10
	xs = [1, 2, 3, 4, 5]
```

1.  What are the three errors?

 error: Not in scope: data constructor ‘N’
`N` is not within scope, use lowercase variable name `n` insted of `N`  

 error: lexical error
`div` must be surrounded around backticks

xs is not indented

2.  What is the correct script syntax?

```Haskell
a = 10
xs = [1,2,3,4,5]
n = a `div` length xs
main = print n
```