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

// const nameEl = document.getElementById("name");
// nameEl.textContent = "Asta";
// nameEl.style.color = "green";

// document.body.style.background = "#4267B2";
// const textEl = document.getElementById("long-text");
// textEl.textContent = "Laba diena, geros dienos";
// textEl.style.textAlign = "center";

// textEl.style.display = "flex";
// textEl.style.justifyContent = "center";
// textEl.style.alignItems = "cemter";
// textEl.style.height = "80vh";


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


// const fruits = ["banana", "apple", "pear"];
// // sukurti ul
// // daryti cikla
// // sukurti elementa
// // prideti i ul
// // po ciklo append i body
// const list = document.createElement("ul");

// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   const listItem = document.createElement("li");
//   listItem.textContent = fruit;
//   list.append(listItem);
// }

// document.body.append(list);


// const myButton = document.getElementById("my-button");
// myButton.addEventListener("click", (event) => {
//   const countEl = document.getElementById("count");
//   countEl.textContent = count;
//   console.log(`Button pressed: ${count} times`);
//   const resultEl = document.getElementById("result");
//   if (count === 5) {
//     resultEl.textContent = "You jus hit button five times";
//   } else {
//     resultEl.textContent = "";
//   }
//   //jei nus paudus reikia kazka atvaizduoti
// // console.log("presed button");
// })

// const nameButton = document.getElementById("name-button");
// nameButton.addEventListener("click", (event) => {
//   const resultName = document.getElementById("name");
//   resultName.textContent = "Asta";
//   resultName.style.color = "red";
// })

// const buttonPlus = document.getElementById("button-plus");
// const buttonMinus = document.getElementById("button-minus");
// let count = 0;
// buttonPlus.addEventListener("click", (event) => {
//   count ++;
//   const countEl = document.getElementById("count");
//     countEl.textContent = count;
//    })

//    buttonMinus.addEventListener("click", (event) => {
//     count --;
//     const countEl = document.getElementById("count");
//       countEl.textContent = count;
//      })

// const plus500button = document.getElementById("plus500");
// plus500button.addEventListener("click", () => renderResultNumber("+"));

// const minus500button = document.getElementById("minus500");
// minus500button.addEventListener("click", () => renderResultNumber("-"));

// const resetButton = document.getElementById("reset500");
// resetButton.addEventListener("click", () => renderResultNumber());

// function renderResultNumber(action) {
// if (action === "+") {
// number500Count += 500;
// } else if (action === "-") {
// number500Count -= 500;
// } else {
// number500Count = 0;
// }
// document.getElementById("result500-number").textContent = number500Count;
// }

// const registerForm = document.getElementById("register");
// registerForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const username = document.querySelector("input[name='username']");
//   const email = document.querySelector("input[name='email']");
//   const age = document.querySelector("input[name='age']");
//   const password = document.querySelector("input[name='password']");
//   console.log(username.value);
//   const result = document.createElement("h2");
//   result.textContent = `${username.value}, ${email.value}, ${age.value}, ${password.value}`;
//   document.body.append(result);
// })

// const permisionForm = document.getElementById("permision");
// permisionForm.addEventListener("submit", (event) => {
// event.preventDefault();

// const name = document.querySelector("input[name='name']");
// const username = document.querySelector("input[name='username']");
// const age = document.querySelector("input[name='age']");

// const result = document.createElement("h2");
// if (age.value >= 18) {
// result.textContent = `${name.value} ${username.value} ${age.value} yra pilnametis`;
//  } else {
// result.textContent = `${name.value} ${username.value} ${age.value} yra nepilnametis`;
//  }
// document.body.append(result);
// });

const registrationForm = document.getElementById("register");

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.querySelector("input[name='username']");
  const surname = document.querySelector("input[name='surname']");
  const age = document.querySelector("input[name='age']");

  const resultAge = document.createElement("h2");

  if (age.value < 18) {
    resultAge.textContent = `${username.value} ${surname.value} is child`;
  } else {
    resultAge.textContent = `${username.value} ${surname.value} is adult`;
  }

  document.body.append(resultAge);
});
