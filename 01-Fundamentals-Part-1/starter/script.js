/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

let firstName = "Tristan";

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);

javascriptIsFun = 'Yes!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // this is a bug, and was not fixed for legacy reasons


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas * 2, ageSarah / 10, 2 ** 3); 
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Tristan";
const lastName = "cole";
console.log( firstName + lastName);

// Assignment operators
let x = 10 + 5; // 15
x =+ 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100

// Comparison operators


// Strings and template literals
const firstName = "Tristan";
const lastName = "Cole";
const job = "Developer";
const birthyear = 1979;
const year = 2022;

const tristan = `My name is ${firstName} ${lastName}, I'm a junior ${job} and I'm ${year - birthyear} years old`;


//// Decisions - If statements ////
const age = 19;
const isOldEnough = age >= 18;

if (isOldEnough) {
  console.log("Person can start learning to drive as she's old enough to drive.");
  } else {
    const yearsLeft = 18 - age;
    console.log(`Person is too young. Wait another ${yearsLeft} years.`);
};

// 'If else control structure' =
if () {
} else {
};

const birthYear = 1979;
let century;

if (birthYear <= 2000) {
  let century = 20;
} else {
  let century = 21;
};
console.log(century);
*/


//// Type Conversion ////
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Tristan"));
console.log(typeof NaN);

console.log(String(23), 23);

//// Type Coercion ////
console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' * '2');

let n = '1' + 1; // 11
n = n - 1; // 10
console.log(n);
