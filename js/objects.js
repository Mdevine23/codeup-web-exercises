const appliedDiscount = (price) => {
    let discount = price * .12;
    let result = price - discount;
    return parseFloat(result);
}

const discount = (totalAmount) => {
    let result = totalAmount * .12;
        return parseFloat(result);
}

const createBook = (title, firstName, lastName) => {
    return {
        title: title,
        author: {
            firstName: firstName,
            lastName: lastName,
        }
    }
}

const showBookInfo = (book, books) => {
    const {title, author} = book;
    const index = books.indexOf(book);
    console.log(`Book # ${index + 1} \nTitle: ${title} \nAuthor: ${author.firstName} ${author.lastName} `)
}


(function() {


    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     */

    const person = {
        firstName: 'Mark',
        lastName: 'Devine',
        sayHello:  function () {
            return `Hello from ${this.firstName} ${this.lastName}`;
        }
    };

     // * Example:
     //  console.log(person.firstName) // "Rick"
     //  console.log(person.lastName) // "Sanchez"


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     */

     // * Example

    // console.log(person.sayHello()) // "Hello from Rick Sanchez!"


    /** TODO:
     * HEB has an offer for the shopper that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
//
    shoppers.forEach((shopper) => {
    if (shopper.amount > 200) {
        console.log(`${shopper.name}, had and original bill of ${shopper.amount}, their discount is ${discount(shopper.amount)}, he now owes ${appliedDiscount(shopper.amount)}.`);
    } else {
        console.log(`${shopper.name}, received no discount and owes ${shopper.amount}.`);
    }
})
// console.log(shopper);

     // TODO:
     // * Create an array of objects that represent books and store it in a
     // * variable named `books`. Each object should have a title and an author
     // * property. The author property should be an object with properties
     // * `firstName` and `lastName`. Be creative and add at least 5 books to the
     // * array
     // *
     // * Example:

    const books = [
        {title: 'The Salmon of Doubt', author: {firstName: 'Douglas', lastName: 'Adams'}},
        {title: 'The Great Escape', author: {firstName: 'Paul', lastName: 'Brickhill'}},
        {title: 'Ego is the Enemy', author: {firstName: 'Ryan', lastName: 'Holiday'}},
        {title: 'Super System', author: {firstName: 'Doyal', lastName: 'Brunson'}},
        {title: 'Dare to Lead', author: {firstName: 'Brene', lastName: 'Brown'}},
    ]

        // console.log(books[0].title) // "The Salmon of Doubt"
        // console.log(books[0].author.firstName) // "Douglas"
        // console.log(books[0].author.lastName) // "Adams"




    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (let book of books) {
    //     const index = books.indexOf(book);
    //     console.log(`Book # ${index + 1}`, createBook(`${book.title}`, `${book.author.firstName}`, `${book.author.lastName}`));
    // }


    // for (let book of books) {
    //     const {title, author} = book;
    //     const index = books.indexOf(book);
    //     console.log(`Book # ${index + 1} \nTitle: ${title} \nAuthor: ${author.firstName} ${author.lastName} `)
    // }




    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();



