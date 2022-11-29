# Programming Paradigms

> A pattern that serves as a school of thoughts for programming computers.
> Programming Paradigns describe how computation is expressed, how it works, and how it is organized from a design perspective.

- Structure: What parts
- Behavior: How parts compute
- Interaction: How parts interact with eachother

1. assembler
2. compiler
3. interpreter
4. imperative programming language: `first do this and next do that`
5. declarative programming language: `evaluate an expression and use the resulting value for something`
6. domain specific language: `answer a question via search for a solution`

## Paradigm

> An example that serves as a pattern or model. A framework within which theories, laws, and generalizations and their experiments performed in support of them are formulated.

## Execution Model

Language paradigms are a way to classify programming languages based on their features. Certain language focus on their execution model, the way in which that code is organized, or with the style of syntax and grammar. All programming languages consists of syntax and semantics.

- syntax describes what a language is as well as its grammar.
- semantics (static/dynamic semantics) describes what happens to a language at compile time or at runtime.

The execution model specifies the behavior of elements of the language, by applying the execution model, one can derive the behavior of a program that was written in terms of that language. ==The execution model as indicates by the program's syntax determines the manner in which the units work and how they are scheduled for execution.==

### syntax

        1   // hello world program
        2
        3   #include <iostream>
        4
        5   int main() {
        6
        7       std::cout << "hello world" << std::endl;
        8
        9       return (0);
        10  }

### semantics

When a programmer "reads" code, in their mind, they walk through what each line of code does and in effect they simulate the behavior of the code inside their mind, what a programmer is essentially doing is applying the execution model to the code, which results in the behavior of that code.

##### The comment:

        1   // hello world program

This is a comment, comments are intended to communicate information about code in english to other programmers and why a block of code is there in the first place. When the compiler sees the two forward slashes it given a flag to ignore the successive words that follow.

##### The preprocessor directive for iostream library:

        3   #include <iostream>

A preprocessor directive speaks directly to the compiler. There are many different preprocessor directives, this specific directive is telling the compiler to bring in the library iostream. Iostream gives us one functionality that we will see on line 7 `std::cout` (`cout` is shorthand for compiler output) in this program. The iostream grants us the ability to use the input and output streams. Streams are abstractions used by C++, that preform input and output operations in sequential media as the screen, the keyboard, or a file. A stream is an entity where a program can either insert or extract characters to/from. Streams are a source/destination of characters, these characters are provided/accepted sequentially (one after the other).

##### The main function

        5   int main() {

Every C++ program must have some sort of main function. The main function is called at program startup and is the designated entry point/start to a program that is executed in hosted enviroment (specifically the operating system). "()" indicates a calling to the function, specifally with no parameters being passed into the initial call of the main function. The program shall contain a global function named main and it's type must be int. "{...}" The opening bracket indicates the beginning of a code block and is followed by } after such code is finished being written. "..." is my short hand representation of the body of the main function, it essentially is the blocks of code you insert into your main function to run your program.

##### Standard output stream to the console

        7   std::cout << "hello world" << std::endl;

This is the standard output stream which prints the text Hello World to the Screen with a new line added after.
`std::cout` is used to create an output to the screen. Each piece of code is used to format the output operations. `std` stands for standard. `::` is a scope resolution operator. `cout` is the core of the standard output stream, it stands for compiler output. `<<` is an insertion operation, it's purpose is to insert the data that follows into the stream that precedes it. `"Hello world` is the string literal data type text that is literaly printed out onto the console.

##### The Return Statement

        9   return (0);

A return statement terminates a given function call. In this case the main function needs to return 0 at some point because it indicates a successful execution of the program. Functions can have multiple return statements, or no return statements. `int` at the beginning of the function name indicates the data type that will be returned, in this case it must be an integer, but specifally a `0` special terminating integer that tells the compiler to finish executing the program. C++ has a concept called a statement, the language specification defines a statement as a chuck of syntax that is terminated by `;`. By stating that "execution of the program proceeds one statement after the other, in sequence", the programming model has stated constraints on the order of performing units of work.

##### Closing Bracket

        10  }

The closing bracket is an indicator that there has been an end to a block of code. Blockcs can be nested into eachother (blocks containing other blocks), however in this case there is simply one flat

# Main Programming Paradigms

> A main programming paradigm stems an idea within some basic discipline which is relevant for performing computations.

Programming paradigns describe related concepts such as programming style, technique, and culture.

- A programming technique relates to an algoritmic idea for solving a particular class of problems (e.g. 'divide and conquer' and 'program development by stepwise refinement')
- A programming style is the way in which we express ourselves in a computer program
- A programming culture is the totality of programming behavior which often is tighly related to a family of programming languages, this is the summation of a main paradigm, programming style, and techniques.

1. Imperative
2. Declarative

### Imperative

`first do this and next do that`
The 'first do this, next do that' is a short phrase which really in a nutshell describes the spirit of the imperative paradigm. The basic idea is the command, which has a measurable effect on the program state. The phrase also reflects that the order to the commands is important. 'First do that, then do this' would be different from 'first do this, then do that'.

1.  Procedural: Which groups instructions into procedures and only focus on the return statements.
2.  Object-oriented: Which groups instructions with the part of the state they operate on.

> An imperative language is one in which the programmer instructs the machine how to change it's state, specifially implementing algorithms in explicit steps.

Languages such as C++, Python, and JavaScript have two main features.
They state the order in which operations occur, with constructs that explicitly contol that order, and they allow programming by side effects used to update a system's state. Programming by side effects is essentially an operation, function, or expression that modifies some state variable's value outside of its local enviroment, which is to say if it has any obserbale effect other than its primary effect of returning a value to the invoker of the operation.

Examples of side effects include modifying a non-local variable, modifying a static local variable, or calling a function with side effects. If you create a new object in C++ a constructor will be called and then initialize certain private member variables upon the creation of that object, this is programming by side effects, because you modified the program at one point in time, within one unit of code, and then later read at a different point in time inside a different unit of code, this is then later read at a different point in time side a different unit of code. Additionally programming with side effects shows how the program must accomplish a set of seqential language primitives.

Object oriented programming can be incapsulated by the following spirit... `send messages between objectys to simulate the tyemporal evolution of a set of real world phenomena.`

- Discipline and idea:
  - The theory of concepts, and models of human interaction with real world phenomena
  - Data as well as operations are encapsulated in objects
  - Information hiding is used to protect internal properties of an object
  - Objects interact by means of message passing
    - A metaphor for applying an operation on an object
  - In most object-oriented languages objects are grouped in classes
    - Objects in classes are similar enough to allow programming of the classes, as opposed to programming of the individual objects
    - Classes represent concepts whereas objects represent phenomena
  - Classes are organized in inheritance hierarchies
    - Provides for class extension or specialization

### Declarative

> In which the programmer merely declares properties of the desired result, but not how to compute it. It is a non-imperative meaning the style does not explicitly list out commands or steps that must be performed, but rather is describe don the basis of the desired results.

1.  Functional: In which the desired result is declared as the value of a series of function applications
2.  Logic: In which the desired result is declared as the answer to a question about a system of facts and rules.
3.  Mathematical: In which the desired result is declared as the solution of an optimization problem.
4.  Reactive: In which the desired result is declared with data streams and the propagation of change.

Declarative programming languages is used to report on the state of the system without side effects. It's a style of builing the structure and elements of the program by expressing the logic of a computation without having to describe its control flow.
In Haskell for instance, which is a pure functional language programs without side effects, whereby state changes are only represented as functions that transform the state, which is explicitly represented as a first-class object in the program.

<p><a href="https://commons.wikimedia.org/wiki/File:Programming_paradigms.svg#/media/File:Programming_paradigms.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Programming_paradigms.svg/1200px-Programming_paradigms.svg.png" alt="Programming paradigms.svg"></a><br>
