const prompt=require('prompt-sync')({sigint:true});
let number=prompt("Enter number : ");

number = Number(number);

if(number <= 10000){
    if(number == 1){
        console.log("Number is at unit place");
    }
    else if(number == 10){
        console.log("Number is at tens place");
    }
    else if(number == 100){
        console.log("Number is at hundred place");
    }
    else if(number == 1000){
        console.log("Number is at thousand place");
    }
}
else{
    console.log("Number is ten thousand");
}