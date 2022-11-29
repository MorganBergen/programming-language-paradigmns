/*
properties that contain functions are called methods
here is an example of a method
each property has three property attributes
1. writable: true
2. enumerable: true
3. configurable: true
*/

let rabbit = {};
rabbit.speak = function (line) {
    console.log(`The rabbit says '${line}'`);
}
rabbit.speak("I'm alive.");
// → The rabbit says 'I'm alive.'


// property attributes
rabbit.defineProperty(rabbit, "value", {
    writable: false,
    enumerable: false,
    configurable: false
});



