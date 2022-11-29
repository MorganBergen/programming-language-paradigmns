const {createServer} = require('http');

let server createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write(`<h1>hello!</h1>
		        <p>you asked for <code>${request.url}</code></p>`);
	response.end();
});

server.listen(8000);
console.log('Listening! (port 8000)');
