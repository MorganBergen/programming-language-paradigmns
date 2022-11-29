/*
* Name of program: EECS 368 Assignment 5
* Brief description of the program: This program is a web server that can handle GET, PUT, DELETE, and MKCOL methods. 
* Author’s full name: Quoc Viet Le
* Creation date: October 31, 2022 
*/
const {createServer} = require("http");//this takes to the http module

const methods = Object.create(null);//create an null object to store the methods

createServer((request, response) => {
//handler is async funtion that takes request as argument
//return a promise that resolves to an object with status, body, and type properties
  let handler = methods[request.method] || notAllowed; //if the method is not allowed then call the notAllowed function
  handler(request) //call the handler function
    .catch(error => { //catch any error
      if (error.status != null) return error; //if error has status property, return it
      return {body: String(error), status: 500}; //if not, return 500 status
    })
    .then(({body, status = 200, type = "text/plain"}) => { //destructure the object as body, status, and type
       response.writeHead(status, {"Content-Type": type}); //write the header as status and type
       if (body && body.pipe) body.pipe(response); //if body has pipe property, pipe it to response
       else response.end(body); //if not, end the response
    });
}).listen(8000);//port 8000

async function notAllowed(request) { //this function is called when the method is not allowed
  return {
    status: 405,
    body: `Method ${request.method} is not supported.`
  };//return the 405 status and body as method xxx is not supported
}

var {parse} = require("url"); //this takes to parse the url
var {resolve, sep} = require("path"); //this takes to resolve the path

var baseDirectory = process.cwd(); //get the current working directory

function urlPath(url) { //this function takes the url and return the path of the url
  let {pathname} = parse(url); //destructure the pathname from the url 
  let path = resolve(decodeURIComponent(pathname).slice(1)); //resolve the path by removing the first character and decode the url pathname 
  if (path != baseDirectory &&
      !path.startsWith(baseDirectory + sep)) {// if the path is not baseDirectory and not start with baseDirectory + sep 
    throw {status: 403, body: "Forbidden"};//throw 403 status and body as Forbidden 
  }
  return path;
}

const {createReadStream} = require("fs"); //this open up a readable stream, fs is file system module 
const {stat, readdir} = require("fs").promises; // this takes stat and readdir from fs.promises 
const mime = require("mime"); //require mime module to get the mime type of the file 

methods.GET = async function(request) { //GET method 
  let path = urlPath(request.url);//by calling urlPath function, get the path 
  let stats; //create a stats variable
  try { //try block
    stats = await stat(path); // get the stats of the path
  } catch (error) { //catch block
    if (error.code != "ENOENT") throw error; //if error code is not ENOENT, throw the error 
    else return {status: 404, body: "File not found"}; //if not, return 404 status and body as File not found
  }
  if (stats.isDirectory()) { //if stats is a directory 
    return {body: (await readdir(path)).join("\n")}; //return the body as the list of files in the directory 
  } else {
    return {body: createReadStream(path), //else return the body as a readable stream of the file
            type: mime.getType(path)};//and the type as the mime type of the path 
  }
};

const {rmdir, unlink} = require("fs").promises; //this takes rmdir and unlink from fs.promises 

methods.DELETE = async function(request) { //DELETE method 
  let path = urlPath(request.url); //get the path
  let stats; //create a stats variable
  try { //try block
    stats = await stat(path); //get the stats of the path 
  } catch (error) { //catch block
    if (error.code != "ENOENT") throw error; //if error code is not ENOENT, throw the error
    else return {status: 204}; //if not, return 204 status
  }
  if (stats.isDirectory()) await rmdir(path); //if stats is a directory, remove the directory 
  else await unlink(path); //if not, remove the file
  return {status: 204}; // return 204 status
};

const {createWriteStream} = require("fs");//open up the writtable stream 

function pipeStream(from, to) { //this function takes streams and pipe them 
  return new Promise((resolve, reject) => { //return a promise that resolves when the stream is done and rejects if there is an error
    from.on("error", reject); //"from" stream error, reject the promise
    to.on("error", reject); //"to" stream error, reject the promise
    to.on("finish", resolve);//"to" stream finish, resolve the promise
    from.pipe(to); //pipe "from" stream to "to" stream 
  });
}

methods.PUT = async function(request) { //PUT method
  let path = urlPath(request.url); //get the path
  await pipeStream(request, createWriteStream(path)); //pipe the request to the writable stream
  return {status: 204}; //return 204 status
};

const {mkdir} = require("fs").promises; //take mkdir from fs.promises

methods.MKCOL = async function(request) { //MKCOL method
  let path = urlPath(request.url); //get the path
  let stats; //create a stats variable
  try { //try block
    stats = await stat(path); //get the stats of the path
  } catch (error) { //catch block
    if (error.code != "ENOENT") throw error;//if error code is not ENOENT, throw the error
    await mkdir(path); //if not, create the directory
    return {status: 204};//return 204 status
  }
  if (stats.isDirectory()) return {status: 204}; //if stats is a directory, return 204 status
  else return {status: 400, body: "Not a directory"}; //if not, return 400 status and body as Not a directory
};
