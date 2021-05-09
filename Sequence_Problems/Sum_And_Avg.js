//Generating 5 random two digit values 
let number1 = Math.floor((Math.random() * 89) + 10);
let number2 = Math.floor((Math.random() * 89) + 10);
let number3 = Math.floor((Math.random() * 89) + 10);
let number4 = Math.floor((Math.random() * 89) + 10);
let number5 = Math.floor((Math.random() * 89) + 10);

//Adding 5 random two digit values
Sum = number1 + number2 + number3 + number4 + number5;

//printing sum  as a result 
console.log(Sum);

//Calculating avg of 5 random 2 digit values
Average = Sum/5;

//printing average as result
console.log(Average);