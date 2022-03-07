// Validate Numeric Entries in LAB 6 (Extra Credit 5 points)

// GLOBAL VARIABLES
let futureValue
let investment
let rate
let years

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('How much do you want to invest?'))
rate = parseFloat(prompt('Enter interest rate as xx.x'))
years = parseInt(prompt('How many years do you want to invest for?'))

//VALIDATE ENTRIES : Within investment, the number should be numeric. Within rate, the number should be numeric and between 0 and a realistic rate like 6%. For years, the number should be numeric and between 1 and 30.
if (isNaN(investment) || isNaN(rate) || isNaN(years) || (rate < 0 || rate > 6.99) || (years <= 1 || years >= 30)) {
    alert('One or more inputs are invalid. Please enter the correct amount');
}

// PERFORM CALCULATIONS
futureValue = investment
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100)
}

// DISPLAY RESULTS
document.write(`Original investment amount: ${investment}<br>`)
document.write(`Interst rate: ${rate}<br>`)
document.write(`Years: ${years}<br>`)
document.write(`Investment future value: ${futureValue.toFixed(2)}`)