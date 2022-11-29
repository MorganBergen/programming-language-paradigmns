function promptDirection(question) {

    console.log("promptDirection()");

    let result = prompt(question);

    if (result.toLowerCase() == "left") {
        console.log("toLowerCase() == left");
        return "L";
    }

    if (result.toLowerCase() == "right") {
        console.log("toLowerCase() == right");
        return "R";
    }

    throw new Error("Invalid direction: " + result);

}

function look() {
    console.log("look()");
    if (promptDirection("Which way?") == "L") {
        console.log(`promptDirection() == "L" `);
        return "a house";
    } else {
        console.log(`promptDirection() != "L" `);
        return "two angry bears";
    }
}

try {
    console.log("You see", look());
} catch (error) {
    console.log("Something went wrong: " + error);
}

// → Something went wrong: Invalid direction: Left