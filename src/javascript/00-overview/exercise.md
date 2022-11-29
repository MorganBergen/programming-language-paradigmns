# Overview

Morgan Bergen

EECS 368 Programming Language Paradigms

Wednesday August 24 2022

### Questions

**1. Describe what an assembler does.**

An assembler is a program that inputs an assembly language and outputs object code by translating the syntax of that language. For example an assembler will take a x86 assembly language and translate it into object code for the particular CPU of the computer.

[assembler overview](https://en.wikipedia.org/wiki/Assembly_language#Assembler)

**2. Describe what an compiler does.**

In general a compiler simply translates one programming language into another programming language. Primarily a compiler will take a source language and translate that source code into target code, this target code will always be a lower level language than that of the source coder. The purpose of a compiler is to be the intermediary between the programmers souce code and the assemby language, object code, and machine code, to eventually create a execuatble program. One distinctive aspect of a compiler is that it reads the entire language at once and then tests.

For example a a compiler will take a high level language such as C++ and translate's that language into another language.

[compiler overview](https://en.wikipedia.org/wiki/Compiler)

**3. Describe what an interpreter does.**

An interpret is a program that directly takes a high-level language and translates that language line by line into bytecode. An interpreter does not need a language to be compiled into a machine language, instead it takes the program parces the source code directly, translates that source code into object code, and executes that code in real time.

[interpreter overview](<https://en.wikipedia.org/wiki/Interpreter_(computing)>)

**4. Descrbe what an imperative programming language is**

In general an imperative language alters the state of the program from explicit statements. It focuses on describing how a program operates step by step, so one good way to view an imperative programming language is the thought process behind how the language solves a problem which is first do this and next do that. An imperative programming language is a language that is programs by side effects, whereby a function or expression modifies the state of a variables value outside of its local enviroment (in this case in a seperate file).

`first do this and next do that`

[side effect overview](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>)

**5. Descrive what a declarative programming language is**

A declarative programming language is a style of programming that primarily moves to the next step of a program via a function's return value and does not program by side effects. A declarative language constracts from an imperative language because it describes a result of a program without explicitly listing out the steps that must be performes. Therefore rather than altering the state of a program via statements or expressions, an altered state gets represented by a function explicit return value.

`evaluate an expression and use the resulting value for something`

[declarative programming language overview](https://en.wikipedia.org/wiki/Declarative_programming)

**6. Describe what a domain specific language is.**

A DSL is a specalized high level language that is intended to be utilized for a particular application or intended to be used to solve a specific problem. It's aim is to target a specific program, which constrats from a general purpose language which targets any software problem. An example of a domain specific lanuage is the markup language HTML which was developed soley for files that are disigned to display inside a web brower.

`answer a question via search for a solution`

[domain specific language overview](https://en.wikipedia.org/wiki/Domain-specific_language)

**7. Which of the following is an imperative language and which is a declarative language?**

<img width="32" alt="ISO C++ Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/32px-ISO_C%2B%2B_Logo.svg.png"></a> [**C++**](https://en.wikipedia.org/wiki/C%2B%2B)
is an imperative language, more specifically it is an object-oriented imperative language because it was developed to decompose large programs into modules, also refered as abstract datatypes or classes. C++ is a language that gets compiled.

<img width="32" alt="Python-logo-notext" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/32px-Python-logo-notext.svg.png"></a> [**Python**](<https://en.wikipedia.org/wiki/Python_(programming_language)>)
is an imperative language, however it does support declarative styling. It also is a interpreted language, more specifically each line of code is executed one at a time instead of all at once like C++.

<img width="32" alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/32px-Unofficial_JavaScript_logo_2.svg.png"></a> [**JavaScript**](https://en.wikipedia.org/wiki/JavaScript)
is an object oriented imperative language. It is also a just-in-time compiled language which is a mix between the two traditional approaches of compiled based languages and interpred based languages.

<img width="32" alt="Haskell-Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/32px-Haskell-Logo.svg.png"></a> [**Haskell**](https://en.wikipedia.org/wiki/Haskell)
is a purely declarative language also refered to as a functional paradigmed language.
