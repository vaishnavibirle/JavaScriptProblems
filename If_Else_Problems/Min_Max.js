//Generating 5 random digit values and calculating maximum and minimum values.
let random_digit1 = Math.floor((Math.random() * 899) + 100);
let random_digit2 = Math.floor((Math.random() * 899) + 100);
let random_digit3 = Math.floor((Math.random() * 899) + 100);
let random_digit4 = Math.floor((Math.random() * 899) + 100);
let random_digit5 = Math.floor((Math.random() * 899) + 100);

//initializing maximum_value and minimum_value
let maximum_value = 0;
let minimum_value = 0;

//comparing all random digits and giving output max value using if else statements

if((random_digit1 > random_digit2) && (random_digit1 > random_digit3) && (random_digit1 > random_digit4) && (random_digit1 > random_digit5))
{
    maximum_value = random_digit1;
    console.log("Maximum value is : "+random_digit1);
}

if((random_digit2 > random_digit3) && (random_digit2 > random_digit4) && (random_digit2 > random_digit5))
{
    maximum_value = random_digit2;
    console.log("Maximum value is : "+random_digit2);
}

if((random_digit3 > random_digit4) && (random_digit3 > random_digit5))
{
    maximum_value = random_digit3;
    console.log("Maximum value is : "+random_digit3);
}

if((random_digit4 > random_digit5))
{
    maximum_value = random_digit4;
    console.log("Maximum value is : "+random_digit4);
}

else 
{
    maximum_value = random_digit5;
    console.log("Maximum value is : "+random_digit5);
}

//comparing all random digits and giving output min value using if else statements


if((random_digit1 < random_digit2) && (random_digit1 < random_digit3) && (random_digit1 < random_digit4) && (random_digit1 < random_digit5))
{
    minimum_value = random_digit1;
    console.log("Minimum value is : "+random_digit1);
}

if((random_digit2 < random_digit3) && (random_digit2 < random_digit4) && (random_digit2 < random_digit5))
{
    minimum_value = random_digit2;
    console.log("Minimum value is : "+random_digit2);
}

if((random_digit3 < random_digit4) && (random_digit3 < random_digit5))
{
    minimum_value = random_digit3;
    console.log("Minimum value is : "+random_digit3);
}

if((random_digit4 < random_digit5))
{
    minimum_value = random_digit4;
    console.log("Minimum value is : "+random_digit4);
}

else 
{
    minimum_value = random_digit5;
    console.log("Minimum value is : "+random_digit5);
}