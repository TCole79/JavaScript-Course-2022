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
*/


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