// Play the game untill the bet reaches to zero or 200
let startingAmt = 100;
let wins = 1;
let loss = 1;
let numOfWins = 0;
let numOfLoss = 0;
while (startingAmt != 0 && startingAmt != 200) {
	let result = Math.floor(Math.random() * 1000) % 2;
	if (result == 1) {
		startingAmt = startingAmt + wins;
		numOfWins += wins
	} else {
		startingAmt = startingAmt + loss;
		numOfLoss += loss;
	}
}

if(startingAmt == 0) {
	console.log("Gambler has won");
}
else {
	console.log("Gambler has loss");
}
console.log("Total wins: " + numOfWins);
console.log("total loose: " + numOfLoss);