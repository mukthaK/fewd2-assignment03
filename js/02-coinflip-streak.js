// The “Coin Flip Streak” Game

//Variables
let coinFlip;

//Perform calculations
do {
    coinFlip = Math.round(Math.random()); 
    
    if (coinFlip === 0) {
        console.log('Heads');
    } else if (coinFlip === 1) {
        console.log('Tails');
    }

} while (coinFlip === 1);