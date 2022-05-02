console.log("Trecia paskaita switch, ternarry, for ciklas");

const number = 4;

// argumentas key turi atitikti case reiksme

if (number === 1) {
    console.log("Pirmaidneis");
} else if (number === 2) {
    console.log("Antradienis");
} else if (number === 3) {
    console.log("Treciadienis");
}

switch (number) {
    case 1:
        console.log("Pirmadineis");
        break;
    case 2:
        console.log("Antradienis");
        break;
    case 3:
        console.log("Treciadienis");
    break;
    case 4:
        console.log("Ketvirtadienis");
        break;
    case 5:
        console.log("Penktadienis");
        break;
    case 5:
    case 7:
        console.log("Savaitgalis");
        break;
    default:
        consolele.log("Blogai irasyta savaites diena")
        break;
}


const age = 15;
const legalAge = 18;
const drinkingAge = 20;
const celciusDegrees = 26;

let result = "pilnametis";

if (age < legalAge) {
    result = "nepilnametis";
}

const isLegal = age < legalAge;

// Ternary simboliai ? :
// ? if
// " else

//                  if salyga           patenkina           else
const resultTernary = age < legalAge ? "nepilnametis" : "pilnametis";
const drink = age >= drinkingAge ? "Beer" : "Milk"
const weather = celciusDegrees <= 0 ? "Cold" : celciusDegrees <= 25 ? "Warm" : "Hot";

console.log(weather);
// console.log(resultTernary);

const myName = "Asta";
const surname = "Ilgaude";

console.log(myName + " " + surname);
// `` atbulines kabutes. Naudoti template string tik tada, kai dedame kintamuosius i vidu.
console.log(`${myName} ${surname}`);

const fullNameOld = myName + " " + surname;
const fullNameNew = `${myName} ${surname}`;