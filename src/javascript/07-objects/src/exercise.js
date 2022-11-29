/**
 * @brief   exercise.js
 * @name    Morgan Bergen
 */

class Rabbit {
    constructor(name) {
        this.name = name;
        this.type = "killer";
    }
    speak(line) {
        console.log(`The ${this.name} of type ${this.type} says '${line}'`);
    }
}

let killerRabbit = new Rabbit("killer");
killerRabbit.name = "Rabbit";
killerRabbit.speak("Hello Wolrd!");
