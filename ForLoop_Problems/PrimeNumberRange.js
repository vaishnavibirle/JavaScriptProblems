  
// Prints the Prime Number Between Range From Starting to Ending Number
const prompt = require('prompt-sync')({sigint:true});
let startNumber = prompt("Enter a Number From Starting: ");
let endNumber = prompt("Enter a Number From Ending: ");

startNumber = Number(startNumber);
endNumber = Number(endNumber);

for (let i = startNumber; i <= endNumber; i++) {
    let flag =1;
    for (let j = 2; j <= i / 2; j++) {
        if ((i % j) == 0) {
            flag = 0;
            break;
        }
    }
    if (flag == 1) {
        console.log(i+" ");
    }
}