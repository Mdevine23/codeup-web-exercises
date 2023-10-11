// Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
//     Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.


const oddPrompt = prompt('Input an odd number between 1 and 50');
if (oddPrompt) {
    console.log(`Number to skip is: ${oddPrompt}`);
}
for (let i = 1; i < 50; i+=2) {
    if (i == oddPrompt) {
        console.log(`Yikes! Skipping number: ${oddPrompt}`);
        continue;
    }
    console.log(`Here is an odd number: ${i}`);
}

