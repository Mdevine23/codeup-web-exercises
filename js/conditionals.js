// const username = "mdevine";
//
// if(username) {
//     console.log(`The user is logged in.`)
// } else {
//     console.log(`The user is NOT logged in!`)
// }
// console.log(`THIS IS AFTER THE CONDITIONAL STATEMENT`)

// const numOfUsers = 1000
//
// if(numOfUsers >= 10000) {
//     console.log(`OK that's too many users!`)
// }  else if (numOfUsers >= 200) {
//     console.log(`That's a lot of users!`)
// }
//     else {
//     console.log(`Marketing needs to do a better job.`)
// }
    // Conditions Exercises

// const analyzeColor = (color) => {
//     if (color === `blue`) {
//         console.log(`Blue is the color of he sky`)
//     } else if (color === `red`) {
//         console.log(`Red is like a rose`)
//     }   else {
//         console.log(`That awesome!`)
//     }
// }
// // analyzeColor(`red`);
//
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
//
// analyzeColor(randomColor);

// const analyzeColor = prompt(`What is your fav color`)
//     switch(analyzeColor) {
//         case `red`:
//             alert(`Red like a rose`);
//             break;
//         case `blue`:
//             alert(`Blue like the sky`);
//             break;
//         case `orange`:
//             alert(`Orange like an orange`);
//             break;
//         case 'green':
//             alert('Green is the color of grass');
//             break;
//         default:
//             alert(`${analyzeColor} is not my favorite.`)
// }
// TODO:
//     * Suppose there's a promotion in Walmart, each customer is given a randomly
// * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
// * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
// * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
// * everything for free!.
// *
// * Write a function named `calculateTotal` which accepts a lucky number and total
// * amount, and returns the discounted price.
// *
let randomNum = Math.floor(Math.random() * (5));


console.log(randomNum)

// * Example:
// * calculateTotal(0, 100) // returns 100
// * calculateTotal(4, 100) // returns 50
// * calculateTotal(5, 100) // returns 0
// *
// * Test your function by passing it various values and checking for the expected
// * return value.
//     */
//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// // const luckyNumber = Math.floor(Math.random() * 6);
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
//  */