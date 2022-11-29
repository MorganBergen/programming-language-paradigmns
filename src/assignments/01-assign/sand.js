/*
write a program that creates a string that represents an n-by-n grid
using newline characters to seperate lines
*/

function rec(row, col) {
    let r = row;
    let c = col;
    if (r === 0 && c === 0) {
        return (0);
    } else {
        x = `${r}x${c}`;
        console.log(x);
        return (rec(row - 1, col - 1));
    }
}

console.log(rec(8, 8));


