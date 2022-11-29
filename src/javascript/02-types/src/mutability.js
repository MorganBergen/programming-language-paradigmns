/*

immutable primitive values and mutable object references

primitive values are immutable: there is no way to alter their value.
primitives are soley compared by their value.
strings are immutable and they are compared by their value, two different strinsg are treated equal IFF they have the same length and if the character at each index position is the same.  Objects are different from primitives because they are mutable.
*/

let o = { x: 1 };   // o is an object with a property x with value 1
o.x = 2;            // mutate the property x of o
o.y = 3;            // mutate the object by adding a new property y to o
console.log(o)      // { x: 2, y: 3 }

let a = [1, 2, 3];  // arrays are mutable
a[0] = 0;           // mutate the array by changing the value of the first element
a[3] = 4;           // mutate the array by adding a new element at index 3

/*
Objects are not compared by value, two distinct object are not equal even if they have the exact same properties and values. 
*/

function main() {
    let x = [1, 2, 3];
    let y = [1, 2, 3];
    console.log(x === y); // false
    console.log(x[0] === y[0]); // true
}


let i = { x: 1 };
let j = { x: 1 };
console.log(i === j); // false
console.log(i.x === j.x); // true

let k = []
let l = []
console.log(k === l); // false
console.log(k[0] === l[0]); // true

let m = {};
let n = {};
console.log(m === n); // false

/*
Assiging an object to a variable simply assigns the reference:  it does not create a new copy of the object.  If you want to make a new copy of an object or array.
*/

let orig = ["a", "b", "c"];
let final = [];

for (let i = 0; i < orig.length; i++) {
    final[i] = orig[i];
}

console.log(final); // ["a", "b", "c"]
let c = Array.from(orig);  // In ES6, you can copy arrays with Array.from()

// what would be the difference between copying via assignment through iterating and coping via = operator?
// deep copy versus shallow copy?
let fish = ["angel", "clown", "mandarin", "sturgeon"];
let newFish = []

newFish = fish;
console.log(newFish); // ["angel", "clown", "mandarin", "sturgeon"]


/*
If you want to compare two distinct objects or arrays, you must compare their properties or elements.
*/


function equality(a, b) {
    if (a === b) {
        return (true);
    } if (a.length !== b.length) {
        return (false);
    } else {
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                return (false);
            }
        }
        return (true);
    }
}


equality(["a", "b", "c"], ["a", "b", "c"]); // true



/*
here is an example of a template literal:
*/

let s = "word";
console.log(`Hello, ${s}!`); // Hello, word!
