
/*
 * @author	Morgan Bergen
 * @date	Sat Oct 15 21:28:39 CDT 2022
 * @brief	strict mode in use
 * @file	main.js
 */




function canYouSpotTheProblem() {
	"use strict";
	for (counter = 0; counter < 10; counter++) {
		console.log(`${counter}`);
	}
}
canYouSpotTheProblem();

/*
 * some languages want to know the types of all your bindings and expressions before even running a program and they will tell you right away when a type is used in an inconsistent way.  JavaScript considers types only when actually running the program, and even then often tries to implicitly convert values to the types it needs.  This can lead to some very confusing situations.  Still, JavaScript has a way to opt into a more restrictive mode that helps catch some common errors, and that's what the "use strict" directive does.
 */


// (state, memory) -> {state: string, memory: Array}
function goalOrientedRobot(state, memory) {
	// ...
}

/*
 * there are a number of different conventions for annotating javascript programs
 * with these types.  Computers are good at repetitive tasks
 * and testing is the ideal repetitive task.  Automated testing is the process of writing
 * a program that tests another program.  Writing tests is a bit more work than testing
 * manually.  But once you've done it, it takes you only a few seconds to verify that 
 * your program still behaves properly in all the situations you wrote tests for.
 * Tests usually take the form of little labeled programs that verify some aspect of your
 * code.  For example, a set of tests for the toUpperCase method might look like this:
 */

function test(label, body) {
	if (!body()) {
		console.log(`Failed: ${label}`);
	}

	test(`convert Latin text to uppercase`, () => {
		return "hello".toUpperCase() == "HELLO";
	});

};
