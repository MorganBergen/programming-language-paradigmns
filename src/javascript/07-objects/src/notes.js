

/*
properties that contain functions are methds
*/

let twitter = "https://twitter.com/iamdevloper";
console.log(typeof twitter.toUpperCase);
console.log(twitter.toUpperCase());

/*
methods for pushing values at the end of an array
*/

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);


/*
Assigning properties and values to opjects
It is possible to assign properties and values to objects
This will replace the property's value if it already existed
or create a new property on the object if it didn't
*/

let user = {
    name: "John",
    age: 30,
    history: ["xx", "yy", "xx"],
    isAdmin: true
}

user.green = false;

console.log(user);

let object1 = { a: 1, b: 2, c: 3 };
Object.assign(object1, { x: 10, y: 20, z: 30 });
console.log(object1);


/*
the binary in operator when applied to tells you whether that object has a property with that name.
*/
let anObject = { left: 1, right: 2 };
console.log("left" in anObject);
// → true
delete anObject.left
console.log("left" in anObject);

/*
to find out wheat properties an object has, you can use the Object.keys function
*/

console.log(Object.keys({ x: 0, y: 0, z: 0 }));
console.log(`\\ you give an object, and it returns an array of strings that are the property names`);
console.log(Object.prototype);
console.log(anObject.prototype);
console.log(typeof anObject.prototype);
console.log(typeof Object.prototype);

function main() {

    console.log("LENGTH IS NOT A METHOD; IT IS A PROPERTY WHO IS PRIVATE");

    let listOfNums = [123123, 1111, 12222, 12312454];

    /*
    in order to find the length of an arrayy you can use the length property

    */
    console.log(listOfNums.length);

    for (let i = 0; i < listOfNums.length; i++) {

        console.log(listOfNums[i]);
    }

}

main();



/*
OBJECTS ARE MUTABLE AND ARRAYS ARE MUTABLE
*/



let ex_mutables = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};

console.log(ex_mutables);
