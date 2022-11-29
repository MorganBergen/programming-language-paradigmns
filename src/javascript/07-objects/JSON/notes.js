/*
JSON - JavaScript Object Notation


*/

// import the JSON file
const youtube = require('./history.json');

/* serializing objects from stratch */

let test_obj = {
    v: Infinity,
    w: NaN,
    x: 1,
    y: {
        z: [false, null, ""]
    }
}


// JSON.stringify() - converts a JavaScript object or value to a JSON string
let test_obj_str = JSON.stringify(test_obj);
console.log(test_obj_str);
console.log(typeof test_obj_str);


let copy = JSON.parse(test_obj_str);
console.log(copy);
console.log(typeof copy);

// how to access a property of an object
console.log(test_obj.x);




