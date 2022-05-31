// 1 pratimas

class Cat {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }

    isFat() {
        if(this.weight >= 5) {
            return `${this.name} yra storas kaciukas`;
        } else {
            return `${this.name} yra plona kaciukas`;
        }
    }
}

const cat = new Cat("Kleopatras", 7);
console.log(cat.isFat());

// 2 pratimas

// const randomArray = [1, 5, "a", "g", "z", 6];
// const removeNumbersFromArray = (array) => array.filter((x) => isNaN(x));
// const removeLettersFromArray = (array) => array.filter((x) => isNaN(x));
// // isNaN(1) => false
// // isNaN(5) => false
// // isNaN(a) => true

// const removedNumbers = removeNumbersFromArray(randomArray);
// const removedLetters = removeLettersFromArray(randomArray);
// console.log(removedNumbers);
// console.log(removedLetters);

// !true => false
// !false => true
// !!true => true
// !!false => false
//!!"rokas" => true
// !"rokas" => false


// 3 pratimas

// let test = "Petras 123 Slekys";
// // split("") ("a", "b", "c")
// // map(char) => "a" + "a"
// // join("") => ["a", "a"] => "aa"
// const newTest = test.split("").map((char) => (isNaN(char) ? char + char : char)).join("");
// console.log(newTest);


// const testString = "Rokas !@#$%^ Tomas 123"
// // ats: "Rokas !!@@##$$%%^^ Tomas 112233"
// const newTestString = testString.split("").map((char) => (isNaN(char) ? char + char : char)).join("");
// console.log(newTestString);

// isNaN("a") ? "a" + "a" : "a" => "aa"
// isNaN(1) ? "1" + "1" : "1" = > "1"

// 4 pratimas
// patikrinti ar susideda is 5 skaiciu
// patikrinti ar susideda is 3 skaiciu ir 2 raidziu
// patikrinti ar turi tarpa

const checkPostCode = (postCode) => {
const letters = removeLettersFromArray(postCode.split(""));
const numbers = removeNumbersFromArray(postCode.split(""));
if (postCode.includes(" ")) {
return false;
} else if (letters.length === 5) {
    return true;
} else if (letters.length === 3 && numbers.length === 2) {
return true;
} else {
    return false;
}


// console.log(removedLetters);
// console.log(removedNumbers);
};

const code = "12335"; // false
console.log(checkPostCode(code));
// checkPostCode(code);