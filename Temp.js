const prompt = require("prompt-sync")()

let tempInCelcius = parseInt(prompt("Enter Number in Celcius "))

let tempInFehenite = tempInCelcius*(9/5)+32;
console.log(tempInFehenite)
let tempInKelvin;