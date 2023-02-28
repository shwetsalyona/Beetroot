// Мінімум 1
// let width;
// let height;
// function countPerimeter() {
//     return (width + height) * 2;
// }
// countPerimeter();
//
//
// let showMessage = function () {
//     console.log("Hello world!")
// }
// showMessage();


// Мінімум 2

// function getArgsCount(...args) {
//     return args.length;
// }
// console.log(getArgsCount(1, 2, 3, 4));
// console.log(getArgsCount(1, 2, 3, 4, 5));
// console.log(getArgsCount(1, 2, 3, 4, 5, 6));

// Мінімум 3

// let numOne;
// let numTwo;
//
// function setUserData() {
//     numOne = +prompt("Enter the first number");
//     numTwo = +prompt("Enter the second number");
// }
//
// function compareNumbers() {
//     if (!isNaN(numOne) && !isNaN(numTwo)) {
//         if (numOne < numTwo) {
//             return -1;
//         } else if (numOne > numTwo) {
//             return 1;
//         } else if (numOne === numTwo) {
//             return 0;
//         }
//     } else {
//         alert("Please, enter only numbers");
//         setUserData();
//         return compareNumbers();
//     }
// }
// setUserData();
// let result = compareNumbers();
//
// alert(result);


// Мінімум 4

// let userNumber;
// function setUserData() {
//     userNumber = +prompt("Enter a number");
// }
// function countFactorial() {
//     if (!isNaN(userNumber)) {
//         let result = 1;
//         for (let i = 1; i <= userNumber; i++) {
//             result *= i;
//         }
//         return result;
//     } else {
//         alert("Please, enter only numbers");
//         setUserData();
//         return countFactorial();
//     }
// }
//
// setUserData();
// let factorial = countFactorial();
// alert(factorial);


// Мінімум 5
//
// let numOne;
// let numTwo;
// let numThree;
//
// function setUserData() {
//     numOne = String(prompt("Enter the first number"));
//     numTwo = String(prompt("Enter the second number"));
//     numThree = String(prompt("Enter the third number"));
// }
//
// function makeNumber(a, b, c) {
//     return +(a + b + c);
// }
//
// setUserData();
// let result = makeNumber(numOne, numTwo, numThree);
// console.log(result);


// Мінімум 6

// let height;
// let width;
//
// function setUserData() {
//     height = +prompt("Enter height");
//     width = +prompt("Enter width");
// }
//
// function findArea() {
//     if ((height && typeof height === "number") && (width && typeof width === "number")) {
//         return height * width;
//     } else if (height && typeof height === "number") {
//         return height ** 2;
//     } else if (width && typeof width === "number") {
//         return width ** 2;
//     } else {
//         alert("Enter only numbers");
//         setUserData();
//         return findArea();
//     }
// }
//
// setUserData();
// let result = findArea();
// alert(result);


// Норма 1

// function is_perfect(number) {
//     let num = 0;
//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             num += i;
//             console.log(num);
//         }
//     }
//
//     if(num === number && num !== 0) {
//         console.log("Це ідеальне число.");
//     }
//     else {
//         console.log("Це не ідеальне число.");
//     }
// }
// is_perfect(6);






// let sillyString = "hELlo THERE, hOW ARE yOu doINg?";
// let normalString = sillyString[0].toUpperCase() + sillyString.slice(1).toLowerCase();
// console.log(normalString);

// let age = 10;
// let accompanied = false;
// if (age >= 13 || (accompanied && age < 13)) {
//     console.log("You can go to the movies");
// } else {
//     console.log("You cannot go to the movies");
// }

let animals = [
    "cat",
    "dog",
    "lama",
    "tiger",
    "cow",
    "pig",
]
console.log(animals);
console.log(animals[0]);

animals[1] = "puppy";
animals[10] = "goat";

console.log(animals);

let birds = [
    3,
    [
        "chicken",
        "crow",
        "parrot",
    ],
    "birds",
]
console.log(birds[birds.length - 1]);
birds.push("ostrich");
birds.unshift("goose");
console.log(birds);
let lastBird = birds.pop();
console.log(lastBird);
let firstBird = birds.shift();
console.log(firstBird);

let newArray = animals.concat(birds);
console.log(newArray);
console.log(animals.indexOf("cat"));
console.log(animals.join(" "));

let landmarks = [];
landmarks.push("My house");
landmarks.push("Bakery");
landmarks.push("Shoe store");
landmarks.push("Flower shop");
landmarks.push("school");
landmarks.push("My friend's house");
console.log(landmarks);

let longArray = birds.concat(animals, landmarks);
console.log(longArray);

let randomIndex = Math.floor(Math.random() * 10)
console.log(randomIndex);

console.log(animals[randomIndex]);



let cat = {
    name: "Ron",
    age: 1,
    "number of legs": 4,
    color: "ginger"
}

console.log(cat);
console.log(cat["name"]);
console.log(cat.name);//dot notation
console.log(Object.keys(cat));

cat["number of tails"] = 1;
console.log(cat);
console.log(Object.keys(cat));
console.log(cat.color = "pink")
console.log(cat);

let pets = [
    {
        name: "Ron",
        age: 1,
        "number of legs": 4,
        color: "ginger"
    },
    {
        name: "Fluffy",
        age: 2,
        "number of legs": 4,
        color: "gray"
    },
    {
        name: "Snowflake",
        age: 3,
        "number of legs": 4,
        color: "white"
    }
]
console.log(pets);
console.log(pets[0]);
console.log(pets[0]["color"]);
console.log(pets[0].color);

let friends = [
    {
        name: "Ann",
        age: 9,
        luckyNumbers: [2, 4, 6],
    },
    {
        name: "Linda",
        age: 8,
        luckyNumbers: [1, 3, 9],
    },
    {
        name: "Sandra",
        age: 7,
        luckyNumbers: [8, 10, 12],
    },
]
console.log(friends[0]);
console.log(friends[0]["name"]);
console.log(friends[0].name);

let ann = {
    name: "Ann",
    age: 9,
    luckyNumbers: [2, 4, 6],
};
let linda =   {
    name: "Linda",
    age: 8,
    luckyNumbers: [1, 3, 9],
};
let sandra =   {
    name: "Sandra",
    age: 7,
    luckyNumbers: [8, 10, 12],
}

let bestFriends = [
    ann,
    linda,
    sandra,
];
console.log(bestFriends);
console.log(bestFriends[1]);
console.log(bestFriends[1].name);
console.log(bestFriends[1].luckyNumbers[1]);




