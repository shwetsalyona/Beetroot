// Мінімум 1

let userAge = +prompt("Enter your age");
// if (typeof userAge === 'number') {
if (!isNaN(userAge)) {
    if (userAge >= 0 && userAge < 12) {
        console.log("You are a child");
    } else if (userAge > 11 && userAge < 18) {
        console.log("You are a teenager");
    } else if (userAge > 17 && userAge < 60) {
        console.log("You are an adult");
    } else {
        console.log("You are retired");
    }
} else {
    console.log("That is incorrect");
}

// Мінімум 2

let userNumber = +prompt("Enter any number from 0 to 9");
let result = "(";
if (!isNaN(userNumber)) {
    if (userNumber === 0) {
        result = ')';
    } else if (userNumber === 1) {
        result = "!";
    } else if (userNumber === 2) {
        result = "@";
    } else if (userNumber === 3) {
        result = "#";
    } else if (userNumber === 4) {
        result = "$";
    } else if (userNumber === 5) {
        result = "%";
    } else if (userNumber === 6) {
        result = "^";
    } else if (userNumber === 7) {
        result = "&";
    } else if (userNumber === 8){
        result = "*";
    }

    console.log(result)
} else {
    console.log("Enter a number");
}


// Мінімум 3

let firstNumber;
let lastNumber;

function setUserData() {
    firstNumber = +prompt("Enter first number");
    lastNumber = +prompt("Enter second number");
}

function findSum() {
    if (!isNaN(firstNumber) && !isNaN(lastNumber)) {
        const n = lastNumber - firstNumber +1;
        return n * (firstNumber + lastNumber) / 2;
    } else {
        alert ("Enter a number");
        setUserData();
        return findSum();
    }
}

setUserData();

alert(findSum());


// Мінімум 3(2)

let firstNumber;
let lastNumber;

function getSumInRange(start, end) {
    let result = 0;
    for (let i = start; i <= end; i++) {
        result += i;
    }

    return result;
}

function setUserData() {
    firstNumber = +prompt("Enter first number");
    lastNumber = +prompt("Enter second number");
}

function findSum() {
    if (!isNaN(firstNumber) && !isNaN(lastNumber)) {
        return getSumInRange(firstNumber, lastNumber);
    } else {
        alert ("Enter a number");
        setUserData();
        return findSum();
    }
}

setUserData();

alert(findSum());


// Мінімум 4


function gcdTwoNumbers(n1, n2) {
    let gcd = 1;
    const smallest = Math.min(n1, n2);

    for (let i = 1; i <= smallest; i++) {
        // Check number whether divisible
        const n1IsDivisible = !(n1 % i);
        const n2IsDivisible = !(n2 % i);

        if (n1IsDivisible && n2IsDivisible) {
            if (i > gcd) {
                gcd = i;
            }
        }
    }

    return gcd;
}

let numOne;
let numTwo;

function setUserData() {
    numOne = +prompt("Enter first number");
    numTwo = +prompt("Enter second number");
}

setUserData();

alert(gcdTwoNumbers(numOne, numTwo));


// Норма 1

let userNumber;
function setUserData() {
    userNumber = String(prompt("Enter a five-digit number"));
}
setUserData();

function palindrome(str) {
    return str === str.split('').reverse().join('');
}
palindrome(userNumber);
console.log(palindrome(userNumber));


// Норма 2
let userPurchase
const discount3 = 3;
const discount5 = 5;
const discount7 = 7;

function setUserData() {
    userPurchase = +prompt("Enter how much you paid for your purchase");
}

function findPurchaseWithoutDiscount() {
    if (typeof userPurchase === "number") {
        if (userPurchase >= 200 && userPurchase <= 300) {
            return Math.round(userPurchase + (userPurchase / (100 - discount3) * discount3));
        } else if (userPurchase > 300 && userPurchase < 500) {
            return Math.round(userPurchase + (userPurchase / (100 - discount5) * discount5));
        } else if (userPurchase >= 500) {
            return Math.round(userPurchase + (userPurchase / (100 - discount7) * discount7));
        } else {
            alert("You didn't get a discount");
        }
    } else {
        alert("Enter a number");
        setUserData();
        return findPurchaseWithoutDiscount();
    }
}

setUserData();

const result = findPurchaseWithoutDiscount();
console.log(result);
if (result) {
    alert(`Your initial purchase price was: ${result}`);
}



// Норма 4

function displayDays() {
    const daysOfWeek = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ];

    let i = 0;

    while (true) {
        const isConfirm = confirm(`${daysOfWeek[i]} Next day?`);

        if (!isConfirm) {
            break;
        } else {
            if (i === 6) {
                i = 0;
            } else {
                i++;
            }
        }
    }
}

displayDays();


