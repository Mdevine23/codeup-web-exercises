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
// analyzeColor(`red`);

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
//         case 'light purple':
//             alert(`Travis loves ${analyzeColor}`);
//             break;
//         default:
//             alert(`${analyzeColor}, what a  weirdo...`)
//     }

// const calculateTotal = (luckyNumber, totalAmount) => {
//     if (luckyNumber > 5) {
//         return false;
//     }
//     totalAmount = parseFloat(totalAmount);
//     let discountedPrice;
//     switch(luckyNumber) {
//         case 0:
//             discountedPrice = totalAmount;
//             break;
//         case 1:
//             discountedPrice = totalAmount * .9;
//             break;
//         case 2:
//             discountedPrice = totalAmount * .75;
//             break;
//         case 3:
//             discountedPrice = totalAmount * .65;
//             break;
//         case 4:
//             discountedPrice = totalAmount * .5;
//             break;
//         case 5:
//             discountedPrice = 0;
//             break;
//     }
//     return discountedPrice;
// }
// const pricePrompt = prompt('What is your total?');
// const luckyNumber = Math.floor(Math.random() * 6);
// const newPrice = calculateTotal(luckyNumber, pricePrompt);
// alert(`Your price before saving is ${pricePrompt}. Your lucky number is: ${luckyNumber}. Your new total is ${newPrice}!`);

const userConfirm = confirm('Would you like to input a number?');
    if (userConfirm) {
        const userNumber = prompt('Enter a number.');
        const userNumberFloat = parseFloat(userNumber);
        const isEven = userNumberFloat % 2 === 0;
        const isEvenMessage = isEven ? 'Your number is even' : 'Your number is odd';
        alert(isEvenMessage);
        const plus100 = userNumberFloat + 100;
        alert(`Your number is ${plus100}`);
        const isPositive = userNumberFloat >= 0;
        const isPositiveMessage = isPositive ? 'Your number is positive' : 'Your number is negative';
        alert(isPositiveMessage);
    } else {
        alert('Cancel Operation');
    }








