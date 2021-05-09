// prints table of the powers of 2 that are less than or equal to 2^n till given number
const prompt = require('prompt-sync')({sigint:true});
let number = prompt("Enter a Number: ");

number = Number(number);

let i = 1;
let power = 0;
while (power < number) {
	power = 2 ** i;
	console.log("2 ^" + i + "= " + power);
    i++;
}