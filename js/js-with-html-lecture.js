// console.log("Testing");

// let easyMath= 2 + 2;
// console.log(easyMath);

// shorthand operators
// let x = 1;
// x = x + 1;
// x += 1;
// x += 2;
// x/=1;
// x= x / 1 ;

// Unary operators
// let y = 5;
// y++;
// // written out;
// y = y + 1;
// y--;
//
// console.log(y);

// let pi = 3.14;
// console.log(pi);
// let piString = pi.toString()
//
// console.log(piString);

// from a string to a number

// let numOfStudents = "19"
// numOfStudents = parseInt(numOfStudents);
// numOfStudents = parseFloat(numOfStudents);

// let bankAcct = "19.23456";

// let x = "griffen";
// let xNumber = Number(x);
// console.log(xNumber);
//
// let isEqual = NaN === NaN; // you cant do it this way
// let isReallyEqual = isNaN(xNumber);
//
// console.log(isReallyEqual);
//
// // truthy/falsey
//
// let emptyString = "" == false;
//  console.log(emptyString)

//TEMPLATE STRINGS
let userName = "Justino (Nova)";
let guildName = "";

let nameLength = userName.length;
console.log(nameLength);
let guildNameStart = userName.indexOf("(");
let guildNameEnd = nameLength - 1;
guildName = userName.substring(guildNameStart + 1, guildNameEnd);
console.log(guildName);
let guildNameWithParenthesis =
console.log(userName);

let channelMessage = "username from the guildName guild has logged in";
channelMessage = userName + " from the " + guildName + " guild has logged in";
chanelMessage = `${userName} from the ${guildName} guild has logged in.`;
console.log(chanelMessage);
