// Checking Whether given number is Prime and Palindrome or not
const prompt = require('prompt-sync')({sigint:true});
let num = prompt("Enter a number: ");

num = Number(num);

if (PalindromeCheck(num)) {
	if (PrimeCheck(num)) {
		console.log("the Number is Palindrom and Prime")
	} else
		console.log("the Number is Palindrom but Not a Prime")
} else {
    console.log("the Number is not Palindrome")
}
// Function to check whether given number is prime or not
function PrimeCheck(num) {
	let isPrime = true;
	let number = num;
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				isPrime = false;
				break;
			}
		}
	return isPrime;
}
// Function to check whether given number is palindrome or not
function PalindromeCheck(num) {
	let isPalindrome = true;
	let number = num;
	let rem, temp, final = 0;
	temp = num;
	while (number > 0) {
		rem = number % 10;
		final = final * 10 + rem;
		number = parseInt(number / 10);
	}
	if (final != temp) {
		isPalindrome = false;
	}
	return isPalindrome;
}