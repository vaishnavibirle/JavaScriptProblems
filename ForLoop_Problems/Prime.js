// It Checks Whether Number is Prime or Not
const prompt = require('prompt-sync')({sigint:true});
let number = prompt("Enter a Number: ");

number = Number(number);

let flag=1;
if((number==0) || (number ==1)){
    console.log("Number should be Starting with 2");
}
else if(number>1){
    for(let i=2; i <= (number/2); i++){
        if((number%i)==0){
            flag=0;
            break;
        }
    }
    if(flag==1){
        console.log("number "+"is Prime Number");
    }
    else{
        console.log("number "+"is not Prime Number");
    }
}