const fruits = ["Apple", "Orange", "Pear"];

// .pop() - pasalina paskutini masyvo elementa ir ji grazina
// const lastElement = fruits.pop();
// // fruits.pop() veikia taip pat
// console.log(lastElement);
// console.log(fruits);

// // .shift - panaikina masyvo pirma elementa ir ji grazina
// const firstElement = fruits.shift();
// console.log(firstElement);
// console.log(fruits);

// .push() - prideda nauja elementa i masyvo gala
// fruits.push("Pineapple");
// console.log(fruits);

// .unshift() - prideda nauja elementa i masyvo pradzia
// fruits.unshift("Banana");
// fruits.push("Pineapple", "Plum");
// console.log(fruits);



// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     console.log(`${i}.${fruit}`);
//     console.log(fruit);
// }
// console.log(fruits);

// const upperCasedFruits = []

// for (let i = 0; i < fruits.length; i++) {
//     const fruit = fruits[i];
//     const upperCased = fruit.toUpperCase();
//     upperCasedFruits.push(upperCased);

// }
// console.log(fruits);
// console.log(upperCasedFruits);
// // ["APPLE", "ORANGE", "PEAR"]


// Callback funkcija
function log(name) {
    console.log(name);
}

function showAlert(callback) {
    alert("Rokas");
    callback("Rokas")
}


const names = ["Bob", "Hellen", "Jack"];
// log("Rokas");
// showAlert(log)
// document.addEventListener("click", log)

// .forEach() - priima callback funkcija

// names.forEach(showNames); // 1 budas
// function showNames(name) {
//     console.log(name);
// }

// names.forEach((name) => { // 2 budas
// console.log(name);
// });


// .map() ciklas kuris praeina per visus masyvo elementus ir grazina nauja masyva

// const modifiedNames = names.map((name) => {
// return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase;
// });

// console.log(names);
// console.log(modifiedNames);

const ages = [12, 15, 23, 27, 25, 30, 38];

// Ciklas,kuris praeina per visus masyvo elementus ir grazina nauja masyva jeigu reiksme yra true (possitive)
// .filter()

const moreThanTwenty = ages.filter(age => {
    return age > 20;
});

const lessThatTwenty = ages.filter((age) => age < 20);

// console.log(moreThanTwenty);
// console.log(lessThanTwenty);

// .find() - Suranda pirma elementa is masyvo kuris atitinka kriteriju (true) ir ji grazina
// parasyti f-ja kuri suras norima automobili is L raides:
const cars = ["BMW", "Lamborgini", "Audi", "Lada", "Mercedes"];
const foundCar = cars.find(car => car.charArt(0) === "L");
console.log(foundCar);

// .some() - patinkrina ar nors vienas elementas atitinka kriteriu ir grazina true ar false

const hasShortName = cars.some((car) => car.length < 2);

console.log(hasShortName);

// .every() - Patikrina ar kiekvienas elementas atitinka kriteriju ir grazina true arba false

const isEveryUpperCased = cars.every((car) => car.charAt(0) === car.charAt(0).toUpperCase()
);

console.log(isEveryUpperCased);