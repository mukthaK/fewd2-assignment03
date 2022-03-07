// The “Coin Flip” Game Redux

//Variables
let coinFlip;

//Collect input from user
let totalFlips = parseInt(prompt('How many times would you like to flip the coin?'));

//Perform calculations
for (let i = 0; i < totalFlips; i++) {

    coinFlip = Math.round(Math.random()); 

    if (coinFlip === 0) {
        console.log('Heads');
    } else if (coinFlip === 1) {
        console.log('Tails');
    }
}