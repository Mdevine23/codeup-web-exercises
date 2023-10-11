const showMultiplicationTable = (num) => {
    let result;
    for (let i = 1; i <= 10 ; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
    return result;
};
let multiply = showMultiplicationTable(7)

// Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. For example:

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * 200) + 20;
    let isEven = randomNumber % 2 === 0;
    const isEvenMessage = isEven ? 'Your number is even' : 'Your number is odd';
    console.log(`${randomNumber} ${isEvenMessage}`);
}

// Create a for loop that uses console.log to create the output shown below.


for (let i = 1; i < 10; i++) {
    let num = `${i}`;
        console.log(`${num.repeat(i)}`);
    }

// Create a for loop that uses console.log to create the output shown below.

for (let i = 100; i > 0; i-=5) {
    console.log(`${i}`)
    }