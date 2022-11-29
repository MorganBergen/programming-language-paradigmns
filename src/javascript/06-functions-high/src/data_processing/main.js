/*
 * @author      Morgan Bergen
 * @date        Fri Oct 14 12:49:27 CDT 2022
 * @brief       processing data from scripts.js
 * @file        main.js
 */

const SCRIPTS = require("./scripts.js");


// import this module into this file
require("./scripts.js");

/*
 * @pre         none
 * @post        none
 * @returns     passed which will be an array of objects
 * @brief
 */
function filter(array, test) {
    let passed = [];
    for (let element of array) {
        // console.log(element.name);
        if (test(element)) {
            passed.push(element);
        }
    }
    return (passed);
}

SCRIPTS.forEach(i => console.log(i.name));
//console.log(filter(SCRIPTS, script => (script.living)));
//console.log(filter(SCRIPTS, script => (script.direction == "ttb")));
