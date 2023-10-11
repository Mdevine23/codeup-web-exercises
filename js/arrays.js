

const fruits = ['orange', 'strawberry', 'kiwi', 'tomato', 'banana', 'blueberry'];
const firstFruit = fruits[0];
const nmrOfFruits = fruits.length;

// for (let i = 0; i < nmrOfFruits; i++) {
//     const fruit = fruits[i];
//     if (fruit.includes('berry')) {
//         console.log(fruit);
//     }
// }

//for...of loop

for (let fruit of fruits){
    if (fruit.includes('berry')) {
        console.log(fruit);
    }
}

// forEach method

fruits.forEach((fruit, index, array) => {
    if (fruit.includes("berry")) {
        console.log(fruit);
    }
});

// IIFE (Immediately Invoke Function Expression)
//Main Method
(()=>{
    //START HERE


})();

// the spread operator (...)

