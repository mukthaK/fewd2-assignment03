// Odd or Even?

//Checking for odd or even and displaying result
for (let i = 0; i <= 15; i++) {    
    let rem = i % 2;
    if (rem === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}