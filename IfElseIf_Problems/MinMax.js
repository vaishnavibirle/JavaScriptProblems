const prompt=require('prompt-sync')({sigint:true});
let a = prompt("Enter value of a : ");
let b = prompt("Enter value of b : ");
let c = prompt("Enter value of c : ");

a = Number(a);
b = Number(b);
c = Number(c);

let operation1 = a + b * c;
let operation2 = a % b + c;
let operation3 = c + a / b;
let operation4 = a * b + c;

let maximum = 0;
let minimum = 0;

if( operation1 > operation2 && operation1 > operation3 && operation1 > operation4 ){
    console.log(operation1);
}

else if( operation2 > operation3 && operation2 > operation4 ){
    console.log(operation2);
}
else if( operation3 > operation4 ){
    console.log(operation3);
}
else{
    console.log(operation4);
}
if( operation1 < operation2 && operation1 < operation3 && operation1 < operation4 ){
    console.log(operation1);
}

else if( operation2 < operation3 && operation2 < operation4 ){
    console.log(operation2);
}
else if( operation3 < operation4 ){
    console.log(operation3);
}
else{
    console.log(operation4);
}