// 1 pratimas. Parasykite f-ja, kuri priims minutes ir grazins sekundes(string; "x seconds")

// function minutesToSeconds(minutes) {
// const seconds = miniutes * 60;
// return `${seconds} seconds`
// }

// // console.log(minutesToSeconds(3));

// const arrowMinutesToSeconds  = (minutes) => {
//     const seconds = miniutes * 60;
//     return `${seconds} seconds`;
// };

// const arrowMinutesToSeconds2  = (minutes) => minutes * 60 + " seconds";
// const arrowMinutesToSeconds3  = (minutes) => `${minutes * 60} seconds`; // naujas budas, kuris naudojamas siuolaikiniame programavime

// console.log(minutesToSeconds(3));

// // 2 Parasykite f=ja, kuri priims vartotoju amziu ir grazins kiek dienu jis jau nugyveno.
// // skaiciu tikslumu, neskaiciuojant keliamuju metu, t.y, visada 365 d

// const yearsToDays = (years) => years * 365;
// console.log(yearsToDays(10));

// // parasykit f-ja kuri grazintu i kvadrata
// const square = (number) => number * number;
// const addition = (number1, number2) => number1 + number2;

// const pow = (number, count) => number ** count;
// console.log(square(12));
// console.log(addition(10, 7));
// console.log(pow(3, 2));

// // pagal krastines ilgi ir ploti paskaiciuotu trikampio plota
// const triangleArea = (x, y) => (x * y)/2;
// console.log(triangleArea(5, 4));

// // parasykite f-ja, kuri paims parametra String ir grazins to parametro paskutine raide

// const lastChar = (string) => string.charAt(string.length - 1);
// const lastChar1 = (string) => string[string.length - 1];
// console.log(lastChar1("Rokas"));

// Parasyti f-ja, kuri paims stringa ir apvers mazosiomis
const reverseString = (string) => {
    console.log(string);
    console.log(string.split(""));
    const splitted = string.split("");
    const reversed = splitted.reverse();
    const joined = reversed.join("");
    const lowerCased = joined.toLowerCase();
    console.log(reversed);
    console.log(reversed.join(""));
    console.log(joined.toLoerCase());
    return lowerCased;
}
const reverseString1 = (s) => s.split("").reverse().join("").toLowerCase(); // visa tai galima parasyti i viena eilute

console.log(reverseString1("Rokas"));

const biggestNegativeNumber = (array) => array.sort((a, b) => a - b, 0)[0];
const arr = [-110, -4, -10]
console.log(biggestNegativeNumber(arr));


