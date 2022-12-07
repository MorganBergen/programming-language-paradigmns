# haskell

[haskell](https://www.haskell.org/) is a purely functional programming language

haskell.pdf

**contents**
1. [Introduction](##1.-introduction)
- [Functions](###functions)
- [Functional programming](###functional-programming)
- [Features of haskell](###features-of-haskell)
- [Historial background](###historial-background)
- [Taste of haskell](###taste-of-haskell)
- [Remarks](###remarks)
- [Exercise](###exercise)

## 1. Introduction

### functions
A function is  amapping that takes one or more arguments and produces a single result, and is defined using an equation that gives a name for the function, a name for each of its arguments, and a body that specifies how the result can be calculated in terms of the arguments.  **For example:** a function double that takes a number x as its argument, and produces the result x + x, can be defined by the following equation:

```haskell
-- function definition
double x = x + x
```

When a function is applied to actual arguments, the result is obtained by substituting these arguments into the body of the function in place of the argument names.  **For example**, the result of the application `double 3` of the function `double` to the number `3` can be determined by the following calculation, in which each step is explained by a short comment in curely parentheses.  Additionally the result of a nested application `double (double 2) in which the function `double` is applied twice can also be calculated:

```haskell
	double 3
= { applying double }
	3 + 3
= { applying + }
	6

double (double 2)
= { applying the inner double }
	double (2 + 2)
= { applying + }
	double 4
= { applying double }
	4 + 4
= { applying + }
	8
```

The same result can be calcuated by starting with the outer application of the function `double` rather than the inner:

```haskell
	double (double 2)
= { applying the outer double }
	double 2 + double 2
= { applying the first double }
	(2 + 2) + double 2
= { applying the first + }
	4 + double 2
= { applying double }
	4 + (2 + 2)
= { applying the second + }
	4 + 4
= { applying + }
	8
```

The order in which functions are applied in a calculation does not affect the value of the final result, but it may affect the number of steps required, and whether the calculation process terminates.  These issues are explored in more detail when we consider how expressions are evaluated later.

### functional programming

**What is functional programming?**

Functional programming can be viewed as a _style_ of programming in which the basic method of computation is the application of functions to arguments.  A functional programming language is one that _supports_ and _encourages_ the functional style.

For example lets consider the sum of the integers between one and some largeer number `n`.  In many current programming languages, this would normally be achieved using twi integer variables whose values can be changed over time by means of the assignment operator `=`, with one such variable used to accumulate the total, and the other used to count from `1` to `n`.  

The basic method of computation is _changing stored values_, in the send that executing the program results in a sequence of assigments.  For example, the case of `n = 5` gives the following sequence in which the final value assigned to the variable `total` is the required sum.

```Java

// first initialise an integer variable total to zero
int total = 0;

// second we enter a loop that ranges an integer variable i from 1 to n
for (int i = 1; i <= n; i++) {

	// third we add the current value of i to the total each iteration
	total = total + i;
}

/*
total = 0;
count = 1;
total = 1;
count = 2;
total = 3;
count = 3;
total = 6;
count = 4;
total = 10;
count = 5;
total = 15;
*/

```

Programming languages such as java to c++ the style of changing stored values are called *imperative languages*, because programs in such languages are constructed form imperative instructions that specify precisely how the computation should proceed.  Thus imperative languages are languages that express commands or injunctions.  The imperative style of programming is therefore a style in which the basic method of computation is the _execution of commands_.

Now by constrast lets consider computing the sum of the numbers between `1` and `n` using haskell.  This would normally be achieved using two library function, one called `[..]` that is used to produce the list of numbers between `1` and `n`, and the other called `sum` that is used to produce the sum of this list.

```haskell
sum [1..n]
```

The basic method of computation is _producing a value_ or is _applying functions to arguments_, in the sense that executing the program results in a sequence of applications.  For example let's look at the case `n = 5` which gives the following sequence, in which the final value in the sequence is the required sum.

```haskell
	sum [1..5]
= { applying [..] }
	sum [1, 2, 3, 4, 5]
= { applying sum }
	1 + 2 + 3 + 4 + 5
= { applying + }
	15
```

Most imperative languages provide some form of support for programming with functions, so the haskell program `sum [1..n]` could be translated into such languages.  However many imperative language sdon't _encourage_ programming in a functional style.  Other languages discourage or prohibit functions from being stored in data structures such as lists, from constructing intermediate structures such as the list of numbers in the above example, from taking functions as arguments or producing functions as results, or from being defined in terms of themselves.  However haskell has no restrictions on how functions can be used.

### features of haskell

- **concise programs** 
- **powerful type system**
- **list comprehensions**
- **recursive functions**
- **higher-order functions**
- **effectful functions**
- **generic functions**
- **lazy evaluation**
- **equational reasoning**


**concise programs** 
Haskell uses a very concise syntax, which makes it easy to write programs that are short and easy to understand.  Indentation is used to indicate the structure of programs.  In comparison to other languages Haskell programs are often between two and ten times shorter than programs written in other languages.

**powerful type system**
Typwe inference is used to determine the types of expressions.  The type system is powerful enough to allow the compiler to detect many errors in programs, and to provide a basis for equational reasoning.  The haskell type system is also more powerful than most languages, supporting the very general forms of _polymorphism_ and _overloading_, and providing a wide range of special purpose features concerning types.

**list comprehensions**
One of the most common ways to structure and manipulate data in computing is using lists of values.  Haskell provides lists as a basic concept in the language, together with a simple but powerful _comprehension_ notation that constructs new lists by selecting and filtering elements from one or more existing lists.  

**recursive functions**
Most programs involve some form of looping.  But in haskell the basic mechanism by which looping is achieved is through _recursive_ function that are defned in terms of themselves.  Many computations have a simple and natural definition in terms of recursive functions, especially when _pattern matching_ and _guards_ are used to separate different cases into different equations.

**higher-order functions**
Haskell is a _higher-order_ functional language, meaning that functions can freely take functions as arguments and produce functions as results.  Using higher-order functions allows common programming patterns, such as composing two functions, to be defined as functions within the language itself.  More generally, higher-order functions can be used to define _domain-specific languages_ within Haskell itself, such as for list processing, interactive programming, and parsing.

**effectful functions**
Functions in Haskell are pure functions that take all their inputs as arguments and produce all their outputs as results.  However, many programs require some form of _side effects_ that would appear to be at odds with purity, such as reading input from the keyboard, or writing output to the screen, while the program is running.  Haskell provides a uniform framework for programming with effects, without compromising the purity of functions, based upon the use of _monads_ and _applications_.

**generic functions**
Most languages allow functions to be defined that are generic over a range of simple types, such as different forms of numbers.  However, the Haskell type system also supports functions that are generic over much richer kinds of structures.  For example, the language provides a range of library functions that can be used with any type that is _functional_, _applicative_, _monadic_, _foldable_, or _traverable_, and allows new structures and generic functions over them to be defined.

**lazy evaluation**
Haskell programs are executed using a technique called _lazy evaluation_, which is based upon the idea that there should not be any computation that is performed until its result is actually required.  As well as avoiding unnecessary computation, lazy evaluation ensures that programs terminate whenever possible, this encourages programming in a modular style using intermediate data structres, and even allows programming with infinite structures.

**equational reasoning**
Because programs in haskell are pure functions, simple _equational reasoning_ techniques can be used to execute programs, to transform programs, to prove properties of programs, and even to calculate programs directly from specifications of their intended behavior.  Equational reasoning is particularly powerful when combined with the use of _induction_ to reason about functions that are defined using recursion.

### taste of haskell

The following will give three small examples that give a taste of programming in haskell.  The examples involve processing lists of values of different types, and illustrate different features of the language.

**summing numbers**

Recall the function sum used earlier -> [functions](###functions) produced the sum of a list of numbers.  In haskell sum can be defined using two equations:

```haskell

-- The first equation states that the sum of the empty list is zero.
sum [] = 0

{- The second equation states that the sum of any non-empty list comprising 
a first number `n` and a remaining list of numbers `ns` 
is given by adding `n` and the sum of `ns`.
-}
sum (n:ns) = n + sum ns

-- For example, the result of `sum [1, 2, 3]` can be calculated as follows:
	sum [1, 2, 3]
=		{ applying sum }
	1 + sum [2, 3]
= 		{ applying sum}
	1 + (2 + sum [3])
=		{ applying sum }
	1 + (2 + (3 + sum []))
= 		{ applying sum }
	1 + (2 + (3 + 0))
=		{ applying + }
	6
```

Note that even though the function `sum` is defined in terms of itself and is hence _recursive_, it does not loop forever.  In particular, each application of `sum` reduces the length argument list by one, until the list eventually becomes empty, at which point the recursion stops and the additions are preformed.  Returning zero as the sum of the empty list is appropriate because zero is the _identity_ for addition.  That is, `0 + x = x` & `x + 0 = x` for any number `x`. 

Every function has a _type_ that specifies the nature of its arguments and results, which is automatically inferred from the definition of the function.  For example, the function `sum` defined above has the following data type:

```haskell
-{
This type states that for any type of a of numbers, sum is a function that maps a list
of such numbers to a single such number.
-} 
Num a => [a] -> a
```

Haskell supports many different data types such as...
- **numbers** such as `Int`, `Integer`, `Float`, `Double`, `Rational`, `Complex`
- **characters** such as `Char`
- **strings** such as `[Char]`
- **lists** such as `[a]`
- **tuples** such as `(a, b, c)`
- **functions** such as `a -> b`
- **type constructors** such as `Maybe a`, `Either a b`, `IO a`
- **type classes** such as `Eq a`, `Ord a`, `Num a`, `Show a`, `Read a`, `Enum a`, `Bounded a`, `Functor f`, `Monad m`

Types provide useful information about the nature of functions, but, more importantly, their use allows many errors in programs to be automatically detected prior to executing the programs themselves.  In particular, for every occurence of function application in a program, a check is made that the type of the actual arguments is compatible with the type of the function itself.  For example, attempting to apply the function s`sum` to a list of `Char`'s would be reported as an error, because characters are not a type of number.

**sorting values**
Now lets consider a more sophisticated function concerning lists, which illustrates a number of other aspects of Haskell.  Suppose that we define a function called `qsort` by the following two equations.

```haskell
-- The first equation states that the result of sorting the empty list is the empty list.
qsort [] = []

{-
the second question with the ++ operator appends two lists together
e.g. [1, 2, 3] ++ [4, 5] = [1, 2, 3, 4, 5]

the keyword where is used to define local variables in this case 

the list smaller comprises of all elements a from the list xs that are less than or equal to x

the list larger comrpises of all elements b from xs that are greater than x

for example if x = 3 and xs = [5, 1, 4, 2], then smaller = [1, 2] and larger = [5, 4]
-}

qsort (x:xs) = qsort smaller ++ [x] ++ qsort larger
		where
			smaller = [a | a <- xs, a <= x]
			larger = [b| b <= xs, b > x]
```

<<<<<<< HEAD
## basics of functional vs oop

<img width="630" alt="haskell" src="https://user-images.githubusercontent.com/65584733/202915362-a0053a1e-60b5-4913-b69b-a6f55e607fd9.png">
=======
What does *`qsort`* 

First, we note that it has no effect on lists with a single element, in the sense that `qsort [x] = [x]` for any `x`.  It is easy to verify this property using a simple calculation:

```haskell
	qsort [x]
= { applying qsort }
	qsort [] ++ [x] ++ qsort []
= { applying qsort }
	[] ++ [x] ++ []
= { applying ++ }
	[x]
```

In turn, we now work through the application of `qsort` to an example list, using the above property to simplify the calculation:

```haskell
	qsort[3, 5, 1, 4, 2]
= { applying qsort }
	qsort [1, 2] ++ [3] ++ qsort [5, 4]
= { applying qsort }
	(qsort [] ++ [1] ++ qsort [2]) ++ [3] ++ (qsort [4] ++ [5] ++ qsort [])
= { applying qsort, above property }
	([] ++ [1] ++ [2] ++ [3] ++ ([4] ++ [5] ++ [])
= { applying ++ }
	[1, 2] ++ [3] ++ [4, 5]
= { applying ++ }
	[1, 2, 3, 4, 5]
```
*summary* `qsort` has sorted the example list into numerical order.  More generally, this function produces a sorted version of any list of numbers.  The first equation for `qsort` states that the empty list is already sorted, while the second states that any non-empty list can be sorted by inserting the first number between the two lists that result from sorting the remaining numbers that are `smaller` and `larger` than this number.  This method of sorting is called _quick sort_, and is one of the best such methods knwon.  The above implementation of quicksort is an excellent example of the power of haskell, being both clear and concise.  Moreover, the function `qsort` is also more general than might be expected, being applicable not just with numbers, but with any type of ordered values.  More precisely, the type

```haskell
qsort :: Ord a => [a] -> [a]
```

states that, for any type of `a` of ordered values, `qsort` is a function that maps between lists of such values.  Haskell supports many different types of ordered values, including numbers, single characters such as `a`, and strings of characters such as "abcde".  Hence, for example, the function `qsort` could alos be used to sort a list of characters, or a list of strings.

**sequencing actions**

Our third and final example further emphasises the level of precision and generality that can be achieved in Haskell.  Consider a function called `seqn` that takes a list of input/output actions in sequence, and returns a list of resulting values.  In Haskell, this function can be defined as follows:

```haskell
seqn [] = return []
seqn (act:acts) = do	x <- act
			xs <- seqn acts
			return (x:xs)
```
These two equations state that if the list of actions is empty we return the empty list of results, otherwise we perform the first action in the list, then perform the remaining actions, and finally return the list of results that were produced.  For example, the expression `seqn [getChar, getChar, getChar]` reads three characters from the keyboard using the action `getChar` that reads a single character, and returns a list containing the three characters.  The interesting aspect of the function `seqn` is its type.  One possibele type that can be inferred from the above definition is the following:

```haskell
seqn :: [IO a] -> IO [a]
```

This type states that `seqn` maps a list of `IO` (input/output) actions that produce results of some type `a` to a single `IO` action that produces a list of such results, which captures the high-level behavior of `seqn` in a clear and concise manner.  More importantly, however, the type also makes explicit that the function `seqn` involes the _side effect_ of performing input/output actions.  Using types in this manner to keep a clear distinction between functions that are pure and those that involve side effects is a central aspect of Haskell, and brings important benefits in terms of both programming and reasoning.

In fact, the function `seqn` is more general than it may initially appear.  In particular, the manner in which the function is defined is not specific to the case of input/output actions, but is equally valid for other forms of effects too.  For example, it can also be used to sequence actions that may change stored values, fail to succeed, write to a log file, and so on.  This flexibility is captured in Haskell by menas of the following more general type:

```haskell
seqn :: Monad m => [m a] -> m[a]
```

That is, for any _monadic_ type `m`, of which `IO` is just one example, `seqn` maps a list of actions of type `m` `a` into a single action that returns a list of values of type `a`.  Being able to define generic functions such as `seqn` that can be used with different kinds of effects is a key feature of Haskell.

>>>>>>> a0e89bf (finished chapter 1)

