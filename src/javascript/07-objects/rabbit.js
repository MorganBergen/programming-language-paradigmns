
/* @author  	Morgan Bergen
 * @date	Fri Oct 14 16:18:50 CDT 2022
 * @brief	this keyword for rabbit example
 */

// rabbit object
let rabbit = {};


// method for rabbit object
rabbit.speak = function(line) {
	console.log(`The rabbit says '${line}'`);
};

// call method
rabbit.speak("I'm alive.");

// this keyword
function speak(line) {
	console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers, " + "how late it's getting!");
hungryRabbit.speak("I could use a carrot right now.");


