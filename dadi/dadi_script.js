
let randomPcNum = Math.floor(Math.random() * 6) + 1;
let randomYourNum = Math.floor(Math.random() * 6) + 1;
console.log(randomPcNum);
console.log(randomYourNum);

let total = randomPcNum + randomYourNum;
// console.log(total);

if (randomPcNum > randomYourNum ) {
    console.log("vince pc");
} else if (randomPcNum === randomYourNum) {
    console.log("Siete pari...Riprova");

} else {
    console.log("Hai vinto !!!");
}


