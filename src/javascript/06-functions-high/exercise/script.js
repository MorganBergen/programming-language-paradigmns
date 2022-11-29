var SCRIPTS = [
    {
        name: "Coptic",
        ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
        direction: "ltr",
        year: -200,
        living: false,
        link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
   }
]


function characterCount(script) {
    return script.ranges.reduce((count, [from, to]) => {
        return count + (to - from);
    }, 0);
}

console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));

// → {name: "Han", …}
// console.log(SCRIPTS.reduce((a, b) => {
//     return characterCount(a) > characterCount(b) ? b : a;
// }));

console.log(characterCount(SCRIPTS[0]));
