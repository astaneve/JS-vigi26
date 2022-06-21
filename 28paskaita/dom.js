// console.log("Dom failas");

// document.getElementById("id") // vienaskaita grazina elementa kaip objekta ()
// document.getElementsByClassName("class"); // daugiskaita grazina masyva []
// document.getElementsByName("Name"); // daugiskaita grazina masyva []
// document.getElementsByTagName("div"); // daugiskaita grazina masyva []

// document.getElementById("pirmas"); // p
// const items = document.getElementsByClassName("item") // grazins[p, p] [0] [1]
// // items[0]; 
// // items[items.length - 1];
// document.getElementsByName("mao-input"); // []
// document.getElementsByTagName("p");

// document.querySelector("div") // vienaskaita grazina pagal elementa {}
// document.querySelector(".card") // vienaskaita grazina pagal klase{}
// document.querySelector("#price") // vienaskaita grazina pagal id {}
// document.querySelector(".card.div") // vienaskaita {}

// document.querySelectorAll() // daugiskaita []

// // const first = allParagraphs[0];
// // const last = allParagraphs[allParagraphs.length - 1];

// // first.style.background = "red";

// // const help = document.getElementById("help");

// // help.textContent = "Asta yra geras zmogus";
// // help.style.background = "red";

const nameEl = document.getElementById("name");
nameEl.textContent = "Asta";
nameEl.style.color = "green";

document.body.style.background = "#4267B2";
const textEl = document.getElementById("long-text");
textEl.textContent = "Laba diena, geros dienos";
textEl.style.textAlign = "center";

textEl.style.display = "flex";
textEl.style.justifyContent = "center";
textEl.style.alignItems = "cemter";
textEl.style.height = "80vh";


// append kai pridedamas elementas i gala, kaip vaikini elelmenta

// const div = document.createElement("div");
// div.textContent = "Mano naujas divas";
// document.body.append(div);

// document.body.prepend(div); // prideda i prieki

// const container = document.createElement("div");
// const p = document.createElement("p");

// container.append(p);

// document.querySelector("#id").append(container);

// const container = document.createElement("div");
// container.style.height = "100px";
// container.style.width = "100px";
// container.style.background = "black";
// document.querySelector("div").append(container);

// const yellowSquare = document.createElement("div");
// const greenSquare = document.createElement("div");
// const redSquare = document.createElement("div");
// yellowSquare.style.height = "50px";
// yellowSquare.style.width = "50px";
// greenSquare.style.height = "100px";
// greenSquare.style.width = "100px";
// redSquare.style.height = "150px";
// redSquare.style.width = "150px";

// yellowSquare.style.background = "yellow";
// greenSquare.style.background = "green";
// redSquare.style.background = "red";
// document.body.append(yellowSquare, greenSquare, redSquare);


const fruits = ["banana", "apple", "pear"];
// sukurti ul
// daryti cikla
// sukurti elementa
// prideti i ul
// po ciklo append i body
const list = document.createElement("ul");

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i];
  const listItem = document.createElement("li");
  listItem.textContent = fruit;
  list.append(listItem);
}

document.body.append(list);






