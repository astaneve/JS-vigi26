// FILTER, SOME


const colors = ["red", "blue", "green", "white", "black", "yellow", "purple"];

function removeGreenAndWhite(colorArray) {
const sliced = colorArray.slice(0, 2);
const sliced2 = colorArray.slice(-3);
const combine = sliced.concat(sliced2);
return combine;
}

const modifiedColors = removeGreenAndWhite(colors);

function addOrange(colorArray) {
colorArray.splice(2, 1, "orange");
}

addOrange(modifiedColors);

const hasEchar = modifiedColors.filter((color) => color.includes("e"));
// "red".includes("e") => true
// "blue".includes("e") => true
console.log("hasEchar", hasEchar);

const shorterThan4Chars = modifiedColors.filter((color) => color.length < 4);
// "red".length < 4 => 3 < 4 => true
// "blue".length < 4 => 4 < 4 => false
// "orange".length < 4 => 6 < 4 => false
console.log("shorter than 4 chars", shorterThan4Chars);

const hasZChar = modifiedColors.some((color) => color.includes("z"));
console.log("has Z char", hasZChar);
// "red".includes("z") => false
// "blue".includes("z") => false

const hasBrownValue = modifiedColors.some((color) => color === "brown");
console.log("has brown", hasBrownValue);

const hasALetter = modifiedColors.filter((color) => color.includes("a"));
const aLetterCount = hasALetter.length;

console.log("has A letter", aLetterCount);