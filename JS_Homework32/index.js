// Мінімум 1
let width;
let height;
function countPerimeter() {
    return (width + height) * 2;
}
countPerimeter();


let showMessage = function () {
    console.log("Hello world!")
}
showMessage();


// Мінімум 2

function getArgsCount(...args) {
    return args.length;
}
console.log(getArgsCount(1, 2, 3, 4));
console.log(getArgsCount(1, 2, 3, 4, 5));
console.log(getArgsCount(1, 2, 3, 4, 5, 6));

// Мінімум 3

let numOne;
let numTwo;

function setUserData() {
    numOne = +prompt("Enter the first number");
    numTwo = +prompt("Enter the second number");
}

function compareNumbers() {
    if (!isNaN(numOne) && !isNaN(numTwo)) {
        if (numOne < numTwo) {
            return -1;
        } else if (numOne > numTwo) {
            return 1;
        } else if (numOne === numTwo) {
            return 0;
        }
    } else {
        alert("Please, enter only numbers");
        setUserData();
        return compareNumbers();
    }
}
setUserData();
let result = compareNumbers();

alert(result);


// Мінімум 4

let userNumber;
function setUserData() {
    userNumber = +prompt("Enter a number");
}
function countFactorial() {
    if (!isNaN(userNumber)) {
        let result = 1;
        for (let i = 1; i <= userNumber; i++) {
            result *= i;
        }
        return result;
    } else {
        alert("Please, enter only numbers");
        setUserData();
        return countFactorial();
    }
}

setUserData();
let factorial = countFactorial();
alert(factorial);


// Мінімум 5

let numOne;
let numTwo;
let numThree;

function setUserData() {
    numOne = String(prompt("Enter the first number"));
    numTwo = String(prompt("Enter the second number"));
    numThree = String(prompt("Enter the third number"));
}

function makeNumber(a, b, c) {
    return +(a + b + c);
}

setUserData();
let result = makeNumber(numOne, numTwo, numThree);
console.log(result);


// Мінімум 6

let height;
let width;

function setUserData() {
    height = +prompt("Enter height");
    width = +prompt("Enter width");
}

function findArea() {
    if ((height && typeof height === "number") && (width && typeof width === "number")) {
        return height * width;
    } else if (height && typeof height === "number") {
        return height ** 2;
    } else if (width && typeof width === "number") {
        return width ** 2;
    } else {
        alert("Enter only numbers");
        setUserData();
        return findArea();
    }
}

setUserData();
let result = findArea();
alert(result);


// Норма 1

function is_perfect(number) {
    let num = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            num += i;
            console.log(num);
        }
    }

    if(num === number && num !== 0) {
        console.log("Це ідеальне число.");
    }
    else {
        console.log("Це не ідеальне число.");
    }
}
is_perfect(6);









