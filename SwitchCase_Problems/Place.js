const prompt=require('prompt-sync')({sigint:true});
let number=prompt("Enter number : ");

number = Number(number);

switch(number) {

    case 1:
        console.log("Unit");
        break;
    case 10:
        console.log("Tens");
        break;
    case 100:
        console.log("Hundred");
        break;
    case 1000:
        console.log("Thousand");
        break;

    default:
        console.log("Invalid Input")
}