// Create a while loop that uses console.log() to create the output shown below.

// let i = 1;
// while (i < 65537) {
//     console.log(i);
//     i+=i;
// }

let random1 = Math.floor(Math.random() * 50) + 50;
let random2 = Math.floor(Math.random() * 5) + 1;
let totalCones = random1;
let conesSold =random2

console.log(`You have ${totalCones} available to sell.`)

do {
    totalCones -= conesSold;
    console.log(`Total cones: ${totalCones}`);
} while (totalCones > 0);

if (totalCones === 0) {
    console.log(`Yay i sold all my cones`);
} else {
    console.log(`I cant sell you ${conesSold} cones, I only have ${totalCones} left.`);
}






