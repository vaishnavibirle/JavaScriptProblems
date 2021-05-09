// To compute Factors of a number N using prime factorization method
const prompt = require('prompt-sync')({sigint:true});
let number = prompt("Enter a Number: ");

number = Number(number);

console.log("Prime Factors are : ");
for (let i = 2; i <= number; i++) {
    while ((number % i) == 0) {
        number = number / i;
        console.log(i);
    }
}