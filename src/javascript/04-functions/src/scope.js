/*
 * @author	Morgan Bergen
 * @date	Wed Oct 12 13:00:13 CDT 2022
 * @brief	understading scopes in javascript
 * @file 	scope.js
 */

let x = 10;
if (true) {
	let y = 20;
	var z = 30;
	console.log(x + y + z);
	let string_local = "local to the scope";
} 

// if we do this function we will recieve a ReferenceError: string_local is not defined
console.log(x + z);



const hummus = function(factor) {
	const ingredient = function(amount, unit, name) {
		
		if (ingredientAmount > 1) {
			unit += "s";
		}
		console.log(`${ingredientAmount} ${unit} ${name}`);
	}
	ingredient(1, "can", "chickpeas");
	ingredient(0.25, "cup", "tahini");
	ingredient(0.25, "cup", "lemon juice");
	ingredient(1, "clove", "garlic");
	ingredient(2, "tablespoon", "olive oil");
	ingredient(0.5, "teaspoon", "cumin");
};








