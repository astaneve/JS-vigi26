// Pasikartoti masyvo struktura - lauztiniai skliausteliai []
// Ismokti sukurti elementa JavaScript faile
// Susipazinti teoriskai su Append/prepend metodais ir juos panaudoti

// mastvo pvz
const array = ["Rokas", "Tomas", "Karolis"];
const numbers = [1, 2, 3, 5];
const users = [
    { name: "Rokas", age: 23},
    { name: "Tomas", age: 14},
];

const lists = [
    [1, 2, 3],
    [1, 5, 7],
    [7, 5, 8],
];

// const divs = [ <div>Rokas</div>, <div>Tomas</div>];

const fruits = document.getElementsByTagName("li");
const fruits2 = document.querySelectorAll("li");
// console.log(fruits);
// console.log(numbers);

// naujo HTML elemento sukurimas su creatElement: sukuriamas naujas elementas
const newFruit = document.createElement("li");
// <li> </li> jam priskiriamas tekstas, parametrai ir tt (gali buti div, <p> ir pan)
newFruit.textContent = "Pineapple";
// <li>Pineapple</>

const fruitList = document.getElementById("fruits");
fruitList.append(newFruit);

// prepend

const pineapple = document.createElement("li");
pineapple.textContent = "Pineapple";

const pear = document.createElement("li");
pear.textContent = "Pear";
pear.style.color = "green";

fruitList.append(pineapple); // prideda i gala
fruitList.prepend(pear); // prideda i prieki

const extraList = document.createElement("ol");

// <ol></ol>
extraList.append(pineapple);
// <ol> <li> </li> </ol>
extraList.append(pear);
// extraList.appemd(pineapple, pear);  short way

document.body.append(extraList);


// Automobilio aprasymo kortele

const card = document.createElement("div");
card.style.background = "#f3f3f3";
card.style.display = "flex";

const image = document.createElement("img");
image.src = "https://cdn.wallpapersafari.com/31/22/TGhsln.jpg";
image.alt = "Ferrari";
image.style.width = "40%";
image.style.maxHeight = "40%"


const info = document.createElement("div");
info.style.paddingLeft = "24px";

const title = document.createElement("h1");
title.textContent = "Ferrari f8 tributo";

const description = document.createElement("p");
description.textContent = "Very nice car";

const benefits = document.createElement("ul");

const firstBenefit = document.createElement("li");
firstBenefit.textContent = "Color";
const secondBenefit = document.createElement("li");
secondBenefit.textContent = "Price";
const thirdBenefit = document.createElement("li");
thirdBenefit.textContent = "Speed";


// const benefitList = ["Color", "Price", "Speed", "Emotion"];
// for (let i = 0; i < benefitList.length; i++) {
//     const benefitDescription = benefitList[i];
//     const benefit = document.createElement("li");
//     benefit.textContent = benefitDescription;
//     benefits.append(benefit);
// };


benefits.append(firstBenefit, secondBenefit, thirdBenefit);
info.append(title, description, benefits);
card.append(image, info);
document.body.append(card);


