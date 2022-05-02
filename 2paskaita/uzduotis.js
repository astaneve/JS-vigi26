// 1 pratimas

// const legalAge = 20;
// const clientAge = 13;

// if (clientAge >= legalAge) {
//     console.log("Klientas yra pilnametis");
// } else if (clientAge <= legalAge) {
//     console.log("Klientas yra nepilnametis");
// }

// 2 pratimas

const name = "Asta";

if (name.length > 6) {
    console.log("Tavo vardas ilgas");
}

// 3 pratimas
const age = 43;

if (age > 100 || age < 0) {
    console.log("Invalid age");
} else if (age < 18) {
    console.log("Child");
} else {
    console.log("Adult");
}

// 4 pratimas

const car = "VW";

// || - or (arba)
// && - and (ir)

if (car === "VW" || car === "Bentley" || car === "Audi" || car === "Bugatti" || car === "Lamborghini" || car === "Porsche") {
    console.log("VW group");
} else if (car === "BMW" || car === "Mini" || car === "Rolls-Royce") {
    console.log("BMW group");
} else {
    console.log("none group");
}