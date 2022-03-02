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


//// Coding challenge 1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

// Programming test 1 // 
// Data 1
let weightMark1 = 78;
let heightMark1 = 1.69;
let weightJohn1 = 92;
let heightJohn1 = 1.95;

let markBMI1 = weightMark1 / (heightMark1 * heightMark1);
let johnBMI1 = weightJohn1 / (heightJohn1 * heightJohn1);
console.log("Mark's BMI is " + markBMI1);
console.log("John's BMI is " + johnBMI1);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);

// Data 2
let weightMark2 = 95;
let heightMark2 = 1.88;
let weightJohn2 = 85;
let heightJohn2 = 1.76;

let markBMI2 = weightMark2 / (heightMark2 * heightMark2);
let johnBMI2 = weightJohn2 / (heightJohn2 * heightJohn2);
console.log("Mark's BMI is " + markBMI2);
console.log("John's BMI is " + johnBMI2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);


// Strings and template literals
const firstName = "Tristan";
const lastName = "Cole";
const job = "Developer";
const birthyear = 1979;
const year = 2022;

const tristan = `My name is ${firstName} ${lastName}, I'm a junior ${job} and I'm ${year - birthyear} years old`;
*/