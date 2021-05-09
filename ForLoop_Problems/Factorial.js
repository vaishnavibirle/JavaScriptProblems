// Compute a factorial of a number
const prompt = require('prompt-sync')({sigint:true});
let number = prompt("Enter a Number: ");

number = Number(number);

let result = 1;
for (let i = number; i > 1; i--) {
	result = result * i;
}
console.log(result);