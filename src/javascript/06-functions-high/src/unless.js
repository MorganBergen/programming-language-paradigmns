function unless(test, then) {
    if (!test) {
        then(); // do nothing if test is false, then do arrow function
    }


    repeat(3, n => {
        // if n is dividible by 2, i.e., no remainder
        unless(n % 2 == 1, () => {
            // then print out "n is even"
            console.log(n, "is even");
        });
    });

}

unless(0, console.log);