// padeda istrinti arba iterpti masyvo elementa i pasirinkta vieta
// .splice

// const sentence = ["I", "study", "JavaScript", "right", "now"];

// const firstTwoElemenst = sentence.splice(0, 2);// removes 2 first elements
// sentence.splice(2, 2)
// sentence.splice(2, 3,"Typescript"); // pakeicia  masyvo elementa kitu
// sentence[2] = "Typescript";

// sentence.splice(1, 4, "studied", "Typescript", "before"); // Pakeicia masyvo elementus
// console.log(sentence);


//.slice
// const sliced = sentence.slice(0, 3); // Pirmus tris elementus

// const sliced = sentence.slice(-3); // Paskutinius tris
// console.log(sliced);


// const numbers = [7, 8, 1, 0.50, 8, 6, 10, 20, 30, 40];

// // const total = numbers.reduced((previousValue, currentValue) => {
// //     console.log(previousValue);
// //     return previousValue + currentValue;
// // });

// const total = numbers.reduced((total, number) => {
//     console.log(previousValue);
//     return total + number;
// });

// // 7+8
// // 15 + 1
// // 16 + 0.5
// // 16.5 + 8 ir tt kol praeina visus itemus

// console.log("");
// console.log(total);


// const sortedAscendingOrder = numbers.sort((a, b) => a - b); // surikiuota didejimo tvarka
// const sortedDescendingOrder = number.sort((a, b) => b - a); // surikiuoti mazejimo tvarka
// console.log(sortedAscendingOrder);
// console.log(sortedDescendingOrder);

// 1 pratimas

const styles = ["Jazz", "Blues"];

console.log(styles);

styles.push("Rock-N-Roll");
console.log(styles);

styles.splice(1, 1, "Classics");
console.log(styles);

const firstElement = styles.shift();
console.log(firstElement);
console.log(styles);

styles.unshift("Rap", "Reggy");
console.log(styles);

// 2 pratimas
//  const arr = [11, -2, 34, 45];
//  function getMaxSubSUm(array) {
//      const possitiveNumSum = array.reduce((total, num) => (num > 0 ? total : total), 0);
//      return sum 
//  }

function getMaxSubSum(array) {
    const sum = array.reduce((total, num) => {
        if (num>0) {
            return total + num;
        } else {
            return total;
     }
    }, 0);
    return sum;
}

 const sum = getMaxSubSUm(arr);
 console.log(sum)