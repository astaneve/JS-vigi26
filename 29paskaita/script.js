// // FILTER, SOME


// const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

// function removeGreenAndWhite(colorArray) {
// const sliced = colorArray.slice(0, 2);
// const sliced2 = colorArray.slice(-3);
// const combine = sliced.concat(sliced2);
// return combine;
// }

// const modifiedColors = removeGreenAndWhite(colors);

// function addOrange(colorArray) {
// colorArray.splice(2, 1, "orange");
// }

// addOrange(modifiedColors);

// const hasEchar = modifiedColors.filter((color) => color.includes("e"));
// // "red".includes("e") => true
// // "blue".includes("e") => true
// console.log("hasEchar", hasEchar);

// const shorterThan4Chars = modifiedColors.filter((color) => color.length < 4);
// // "red".length < 4 => 3 < 4 => true
// // "blue".length < 4 => 4 < 4 => false
// // "orange".length < 4 => 6 < 4 => false
// console.log("shorter than 4 chars", shorterThan4Chars);

// const hasZChar = modifiedColors.some((color) => color.includes("z"));
// console.log("has Z char", hasZChar);
// // "red".includes("z") => false
// // "blue".includes("z") => false

// const hasBrownValue = modifiedColors.some((color) => color === "brown");
// console.log("has brown", hasBrownValue);

// const hasALetter = modifiedColors.filter((color) => color.includes("a"));
// const aLetterCount = hasALetter.length;

// console.log("has A letter", aLetterCount);

// 29 pamoka su index.html



const renderCard = (product) => {
    const { id, image, price, title } = product;
    const card = document.createElement("div"); // div
    const imageEl = document.createElement("img"); // img
    const priceEl = document.createElement("h5"); //
    const titleEl = document.createElement("p");
const deleteButton = document.createElement("button");

card.className = 'card'; // <div class= card
priceEl.style.color = "red"; // <h5 style="color:red">

imageEl.src = image; // <img src=(img linkas)
imageEl.alt = title; // <img src=(image) alt = title>
titleEl.textContent = title; // <p>(title)</p>
priceEl.textContent = price; // <h5>(price)</h5>
deleteButton.textContent = "Istrinti"; // <button>Istrinti</button>

deleteButton.addEventListener("click", () => {
    const params = {
        method: "DELETE",
    };
console.log(id);
fetch(`https://golden-whispering-show.glitch.me/${id}`, paramss)
.then ((resp) => resp.json())
.then ((response) => {
    console.log(response);
})
.catch((erros) => {
    console.error(error);
});
});

card.append(imageEl, titleEl, priceEl, deleteButton); // <div class=card> <img...> <p>title<p>  <h5 red>price<h5> <button>istrinti<button> </div>
document.body.append(card)   
};
fetch("https://golden-whispering-show.glitch.me")
.then((resp) => resp.json())
.then((response) => {
    response.forEach((product) => renderCard(product));
    
})
.catch((error) => {
    console.error(error);
});