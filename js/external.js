console.log("Hello from external javascript");

alert("Welcome to my Website!");

let favColor = prompt("What is your favorite color?");

alert(`Great! ${favColor} is also my favorite color!`);

let pricePrompt = prompt("How much is the price per movie?");
// let price = 3
let mermaidPrompt = prompt("How many days did you have The Little Mermaid?");
// let mermaid = 3
let brotherBearPrompt = prompt("How many days did you have Brother Bear?");
// let brotherBear = 5
let herculesPrompt = prompt("How many days did you have Hercules?");
// let hercules = 1
let movies = parseFloat(mermaidPrompt) + parseFloat(brotherBearPrompt) + parseFloat(herculesPrompt);
let totalCost = movies * pricePrompt;
// let totalCostFixed = totalCost.toFixed(2); // makes sense, works
let totalCostDollars = totalCost.toLocaleString("en-US", {style:"currency", currency:"USD"})
alert(`Your total amount owed today is ${totalCostDollars}`);
console.log("You will owe", totalCostDollars);

let googlePrompt = prompt("How much does Google pay you per hour?");
// let googlePay = 400;
let amazonPrompt = prompt("How much does Amazon pay you per hour?");
// let amazonPay = 380;
let facebookPrompt = prompt("How much does Facebook/Meta pay per hour?")
// let facebookPay = 350;
let googleHoursPrompt = prompt("How many hours did you work at Google this week?");
// let googleHours = 6;
let amazonHoursPrompt = prompt("How many hours did you work at Amazon this week?");
// let amazonHours = 4;
let facebookHoursPrompt = prompt("How many hours did you work at Facebook/Meta this week?");
// let facebookHours = 10;
let totalPay = (googlePrompt * googleHoursPrompt) + (amazonPrompt * amazonHoursPrompt) + (facebookPrompt * facebookHoursPrompt);
// let totalPayFixed = totalPay.toFixed(2);
let totalPayDollars = totalPay.toLocaleString("en-US", {style:"currency", currency:"USD"})
alert(`Your total amount earned this week is ${totalPayDollars}! Way to go!`);

console.log("You made", totalPayDollars);