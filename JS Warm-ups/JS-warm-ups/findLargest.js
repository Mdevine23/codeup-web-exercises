// Function to find the largest number in an array
const findLargestNumber = (arr) => {
    let result = (Math.max(...arr));
    // validate and return early
    // start a variable "largest" at 0
    // loop through arr and replace "largest" if value is greater
    // return largest
    return result;
};

(() => {
    // Sample array of numbers
    const numbers = [42, 17, 8, 94, 23, 61, 12, 51, 6];
    // Call the function and display the result
    const result = findLargestNumber(numbers);
    console.log(result);
})();