const fizzBuzz = (start, end) => {
    start = parseFloat(start);
    end = parseFloat(end);
    if (isNaN(start) || isNaN(end)) {
        return false;
    }
    // ^^^^ validate early so that the parameters WILL work ^^^^

    for (let i = start; i <= end; i++) {
        if (i % 15 === 0) {
            console.log('FizzBuzz');
        } else if (i % 5 === 0) {
            console.log('Buzz');
        } else if (i % 3 === 0) {
            console.log('Fizz');
        } else {
            console.log(i)
        }
    }
}
fizzBuzz(0, 100);

// ^^^ using the tradition for loop, put your less likely scenario go in your first if conditional^^^