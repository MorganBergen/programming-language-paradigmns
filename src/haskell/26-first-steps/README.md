# Haskell First Steps

**table of contents**

1.  [help on haskell](#help-on-haskell)
2.  [glasgow haskell compiler](#glasgow-haskell-compiler)
3.  [access to ghc at ku](#access-to-ghc-at-ku)
4.  [starting ghci](#starting-ghci)
5.  [using ghci](#using-ghci)
6.  [useful ghci commands](#useful-ghci-commands)
7.  [standard prelude](#standard-prelude)
8.  [function application](#function-application)


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

## access to ghc at ku

- ghc is available on the cycle servers `cycle1.eecs.ku.edu` and `cycle2.eecs.ku.edu` and `cycle3.eecs.ku.edu` and `cycle4.eecs.ku.edu`

- any modern ssh client should work

- some users have also been using the powershell ssh client

## starting ghci



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

mathmetics	haskell
f(x)		f x
f(x, y)		f x y
f(g(x))		f (g x)
f(x, g(y))	f x (g y)
f(x) g(y)	f x * g y


