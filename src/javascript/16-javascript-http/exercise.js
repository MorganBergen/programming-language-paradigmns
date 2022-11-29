/*

write a javascript program to send the following HTTP command from a client to a server:

GET /18_http.html HTTP/1.1
Host: eloquentjavascript.net
User-Agent: Your browser name

*/


fetch("http://eloquentjavascript.net/18_http.html", {
    method: "GET",
    headers: {
        "Host": "eloquentjavascript.net",
        "User-Agent": "Your browser name"
    }
}).then(response => response.text()).then(text => console.log(text));

