//// Coding challenge no.1 ////
/*
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
*/


//// Coding challenge no.2 ////
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BM

if (markBMI1 > johnBMI1) {
  console.log(`Mark's BMI is higher than John's, at ${markBMI1}.`)
} else {
  console.log(`John's BMI is higher than Mark's, at ${johnBMI1}.`)
};
*/