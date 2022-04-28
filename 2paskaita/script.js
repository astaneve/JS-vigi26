// console.log("Sveiki, cia antra paskaita");

// let money = 110.5;
// let price = 105.5;

// if (money > price) {
//     const change = money - price;
//     currency = "$";
//     console.log("Tu nusipirkai daikta. Tavo graza:" + cirrency + change); // A
// } else if (money === price) {
//     console.log("Tu nusipirkai daikta, tau nebeliko pinigu"); // B
// } else {
//     const missingMoney = price - money;
//     const startLabel = "Tau neuzteko pinigu daiktui nusipirkti. Tau truksta: ";
//     console.log(startLabel + currency + missingMoney);
// }

// let runner = "Kendyll";
// let position = 2;
// let medal;

// if (position === 1) {
//     medal = "gold";
// } else if (position === 2) {
//     medal = "silver";
// } else if (position === 3) {
//     medal = "bronze";
// } else {
//     medal = "pat on the back";
// }
// console.log(runner + " received a " + medal + " medal.");

// uzduotis odd and even numbers
const number = 2;

if (number % 2) {
  console.log(number + "skaicius yra nelyginis");
} else {
  console.log(number + "skaicius yra lyginis");
}

// Muzikines grupes turi specialius pavadinimus pagal zmoniu skaiciu grupeje Pvz. kvartetas yra muzikine grupe, uria sudaro keturi muzikantai.
// Parasykite salyginiu teiginiu serija (else..if statements)

const groupNumber = 8;

if (groupNumber <= 0) {
  console.log("ne grupe");
} else if (groupNumber === 1) {
  console.log("solo");
} else if (groupNumber === 2) {
  console.log("duetas");
} else if (groupNumber === 3) {
  console.log("trio");
} else if (groupNumber === 4) {
  console.log("kvartetas");
} else if (groupNumber > 4) {
  console.log("didele grupe");
}
