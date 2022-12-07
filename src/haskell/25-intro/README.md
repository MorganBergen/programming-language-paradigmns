# introduction to haskell

programming language paradigms

morgan bergen

Tue Nov 29 11:57:08 CST 2022

**table of contents**

1.  [imperative vs. declarative](#imperative-vs-declarative)
2.  [funtion-oriented design paradigm](#funtion-oriented-design-paradigm)
3.  [what is a design paradigm?](#what-is-a-design-paradigm)
4.  [function-oriented vs object-oriented](#function-oriented-vs-object-oriented)
5.  [what is a functional language?](#what-is-a-functional-language)
6.  [haskell](#haskell)
7.  [function application](#function-application)
8.  [java imperative example](#java-imperative-example)
9.  [haskell functional example](#haskell-functional-example)
10. [features of haskell](#features-of-haskell)
11. [concise programs](#concise-programs)
12. [powerful type system](#powerful-type-system)
13. [list comprehension](#list-comprehension)
14. [recursive functions](#recursive-functions)
15. [higher-order-functions](#higher-order-functions)
16. [functions with side effects](#generic-functions)
17. [lazy evaluation](#lazy-evaluation)
18. [equational reasoning](#equational-reasoning)
19. [historical background](#historical-background)
20. [where is haskell used?](#where-is-haskell-used)
21. [simple haskell example](#simple-haskell-example)
22. [in-class problems](#in-class-problems)

## imperative vs. declarative

**imperative**

- **programming style** perform step-by-step tasks and manage changes in state.

- **task**  tell the computer what to do

- **programmer focus**  how to execute

- **primary flow of control**  iterations, loops, conditionals, function/method calls

- **primary manipulation unit**  instances of class or structures

- **notable language** assembly language, c++, python, javascript

- **real life example**  go two blocks, make a right turn, proceed for three blocks, arrive at airport

**declarative**

- **programming style**  define what the problem is and what data transformations are needed to achieve the solution

- **task**  describe what you want as an end result

- **programmer focus**  what to execute

- **primary flow control**  function calls, recursion

- **primary manipulation unit**  function as first-class object and data collections

- **notable language**  sql, haskell, erlang

- **real life example**  go to the nearest airport, please

## funtion-oriented design paradigm

Before we dive into haskell, we need to back away and see why functions are so important in Haskell.  They are important in Haskell, because it supports the _function-oriented design paradigm_.  

## what is a design paradigm?

- a paradigm is an example or pattern that can be copied. 

- paradigms consist of "a set of assumptions, concepts, values, and practices that constitutes a way of viewing reality for the community that shares them, especially in an intellectual discipline.

- when applied to software development, a paradigm guides the way that developers view a given problem and organize the solution.

## function-oriented vs object-oriented

**function-oriented design**

- the system is designed from a functional viewpoint

- function oriented comes from mathematics

$$ y = f(x, y) = x*x + y*y $$

- style of programming in which the basic method of computation is the application of functions to arguments.

**object-oriented design**

- begins with an examination of the real-world objects
- focuses on data that are to be manipulated by the object
- not on the function performed by the object
- orthogonal to function-oriented design
- c++ and java are examples of object-oriented programming languages

## what is a functional language?

- opinions differ, and it is difficult to give a precise definition, but generally speaking

- a functional language is one that supports and encourages function-oriented design
- most languages support function-oriented design (e.g. javascipt, python), but haskell is considered the premier pure functional language.

## haskell

- haskell is the premier pure functional language
- haskell is a testbed for new programming idea
- generics in java came from haskell
- list comprehensions in python came from haskell
- STM language support came from haskell
- react (in javascript) came from haskell
- being a functional programmer will make you a better anywhere programmer
- anytime you learn a new programming paradigm you get better at all the paradigms you already know

## function application

in mathematics, function application is denoted using parentheses, and multiplication is often denoted using juxtaposition or space.

$$ f(a, b) + c d $$

> apply the function f to a and b, and add the result to the product of c and d

in haskell, function application is denoted using space, and multiplication is denoted using $\ast$

```haskell
f a b + c * d
```

> apply the function f to a and b, and add the result to the product of c and d

- moreover, function application is assumed to have higher priority than all other operators

```haskell
f a + b 
-- means (f a) + b, rather than f (a + b)
```

## java imperative example

```java
// summing the integers 1 to 10 in java
// the computation method is variable assignment

int total = 0;
for (int i = 1; i <= 10; i++) {
    total += i;
}
```

## haskell functional example

```haskell
-- summing the integers 1 to 10 in haskell
-- the computation method is function application

sum [1..10]
```

## features of haskell

- concise programs
- powerful type system
- list comprehension
- recursive functions
- higher-order functions
- functions with side effects
- generic functions
- lazy evaluation
- equational reasoning

## concise programs

- due to the high-level nature of the function style, program written in haskell are often much more concise than programs written in other languages

`sum [1..10]` 

vs 

```java
int total = 0; 
	for (int i = 1; i <= 10; i++) { 
		total += i; 
	}
```

- moreover, the syntax of haskell has been designedc with concise programs in mind
	- few keywords
	- allowing indentation to be used to indicate the structure of programs
- haskell programs are often between two and ten times shorter than programs written in other languages

## powerful type system

- most modtern programming languages include some form of type system to detect incompatibility errors, e.g. attempting to add a number and a character

	- javascript is an exception, and does not have a type system

- haskell has a type system that usually requires little type information to be provided by the programmer

- but it alows a large class of incompatibility errors in programs to be automatically detected prior to their execution, using a sophisticated process called type interence.

- the haskell type system is alow more powerful than most languages
	- very general forms of polymorphism and overloading
	- wide range of special purpose features concerning types

## list comprehension

- one of the most common ways to structure and manipulate data in computing is using lists of values
- haskell provides lists as a basic concept in the language
- it also includes a simple but powerful comprehension notation and constructs new lists by selecting and filtering elements from one or more existing lists

- remember set-builder notation from math class?

$$ \{ x^2 | x \in \mathbb{N}, x < 10 \} $$

- using the comprehension notation allows many common functions on lists to be defined without the need for explicit recursion

## recursive functions

- most program involve some form of looping
- in haskell, the basic mechanism by which looping is achieved is through recursive functions that are defined in terms of themselves
- as you may remember, it can take some time to get used to recursion
- but many computations have a simple and natural definition in terms of recursive functions
- and recursive functions can be proven correct using induction

## higher-order-functions

- like javascript, haskell is a higher-order functional language, which means that functions can freely take functions as arguments and produce functions as results
- using higher-order functions allows common programming patterns, such as composing two functions, to be defined as functions within the language itself

$$ f \circ g =  f(g(x)) $$

- higher-order functions can be used to define domain-sepecific languages (DSLs) within haskell itself, such as for list processing, interactive programming,a dn parsing.

## functions with side effects

- functions in haskell are pure functions that take all their inputs as arguments and produce all their outputs as results

- however, many programs require some form of side effect that would appear to be at odds with purity, such as
	- reading input from the keyboard
	- writing output to the screen

- haskell provides a uniform framework for programming with side effects, without compromising the purity of functions using **monads**.

## generic functions

- most languages allow functions to be defined that are generic over a range of simple types, such as different forms of numbers.

- haskell's type system allows new structures and generic functions over them to be defined.

## lazy evaluation

- haskell programs are executed using a technique called lazy evaluation

- lazy evaluation is based on the idea that no computation should be performed until its result is actually required

- lazy evaluation
	- avoids unecessary computation

	- ensures that programs terminate whenever possible

	- encourages programming in a modular style using intermediate data structures

	- allows programming within infinite sturctures (e.g. list of all prime numebrs

## equational reasoning

- because programs in haskell are pure functions, simple equational reasoning techniques can be used to:

	- execute programs

	- transform programs

	- prove properties of programs

	- calculate programs directly from specifiction of their intended behavior

- equational reasoning is particularly powerful when combined with the use of induction to reason about functions that are defined using recursion.

## historical background

1.  1930 Alonzo Church develops the lambda calculus, a simple but powerful theory of functions.

2.  1950s John McCarthy develops LISP, a functional programming language based on the lambda calculus.

3.  1960s Peter Landin develops the first functional programming language, ML, which is based on the lambda calculus.

4.  1970s John Backus develops the first purely functional programming language, FP, which is based on the lambda calculus.


2010 - now:  standard distribution, library support, new language features, development tools, use in industry, influence on other languages, etc.

## where is haskell used?

- eecs 662 programming languages 

- eecs 755 software modeling and analysis

- eecs 762 programming language foundations 1  

- haskell has a diverse range of uses commercially, from aerospace and defense, to finance, to web startups, hardware design firms, and a lawnmower manufacturer

	- cardano blockchain

	- google and grok both develop their machine learning chip compilers in haskell

	- ceberos develops its wafer-scale ML compilers in haskell

	- jane street develops its investment software in haskell

	- part of Xen is written in haskell

- [haskell in industry](https://wiki.haskell.org/Haskell_in_industry)

- [haskell companies](https://github.com/erkmos/haskell-companies)

- [haskell cosm](https://haskellcosmos.com/)

-  CUFP the Commercial Users of Functional Programming Workshop is the main user conference for industrial Haskell use is

## simple haskell example

```haskell
double x = x + x
quadruple x = double (double x)

> quadruple 10
40
```

## in-class problems

- The Haskell library module Prelude provides a large number of standard functions.
- In addition to the familiar numeric functions, the library also provides many useful functions on lists.
- For example, take selects the first n elements of a list: 

`> take 3 [1,2,3,4,5] [1,2,3]
- Knowing this, what is the result of these: 

```haskell
double x = x + x
quadruple x = double (double x) 
take (double 2) [1,2,3,4,5,6] 
take (quadruple 2) [1,2,3,4,5,6]
take (1+2) [1,2,3,4,5,6]
```

```haskell
❯ ghci
GHCi, version 9.2.4: https://www.haskell.org/ghc/  :? for help
ghci> double x = x + x
ghci> quadruple x = double (double x)
ghci> quadruple 10
40
ghci> :q
Leaving GHCi.
```

```haskell
<interactive>:2:1: error: Variable not in scope: clear
ghci> double x = x + x
ghci> quadruple x = double (double x)
ghci> take (double 2) [1,2,3,4,5,6]
[1,2,3,4]
ghci> take (quadruple 2) [1,2,3,4,5,6]
[1,2,3,4,5,6]
ghci> take (1+2) [1,2,3,4,5,6]
[1,2,3]
ghci> :q
Leaving GHCi.
```
