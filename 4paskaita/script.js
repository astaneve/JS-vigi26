console.log("Ketvirta paskaita, for ciklai");

// i++ prideda 1
// i = i + 1

// i -- atima 1
//i = i - 1

//+= x += y  x = x + y
// -+ x -= y  x = x - y

// kintamieji turi buti i, j, k
//   (inicianizavimas); (salyga); (israiska)
// for (let i = 0; 1 < 10; i++) {
//     console.log(`${i + 1}. John`);
// }

// const vardas = "Asta";
// const count = 10;

// for (let i = 0; i < count; i++) {
//     console.log(`$(i =1). ${vardas}`);
// }

// let i = 10;
// while (i > 0) {
//     console.log(i);
// }

// for (let i = 10; i > 0; i -- ) {
//     console.log(i);
// }

// i = 10; 10 > 0; 10
// i = 9; 9 > 0;  9
//...
// i = 0; 0 > 0; 0

// i = 0; 0 < 10; 0 = 0 + 2
// i = 2; 2 < 10; 2 = 2 + 2
// i = 4; 4 < 10; 1 = 4 + 2
// console.log(" ")
// for (let i = 0; i < 10; i += 3) {
//     console.log(i);
// }

// const dogName = "Rikis";
// const repeat = 3;
// let result = "";

// for (let i = 0; i < repeat; i++) {
// result += dogName;
// }

// i = 0; i < 5; 0 = 0 + 1
// a = a + b
// "" = "" + "Rikis"
// "Rikis" = "Rikis"
// "RikisRikis" = "RikisRikis" + "Rikis"
// "RikisRikisRikis" = "RikisRikisRikis" + "Rikis"
// console.log(result);

// const dogName = "Rikis";
// const repeat = 3;
// let result = "";

// for (let i = 0; i < repeat; i++) {
// result += `${dogName}, `;
// if(i === repeat - 1) {

//     // paskutinis ciklas
//     result += `${dogName}.`;
// } else {
//     result += `${dogName}, `;
// }
// console.log(i);
// }

// const start = 1;
// const count = 9;
// let result = 0;

// for (let i = start; i < count; i ++) {
//     console.log(i);
//     result += i;
// }

// console.log(result);

// // inicianizavimas
// let i = 0;
// //salyga
// while (i < 3) {
//     // shows 0, then 1, then 2
//     console.log(i);
//     // israiska
//     i++;
// }

// do...while ciklas pirmiausia įvykdys kūną, tada patikrins būklę ir, kol tai tiesa, vėl ir vėl ją vykdys.
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 3);


for (let i = 2; i <=10; i +=2) {
    console.log(i); 
}


// let x = 9;
// while (x >= 1) {
//     console.log("hello " + x);
//     x = x - 1;
// }

// is while ta pati perrasyti i for:
// for (let x = 9; x >=1; x = x - 1) {
//     console.log("hello " + x);
// }

const laugh = "ha";
let times = 4;
let result = " ";

do {
    result += laugh;
    times--;
} while (times > 0);
    console.log(result + "!");

function getLaugh(num) {
    let message = ' ';
    for(let i = 0; i < num; i++) message += 'ha';
      return message + "!";
    }
    console.log(getLaugh(4));

