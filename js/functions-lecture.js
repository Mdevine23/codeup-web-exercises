// This is the way for an arrow function with two parameters!
// const isCoding = (name, sport) => {
//     return `${name} loves ${sport}.`
// };
// const saying = isCoding(`Mark`, `golf`);
// console.log(saying);
//
// //Continued lesson
//
// const heyYall = (greeting, message) => {
//     return `${greeting} ${message}.`
// };
// const intro = heyYall (`Welcome,`, `happy to have you here!`);
// console.log(intro);

// const football = (city, team) => {
//     return `${city} ${team}`;
// }
// const favTeam = football(`Buffalo`, `Bills`);
// console.log(favTeam);
//
// //Scoping
// const globalVar = `I am global`
//
// const taiFighter = () => {
//     const localVar = `I am local`;
//     console.log(globalVar);
//     console.log(localVar);
// }
//
// taiFighter();

//Exercises

// const sayHello = (name) => {
//     return `Hello, ${name}`;
// }
// let myName = `Mark`;
// const helloMessage = sayHello(myName);
//
// console.log(helloMessage);

// const random = Math.floor((Math.random() * 3) + 1);
// const isTwo = (a) => {
//     return a === 2
// }
// const num = isTwo(random)
// console.log(num)

// const billPrompt = parseFloat(prompt(`What is the total amount of your bill?`));
// const tipPrompt = parseFloat(prompt('What percentage would you like to tip?'));
// const tip = (billPrompt * tipPrompt)/100
// let totalCostDollars = tip.toLocaleString("en-US", {style:"currency", currency:"USD"})
// alert(`Tip amount is ${totalCostDollars}`)
//
// const calculatorTip = (billTotal, tipPercentage) => {
//     return billTotal * tipPercentage/100
// }
// const tipTotal = calculatorTip(`${billPrompt}`, `${tipPrompt}`)
// console.log(tipTotal)
//
// let originalPrice = 45.99;
// let discountPercent = .12;
const applyDiscount = (price, discount) => {
    return price - (price * discount)
}
const discount = applyDiscount(45.99, .12)
console.log(discount)