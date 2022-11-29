/*
 * @author      Morgan Bergen
 * @date        Thu Oct 13 20:15:53 CDT 2022
 * @brief       using higher order functions    
 */

function repeat(n, action) {
    console.log(action("parameter"));


    for (let i = 0; i < n; i++) {
        action(i);
    }
}

function main() {
    let large = 10;
    repeat(large, console.log);
}

main();

