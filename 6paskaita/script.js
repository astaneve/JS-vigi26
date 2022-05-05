console.log("6paskaita. Masyvai, funkcijos ir eventai");

// const myName = "Asta";
// const nameLength = myName.length;
// const firstChar = myName[0];
// const lastChar = myName[myName.length - 1];
// const middleChar = myName[myName.length / 2];

// console.log(firstChar);
// console.log(lastChar);
// console.log(middleChar);

// // isprintinti kiekviena vardo raide
// for (let i = 0; i < myName.length; i++) {
//     const char = myName[i];
//     console.log(`${i + 1}. ${char}`);
// }


// const firstChar = myName.charAt(0);
// const lastChar = myName.charAt(myName.length - 1);

// MASYVAS

// const chars = ["A", "s", "t", "a"];
// const fruits = ["apple", "banana", "pear"];
// console.log(fruits.length);
// console.log(fruits[1]);

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// const students = ["Edvinas", "Liudmila", "Julija", "Rokas"];
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//         if(student.length > 5) {
//             console.log(`Vardas ${student} turi daugiau nei 5 raides`);
//         } else if (student.length < 5) {
//             console.log(`Vardas ${student} turi maziau nei 5 raides`);
//         } else {
//             console.log(`Vardas ${student} turi lygiai 5 raides`);
//         }
// }


// const basket = [7, 10, 0.5, 23, 41];
// let total = 0;

// for (let i = 0; i < basket.length; i++){
//     const number = basket[i];
//     total += number;
// }

// FUNKCIJOS
// dvieju rusiu funkcijos
// 1. void f-ja
// 2. return f-ja

function square(number) {
    return number * number;  
}
const squaredNumber = square(10);
console.log(squaredNumber);

// VOID f-ja

function logger(value) {
    console.log(value);
}

logger(10);
// const loggedValue = logger("testing");
// console.log(loggedValue);

function printAllArrayItems(array) {
    for(let i = 0; i < array.length; i++) {
        const item = array[i];
        console.log(item);
    }
}