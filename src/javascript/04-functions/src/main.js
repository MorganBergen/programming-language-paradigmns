/**
 * @file    main.js
 * @author  Morgan Bergen
 * @brief   make this following syntax possible
 *          add(2)(4)
 *          =>  6
 * @date    Sept 2nd 2022
 */


function main() {

    /**
     * @pre     can take any type that allows for addition
     * @post    will return an unnamed function that add's arg_1 and arg_2
     * @param   arg_1
     * @return  function(arg_1)(arg_2)
     */
    let add = function (arg_1) {

        /**
         * @pre     second argument must allow for addition to arg_2
         * @post    will return an integer
         * @param   arg_2
         * @return  arg_1 + arg_2
         */
        return function (arg_2) {
            return (arg_1 + arg_2);
        };
    }

    console.log(add(2)(4));

}

main();


/*
This syntax does not work because you can only pass an anonymous function that assigns it to the variable
Therefore the only way to define a function that takes an argument and returns another
embedded function is to have that second embedded function be unnamed 

var outter = function (param_1) {

    var inner = function (param_2) {
        return (param_2);
    }

    return (inner(param_1));

}
console.log(outter("morgan")("bergen"));
*/













