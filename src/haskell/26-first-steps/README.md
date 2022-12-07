# Haskell First Steps

**table of contents**

1.  [help on haskell](#help-on-haskell)
2.  [glasgow haskell compiler](#glasgow-haskell-compiler)
3.  [access to ghc at ku](#access-to-ghc-at-ku)
4.  [starting ghci](#starting-ghci)

## help on haskell

-  [haskell.org](http://www.haskell.org/)
-  [haskell wiki](http://www.haskell.org/haskellwiki/)
-  [haskell wiki: learn](http://www.haskell.org/haskellwiki/Learn)
-  [haskell wiki: getting started](http://www.haskell.org/haskellwiki/Getting_started)
-  [learn you a haskell](http://learnyouahaskell.com/)

## glasgow haskell compiler

-  [ghc](http://www.haskell.org/ghc/)
-  ghc is the leading implementation of haskell, and comprises a compiler and interpreter
-  the interactive nature of the interpreter makes it well suited for teaching and prototyping

The interpreter can be started from the terminal command prompt $ by simply typing ghci:

```
$ ghci

GHCi, version X: http://www.haskell.org/ghc/ :? for help

Prelude>

```

The GHCi prompt > means that the interpreter is now ready to evaulate an expression.  Using GHCi looks ikethis

```zsh
> 2+3*4
14

> (2+3)*4
20

> sqrt*3^2 + 4^2)
5.0

```

## useful GHCi commands

command			meaning
:load _name_		load script _nme_
:reload			relaod current script
:set editor _name_	set editor _name_
:edit _name_		edit script _name_
:edit			edit current script
:type _expr_		show type of _expr_
:?			show all commands
:quit			quit GHCi

## the standard prelude

haskell comes ith a standard library of functions called: **prelude**
prelude include the 5 main arithmetic operations of 

- addition +
> 2 + 3
5

- division `div`
div is enclosed in back quotes, not forward, interdivision rounds down to nearest integer
> 7 `div` 2
3


– Subtraction: - 
> 2 - 3
1

- multiplication: *
> 2 * 3
6

- exponentiation: ^
> 2^3
8


In addition to arithmetic operations, prelude alos provides many useful functions on lists.

Select the first element of a list
```
> head [1, 2, 3, 4, 5]
1
```

Remove the first element from a list
```cli
> tail [1, 2, 3, 4, 5]
[2, 3, 4, 5]
```

select the nth element of a list (note 0 based indexing)
```cli
> [1, 2, 3, 4, 5] !! 2
3
``

## function applications

## function application examples

mathmetics	haskell
f(x)		f x
f(x, y)		f x y
f(g(x))		f (g x)
f(x, g(y))	f x (g y)
f(x) g(y)	f x * g y

## haskell scripts

## my first script

## my first script revision 

## integers vs floating point numbers

## integers vs. floating point (fixed)

## naming requirements

## the layout rule

## naming requirements

## the layout rule

The sequence of definitions each definition must begin in percisely the same column

```
a = 10
b = 20
c = 30
```


The layout rule avoids the need for explicit syntax to indicate the grouping of definitions

```

```

