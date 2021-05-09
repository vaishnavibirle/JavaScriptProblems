const prompt=require('prompt-sync')({sigint:true});

let number = prompt("Enter value of number ");
number = Number(number);

let harmonicNumber = 0;

for(i = 1; i < number; i++){
    harmonicNumber = harmonicNumber + (1/i);
}

console.log(harmonicNumber);