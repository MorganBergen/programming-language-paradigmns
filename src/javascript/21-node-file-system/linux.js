// get the request function from the http module
const {request} = require('http');


// requestStream is a readable stream
let requestSream = request({
	// key-value pairs of headers
	hostname: 'eloquentjavascript.net',
	path: '/20_node.html',
	method: 'GET',
	headers: {Accept: 'text/html'}
	// the response is the second parameter of the callback
}, response => {
	console.log('Server responded with status code', response.statusCode);
});

// the end() will finish the request and close it
requestStream.end();


// output should be:
// Server responded with status code 200
