"use strict"
let usersName = "Alona";
let userLastName = "Shvets";
//let userName = "Ben";
/*let userAge = 30;
let userEyeColor = "brown";*/
let user = "Vova";
let user1 = "Vika";
let _user = "John";
let $user = "Steve";

let userName = prompt("What is your name?", "Harry Potter");
console.log("Привіт, " + userName);

let userYearOfBirth = prompt("Вкажіть Ваш рік народження");
console.log(userYearOfBirth);
const year = 2023;
let userAge = year - userYearOfBirth;
console.log(userAge);

let sideOfSquareLength = prompt("Вкажіть довжину сторони квадрата");
console.log(sideOfSquareLength);
let squareP = sideOfSquareLength * 4;
console.log(squareP);

let circleRadius = prompt('Введіть радіус кола');
let circleS = 3.14 * circleRadius ** 2;
console.log(circleS);

let distance = prompt('Вкажіть відстань між містами');
let time = prompt('Вкажіть час у дорозі');
let speed = distance / time;
console.log(speed);

let dollarSum = prompt('Введіть суму грошей в доларах, яку бажаєте обміняти');
const EURO_TO_DOLLAR = 0.94;
let euroSum = dollarSum * EURO_TO_DOLLAR;
console.log(euroSum);




