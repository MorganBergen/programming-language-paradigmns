function noisy(f) {         // makes f more verbose
    return (args) => {
        // first by printing out arguments
        console.log("calling with", args);

        // then printing out arguments and results of function
        let result = f(args);

        console.log("called with", args, ", returned", result);
        return result;
    };
}
noisy(Math.min)(3, 2, 1);