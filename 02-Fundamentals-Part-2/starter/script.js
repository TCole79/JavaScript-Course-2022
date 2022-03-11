'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive.");

// const interface = 'Audio'; // 'interface' is a reserved word
// const private = 534; // 'private' is reserved word



//// Functions ////

// this is a function delaration
function logger() {
  console.log("My name is Tristan.");
};

// this is a function expression, or anonymous function
// let logger = function() {
// };

// calling, running, invoking the function - interchangeable terms to execute the defined function
logger();


function fruitProcesser(apples, oranges) {
  //console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const appleJuice = fruitProcesser(5, 2);
console.log(appleJuice);

const appleOrangeJuice = fruitProcesser(2, 4);
console.log(appleOrangeJuice);



//// Function Declaration vs Function Expressions ////

// Function Declaration
function calcAge1(birthYear) {
  return 2037 - birthYear;
}
const age1 = calcAge1(1991);

// Function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
}
const age2 = calcAge2(1991);
console.log(age1, age2);



//// Arrow Functions ////
// this is a special form of function expression that is shorter, and therefore faster, to write. They have implicit returns if only one line of code in the function, like the first example here on line 62.

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years.`
}
console.log(yearsUntilRetirement(1979, 'Tristan'));
console.log(yearsUntilRetirement(1991, 'Fred'));



//// Functions calling other functions ////

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcesser(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  //console.log(apples, oranges);
  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}
console.log(fruitProcesser(2, 3));



//// Reviewing Functions ////

// some refactoring below:
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`)
    return retirement;
  } else {
    console.log(`${firstName} has already retired.`)
    return -1;
  }

  //return 
}
console.log(yearsUntilRetirement(1991, 'Tristan'));
console.log(yearsUntilRetirement(1970, 'Mike'));

// Function Declaration = function that can be used before it's declared
// Function Expression = essentially a function value, stored in a variable
// Arrow Function = great for short one-line functions. Has no 'this' keyword.
*/


//// Introduction to Arrays ////
const friend1 = 'Mike';
const friend2 = 'Skip';
const friend3 = 'Scott';

const friends = ['Mike', 'Skip', 'Scott'];
console.log(friends);

// alternate way to create an array
const y = new Array(1191, 2007, 1476, 1888);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Baron';
console.log(friends);

// you can put different types of variables in arrays, like this:
const firstName = 'Tristan';
const fred = [firstName, "Cole", 2022 - 1979, 'junior dev', friends];

// array exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);