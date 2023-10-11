// //TRADITIONAL FOR LOOPS
//
// for (let i = 0; i < 10 ; i++) {
//     console.log(`The for code ran at index ${i}.`);
// }
//
// for (let i = 10; i > 0; i--) {
//     console.log(`The for code ran at index ${i}.`)
// }
//
// //WHILE LOOPS
//
// let i = 0
// while(i < 10){
//     console.log(`The while code is ran at index ${i}`);
//     i++;
// }
//
// let favPizza = prompt("What is your favorite pizza");
// while(favPizza !== 'supreme'){
//     favPizza = prompt('Wrong try again!');
// }
// alert(`That's a good choice.`);

//DO WHILE LOOP

// let myNumber = 0;
//
// do {
//     console.log(myNumber);
//     myNumber++;
// } while(myNumber <= 10);

//Write a function call buildPyramid that takes a number as an argument.
//The function should return an asterisk pyramid that has as many rows as the number.

//
// const buildRow = (num) => {
//     let result = "";
//     for (let i = 0; i < num; i++){
//         result += "*";
//     }
//     result += "\n";
//     return result;
// };
//
// const buildPyramid = (rows) => {
//     let result = "";
//     for (let i = 1; i < rows; i++) {
//         result += buildRow(i);
//     }
//     return result;
// };

// let pyramid = buildPyramid(5);
// console.log(pyramid);

