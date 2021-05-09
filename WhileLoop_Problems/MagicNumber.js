// Find the Magic Number
const prompt = require('prompt-sync')({sigint:true});
let number = prompt("Enter a Number: ");

number = Number(number);

let low = 1;
let high = 100;
let flag = 0;
let mid = 0;

while (flag == 0) {
    mid = Math.floor(low + high) / 2;
    if (number == mid) {
        console.log(number+" is a Magic Number");
        flag = 1;
    }
    else if (number > mid) {
        low = mid + 1;
    }
    else {
        high = mid - 1;
    }
}