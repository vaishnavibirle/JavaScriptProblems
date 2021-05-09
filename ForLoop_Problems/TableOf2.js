const prompt=require('prompt-sync')({sigint:true});

let number = prompt("Enter value of number ");
number = Number(number);

for(i = 1; i < number; i++){
    result = 2 ** i;
    console.log(result);
}