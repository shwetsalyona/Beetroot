
// Мінімум 1

const userNumber1 = 0.1;
const userNumber2 = 0.2;
const sumOfNumbers = userNumber1 + userNumber2;
console.log(sumOfNumbers.toFixed(1));


// Мінімум 2

const number1 = "1";
const number2 = 2;
const sum = +number1 + number2;
console.log(sum);


// Мінімум 3

const gb = +prompt("Enter GB value");
const mbToGb = 1024;
const fileVolume = 820;
const numberOfFiles = gb * mbToGb / fileVolume;
console.log(Math.floor(numberOfFiles));


// Норма 1

const userCash = +prompt("Enter the amount of money you have");
const barPrice = +prompt("Enter the price of a chocolate bar");
const numberOfBars = userCash / barPrice;
const change = userCash % barPrice;
console.log(Math.floor(numberOfBars));
console.log(change);


// Норма 2

const userNumber = +prompt("Enter a 3-digit number");
const division1 = Math.floor(userNumber / 10);
const reverse1 = userNumber % 10;
const division2 = Math.floor(division1 / 10);
const reverse2 = division1 % 10;
const reverse3 = division2 % 10;
const userNumberReverse = Number(String(reverse1) + String(reverse2) + String(reverse3));
console.log(userNumberReverse);


// Максимум 1

const deposit = +prompt("Enter the amount of your deposit");
const term = 2;
const rateOfInterest = 0.05;
const interest = deposit * 0.05 / 6;
console.log(interest.toFixed(4));


// Максимум 2

// 2 && 0 && 3    - поверне 0;
//
// 2 || 0 || 3    - поверне 2;
//
// 2 && 0 || 3    - поверне 3;





