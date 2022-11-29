/*
write a program that creats a string that represents an n-by-n grid, using a "*" character
The first position should be a space, and the last position should be a newline
Define a binding name "size" so that it works for any size, outputting a square grid of the given width and height
show the output for size 8 and size 14
between the output for each size print out the size (size = 6)
*/


function grid(size) {
    let x = "";
    for (let i = 0; i < size; i++) {
        x = x + " ";
        for (let j = 0; j < size; j++) {
            console.log(size - j);
            x = x + "*";
        }
        x = x + "\n";
    }
    return (x);
}





console.log(grid(8));