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




//// Falsy values ////

// 5 falsy values: 0, "", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Tristan'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job!");
};

let height;  // or let height = 0;
if (height) {
  console.log("Yay! Height is defined.");
} else {
  console.log("Booo. Height is undefined.");
};



//// Equality Operators ////
const age = 18;
if (age === 18) {
  console.log("You are an adult.");
};

// for clean code, avoid the loose equality operator - '==' - as this can introduce unexpected bugs
// you should default to the strict equality operator - '==='

const favourite = Number(prompt("What is your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! Looks like 23 is your favourite!")
} else if (favourite === 7) {
  console.log("7 is also a good number.")
} else {
  console.log("Number is no 7 or 23, so sad.")
};

if (favourite !== 23) {
  console.log("Why not 23?")
};



//// Bolean Logic + Logical Operators ////

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if (shouldDrive) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
}


const isTired = true; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (shouldDrive && !isTired) {
  console.log("Sarah is able to drive.");
} else {
  console.log("Someone else should drive.");
}
*/



//// Switch Statements ////
const day = 'monday';

switch(day) {
  case 'monday': 
    console.log("Practice three hours of coding.")
    console.log("Do three hours of job searching.")
    console.log("Do three hours of networking.")
    break;
  case 'tuesday':
    console.log("Practice three hours of coding.")
    break;
  case 'wednesday':
  case 'thursday':
    console.log("Practice three hours of coding.")
    break;
  case 'friday':
    console.log("Practice three hours of coding.")
  case 'saturday':
  case 'sunday':
    console.log("Keep up the coding!")
    break;
  default:
    console.assert.log("Not a valid day!")
}

// if else version of the above switch
if (day === 'monday') {
  console.log("Practice three hours of coding.")
    console.log("Do three hours of job searching.")
    console.log("Do three hours of networking.")
} else if (day === 'tuesday') {
  console.log("Practice three hours of coding.")
} else if (day === 'wednesday' || day === 'thursday') {
  console.log("Practice three hours of coding.")
} else if (day === 'friday') {
  console.log("Practice three hours of coding.")
} else if (day === 'saturday' || day === 'sunday') {
  console.log("Keep up the coding!")
} else {
  console.log("Not a valid day.")
}