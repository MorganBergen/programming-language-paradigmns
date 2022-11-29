/*
 * @author      Morgan Bergen
 * @date        Fri Oct 14 14:32:25 CDT 2022
 * @brief       how to use the reduce function on an Script data set
 * @name        in-class.js
 */



var SCRIPTS = {
    name: 'Coptic',
    ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
    direction: 'ltr',
    year: -200,
    living: false,
    link: 'https://en.wikipedia.org/wiki/Coptic_alphabet'
}


// function to find the script with the most characters
function characterCount(script) {
    return (
        script.ranges.reduce((count, [from, to]) => {
            return count + (to - from);
        }), 0);
}



console.log(SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
}));


