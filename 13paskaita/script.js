// Zinoti primityvius duomenu tipus ir ju apibrezima, kuo skiriasi nuo reference
// Boolean object
// Number object
// String object

// Primitive is data that is not an object and has no methods or properties. There are 7 primitive data, string, number, bigint, boolean, undefined, symbol.

const name = "Rokas";
const age = 7;
const isHot = true;
const notFound = undefined;
const noValue = null;

// //Boolean konstruktorius:
// const reference = Boolean(isHot).toString();
// console.log(isHot);
// console.log(isHotString);

// const obj = {
//     show: () => {}
// }

// Number konstruktorius:
const count = "15";
const countNumber = Number(count);
console.log(count + count);
console.log(countNumber + countNumber);

// integer - sveikasis skaicius
console.log(Number.isInteger(5));

//paverciam i stringa
const myNUmber = 5.752
// console.log(Number(myNumber).toString());
// console.log(myNumber.toString());

// uzapvalina po kablelio:
console.log(myNumber.toFixed(2));

const salary = 10.74136666667;
console.log(salary.toFixed(2));

const sentence = "My name is Rokas and I am very happey";

// Suranda stringe kito stringo dali. Case-sensitive (didziosiosms, mazosiosm raidems)
// console.log(sentence.includes("happy"));


// nukerpa teksto arba pradzia arba gala
// console.log(sentence.slice(0, 8)); // pradzia ir pabaiga
// console.log(sentence.slice(21)); // nuopradzios nukirpo iki galo
// console.log(sentence.slice(-5)); // nuo galo

// const badText = "   Help";
// console.log(sentence.trim());  nuima tuscius tarpus nuo priekio ir galo


const upperCased = sentece.toUpperCase(); // visas raides padaro didziosiom
// console.log(upperCased);

const lowerCased = sentence.toLowerCase; // visas raides padaro mazosiom
// const.log(lowerCase);

function areSameStrings(firstString, secondString) {
    return firstString.toUpperCase()  === secondString.toUpperCase();
}

const resultCount = 5;
const dog = "Rikis";

// pakartoja stringa tiek kiek pduodam i argumenta
// const result = dog.repeat(resultCount);
// console.log(result);
// let result = "";

for (let i = 0; i < resultCount; i++) {
    result += dog;
}


const tagInput = "Prekyba Marketingas Vadyba Programavimas";
const splitted = sentence.split(" ");


const countryInput = "Anglija, Sveicarija, Amerika, Latvija";
const countries = countryInput.split(", ");
console.log(countries);

