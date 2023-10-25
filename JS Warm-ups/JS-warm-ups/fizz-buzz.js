// const fizzBuzz = (start, end) => {
//     start = parseFloat(start);
//     end = parseFloat(end);
//     if (isNaN(start) || isNaN(end)) {
//         return false;
//     }
    // ^^^^ validate early so that the parameters WILL work ^^^^

//     for (let i = start; i <= end; i++) {
//         if (i % 15 === 0) {
//             console.log('FizzBuzz');
//         } else if (i % 5 === 0) {
//             console.log('Buzz');
//         } else if (i % 3 === 0) {
//             console.log('Fizz');
//         } else {
//             console.log(i)
//         }
//     }
// }
// fizzBuzz(0, 100);

// ^^^ using the tradition for loop, put your less likely scenario go in your first if conditional^^^
const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
         [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
const createPairs = (array) => {
    array = shuffleArray(array);
    let pairs = [];
    while (array.length > 0) {
        let student1 = array.pop();
        pairs.push(student1);
        let student2 = array.pop();
        pairs.push(student2);
    }
    return pairs;
}


const students = [
    "Amanda",
    "Bianca",
    "Cameron",
    "Chris",
    "Dany,",
    "David",
    "Diana",
    "Drew",
    "Evan",
    "Hassan",
    "Jack",
    "Jason",
    "John",
    "Johnathan",
    "Jordan",
    "Joshua",
    "Katie",
    "Lewis",
];

console.log(createPairs(students));