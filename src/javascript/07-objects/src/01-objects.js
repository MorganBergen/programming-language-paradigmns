


/*
An example of a JavaScript object.

Each Object has a name and a value.
The value can be of any data type.
The name is a string or can be a symbol.

*/

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};

console.log(day1.squirrel);
// → false
console.log(day1.events);
// → ["work", "touched tree", "pizza", "running"]


let x = {
    name: "Morgan",
    hungry: true,
}

let y = x;
y.name = "new name";
console.log(x.name);

/*
note that if a variable x refers to an object
and the code let y = x is executed, then the variable y holds a reference to the same object through the variable y are also visible through the variable x.
thus making varible x and y refer to the same object.
*/

