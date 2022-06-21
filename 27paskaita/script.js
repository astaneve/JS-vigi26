// const userName = "AstaIlgo";
// const goodbye = `Viso gero ${userName}, lauksime sugriztant!`


// const salary = 5000;
// const currency = "$";
// console.log(`${salary}${currency}`);


// const price = 10;
// if (price > 10) {
//     console.log("perku");
//   } else
//     console.log("neperku");

// const hours = 10;
// let result = "";
// if (hours >= 0 && hours < 6) {
// result = "Naktis";
// } else if (hours >= 6 && hours < 12) {
// result = "Rytas";
// } else if (hours >= 12 && hours <= 18) {
// result = "Diena";
// } else if (hours >= 18 && hours <= 24) {
// result = "Vakaras";
// } else {
// result = "Netinkamas skaicius";
// }
// console.log(result);

// const price = 10;
// const result =
// ( price >10) ? "Perku" :"Neperku";
// console.log(result);



const hours = 6;
let result = hours >= 0 && hours < 6 ? 'Naktis' :
hours >= 6 && hours < 12 ? 'Rytas' :
hours >= 12 && hours < 18 ? 'Diena' :
hours >= 18 && hours <= 24 ? 'Vakaras' : 'blogas laikas';
console.log(result);



const myName = "Asta";
const nameLength = myName.length;
const firstChar = myName[0];
const lastChar = myName[myName.length - 1];

console.log(firstChar);
console.log(lastChar);
console.log(myName.length);

for (let i = 0; i < nameLength; i++) {
    const char = myName[i];
    console.log(char)
  }

for (let i = 0; i < myName.length; i++) {
const char = myName[i];
console.log(`${i + 1} raide yras ${char}`);
}


