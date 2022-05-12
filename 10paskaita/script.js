// Objekto savybe (property) yra reiksmes (string, number, array, object, tt) melyna spalva
// Onjekto metodai (method) yra funkcijos atotokmuo. reikia iskviesto ir paduoti parametrus jei jie butini. getElementById
// Index.html yra document

// console.log(document.childNodes);
// document.getElementById;

// function hello(name) {
// return `Hello ${name}`;
// }
// hello("Asta")

// const user = {
//     name: "asta",
//     password: "asta123",
//     email: "asta@gmail.com",
//     login: hello,
// }

// 1 pratimas

const nameInput = document.getElementById("name");
console.log(nameInput.textContent);
console.log(nameInput.nnerText);
console.log(nameInput.innerHTML)

nameInput.addEventListener("click", handleClickOnName);

function handleClickOnName() {

    // backgroud-color: red
    // backgroudcolos = "red"
    nameInput.style.color = "red";
    nameInput.style.background = "blue";
    nameInput.style.textAlign = "right";
    nameInput.style.fontSize = "72px";
}

// 2 pratimas buttom Jump to bottom

const jumpButton = document.getElementById("jump");
jumpButton.addEventListener("click", handleJump);
jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";
// jumpButton.style.position = "absolute";
//     jumpButton.style.top = "30px";
//     jumpButton.style.right = "30px"
let inTop = true;

function handleJump() {
    // jumpButton.style.cssText = "position: absolute; buttom: 30px; left: 30px";
    // jumpButton.style.position = "absolute";
    // jumpButton.style.bottom = "30px";
    // jumpButton.style.left = "30px";
if (inTop) {
    // going to bottom
    jumpButton.style.cssText = "position: absolute; buttom: 30px; left: 30px;";
    jumpButton.textContent = "Jump to top";
    inTop = false;
} else {
    // going to top
    jumpButton.style.cssText = "position: absolute; top: 30px; right: 30px;";
    inTop = true;
}
// inTop = !inTop;
}  

// 3 pratimas Go backwards eina per 4 kampus

const backwardsButton = document.getElementById("backwards");
backwardsButton.addEventListener("click", handleGoBackwards);
let position = 0;

const topLeft = "position: absolute; top: 10px; left: 10px;"; // pradine reiksme -
const topRight = "position: absolute; top: 10px; right: 10px;"; // reiksme is 1 i 2
const bottomRight = "position: absolute; bottom: 10px; right: 10px;"; // reiksme  is 0 i 1
const bottomLeft = "position: absolute; bottom: 10px; left: 10px;"; // reiksme  is 2 i 3
backwardsButton.style.cssText = topLeft;

function handleGoBackwards() {

if (position === 0) {
    backwardsButton.style.cssText = bottomLeft;
} else if(position === 1) {
    backwardsButton.style.cssText = bottomRight;
} else if(position === 2) {
    backwardsButton.style.cssText = topRight;
} else {
    backwardsButton.style.cssText = topLeft;
    position = -1;
}
position++;
console.log(position);
}

