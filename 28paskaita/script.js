// Turi return

function square(number) {
    return number * number;
}

const squared = square(5);

console.log(squared);
console.log(square(5));

// Neturi return
function showMessage(message) {
console.log(message);
}
function getRandomNumber() {
    return randomNumber();
}
showMessage("Asta");
console.log(getRandomNUmber(6))

// sukurti f-ja kuri priims arhumenta skaiciu ir grazins ji kubu
function cube(number) {
return  number * number * number;
}
const cubed = cube(5);
console.log(cube(3));

// sukurti f-ja kuri priims 2 skaiciu ir grazins ju sandauga
function multilied(num1, num2) {
    return num1 * num2;
}
console.log(multiplied(4, 5));

// sukurti f-ja kuri priims du skaicius ir grazins ju sudeti
function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(30, 50));

// sukrurti f-ja kuri priims du skaicius ir grazins ju atimti
function subtraction(num1, num2) {
    return num2 - num1;
}
console.log(subtraction(27, 10));

// sukurti f-ja kuri piims du skaicius ir grazins ju dalyba
function divide(num1, num2) {
    return num1 / num2;
}
console.log(divide(10, 2));

// Sukurti f-ja, kuri priims stringa kaip argumenta ir grazins kiek jame raidziu
const myString = "Asta";
function stringLength(string) {
    return string.length;
}
console.log(stringLength(myString));


// sukurti f-ja kuris priims du skaicius ir grazins ar pirmas skaicius yra didesnis uz antra. Turi grazinti true, jei pirmas didesnis.
function compareNumbers(num1, num2) {
    return num1 > num2;
    return num1 > num2 ? true : false
}
console.log(compareNumber(4, 7));

// SUkurti f-ja kuri priims stringa ir grazins pirma ir paskutini jo elementa sudejus. Pvz Rokas => Rs

function firstAndLastChar(string) {
    return string[0] + string[string.length - 1];
}

console.log(firstAndLastChar("Asta"));
