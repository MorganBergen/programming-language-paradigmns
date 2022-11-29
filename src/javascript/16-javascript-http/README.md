# JavaScript & HTTP

### Table of Contents
1.  HTTP
1. [promise](#promise)

## HTTP Client Requests
- Last time we learned how a client can use HTTP to access resources on a server
- GET to get a resource from the server
- DELETE to delete a resource on the server
- PUT to create or replace a resource on the server
- POST to send information to a resource on the server
- How do we make HTTP client requests in JavaScript


## JavaScript Client-Server Communication

When building a system that requires communication between a JavaScript program running in the browser (client-side) and a program on a server (server-side), the most flexible approach is to build your communication around the concept of resources and HTTP methods.

For example, to add a user to a system:

- use a PUT request to /users/larry...




# promise

promise chain

```JavaScript

new Promise((_, reject) => reject(new(Error("Fail"))))
    .then(value => console.log("Handler"))
    .catch(reson => {
        consolelog
    })


/*
fetch('http://eloquentjavascript.net/18_http.html'.then(response => {

    console.log(response.status);

    console.log(response.headers.get('content-type'));

}));

*/

```
