# application programming interfaces api


### sources

[api wiki](https://en.wikipedia.org/wiki/API)
[software framework](https://en.wikipedia.org/wiki/Software_framework)
[windows api](https://en.wikipedia.org/wiki/Windows_API)
[xml](https://en.wikipedia.org/wiki/XML)
[4 types of APIs](https://blog.axway.com/learning-center/apis/basics/different-types-apis)
[REST representational state transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)
[SOAP](https://en.wikipedia.org/wiki/SOAP)


### what is an API?

An application programming interace is a type of software interface offering a service to other pieces of software.  In contrast to a user interface, which connects a computer to a person, an API connects computers or pieces of software to each other.  

It is not intended to be used directly by a person (the end user) other than a computer programming who is incorporating it into software.  An API is often made up of different parts which act as tools or services that are available to the programmer.  A program that uses one of these parts is said to call that portion of the API.  

The calls that make up the API are also known as subroutines, methods, requests, or endpoints.  An API specification defines these calls, meaning that it explains how to use or implement them.

API calls
- subroutines
- methods
- requests
- endpoints

## categories of APIs

1. libraries
2. frameworks
3. operating systems
4. remote APIs
5. web APIs

**1.  libraries**

The separation of the API from its implementation can allow sprograms written in one language to use a library written in another.  Applications using libraries make calls to the library to perform certain actions, e.g. sorting a file.

**2.  frameworks**

In a framework, unlike in libraries or in standard user applications, the overall program's flow of control is not dictated by the caller, but by the framework.  The framework code, in general, is not supposed to be modified, while accepting user-implemented extensions.

**3.  operating systems**

An API can specify the interface between an application and the operating system.  For example, _POSIX_ provides an interface to Unix-like operating systems.  _WinAPI_ provides an interface to Microsoft's Windows operating system.

**4.  Remote APIs**

Remote APIs allow developers to manipulate remote resources through specific standards for communication that allow different technologies to work together, regardless of language or platform.  For example, the Java remote mthod invocation API uses the Java Remote Method Protocol to allow invocation of functions that oeprate remotely, but appear local to the developer.

**5.  web APIs**

Web APIs are the defined interfaces through which interactions happen between an enterprise and applications that use its assets.  
For example, 

__Google__ has an API that let's another application use its search engine.  

__Twiter__ has an API that let's another program access its speech recognition software.

## API protocols

The last two categories of APIs are related to the client-server architecture and generally operate over the internet:

- remote APIs 
- web APIs

In order to leverage these categories of APIs, we must follow certain protocols.  A protocol provides defined rules for API calls.  It specifies the accepted data types and commands.  

There are major types of protocols for APIs:

- REST (representation state transfer)
- SOAP (simple object access protocol)
- RPC (remote procedural call)

## API protocols & XML

All of the API protocols use XML.  XML is Extensible Markup Language XML is a tag-based (e.g. <p>, </p>) markup language and file format for storing, transmitting, and reconstructing arbitrary data 



























