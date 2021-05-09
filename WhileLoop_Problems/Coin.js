// flips the coin until heads or tails reaches 11
headCount = 0;
tailCount = 0;
while (headCount != 11 && tailCount != 11) {
    let randomNum = Math.floor(Math.random() * 1000) % 2;
    if(randomNum == 0) {
        headCount += headCount;
    }
    else {
        tailCount += tailCount;
    }
}
if(headCount == 11) {
    console.log("Heads Wins");
    console.log("Heads Count: "+headCount);
}
else {
    console.log("Tails Wins");
    console.log("Tails Count: "+tailCount);
}