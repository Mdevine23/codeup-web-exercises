// const targetNumber = Math.floor(Math.random() * 100) + 1;
// console.log(`${targetNumber}`);
// let attempts = 0;
// function checkGuess() {
//     const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
//
//     do {
//         console.log(attempts);
//         if (userGuess > targetNumber) {
//             parseInt(prompt("Guess a number lower."));
//             attempts++;
//             checkGuess();
//         } else if (userGuess < targetNumber) {
//             parseInt(prompt("Guess a number higher."));
//             attempts++;
//             checkGuess();
//         }else {
//             alert(`You got it!`)
//         }
//     } while(userGuess !== targetNumber)
//
// }
// // its working but runs through the program twice during the loop. Needs extra work.
//
// checkGuess();

const findLongestWord = (values) => {
    const toArray = values.split(" ");
    let result = "";
    for (let word of toArray) {
        if(word.length > result.length) {
            result = word;
        }
    }
    return result;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

