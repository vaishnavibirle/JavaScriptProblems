// To Check Whether Given Number is Palindrome or not
const prompt = require('prompt-sync')({sigint:true});
let number = prompt("Enter a Number : ");

number = Number(number);

let temp = number;
PalindromCheck(number);
function PalindromCheck(number) {
	let rem, final = 0;
	while (number > 0) {
		rem = number % 10;
		number = parseInt(number / 10);
		final = final * 10 + rem;
	}
	if(temp == final) {
		console.log("Number is Palindrome");
	} else {
		console.log("Number is not a Palindrome");
	}
}