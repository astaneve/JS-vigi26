// One line komentaras
// !!! Patikrinti rašybos klaidas
// 1. Patikrinti ar esu tinkamam folderyje - komanda ls (:C/Users/Rokas/JS-VIGI26/2_paskaita)
// 2. Patikrinti ar išsaugojau failą(-us) - baltas taškas prie failo pavadinimo
// 3. Patikrinti ar įrašiau console.log()
// 4. Patikrinti ar tinkamai paleidau failą "node script.js"
// 5. Patikrinti terminalo išmetamą žinutę
// 6. Ar failas yra ikeltas i atitinkama folderi
// 7. Komandos: cd 1paskaiata - eina i kita folderi 
// (cd ..) -grizta atgal per viena folderi
// ls - isveda visus folderio failus

/*
    Sveiki, cia yra    
    Multi line komentaras
*/

// Sukuriam kintamuosius su let
let myName;
let age;
let mySurname;
let fullName;
let result;
let average;

console.log(myName); //undifined - yra vienas is tipu, naudojamas, kai kintamas yra sukurtas, bet neturi priskirtos reiksmes

// Priskiriam kintamiesiems reiksmes
myName = "Asta"; // stringas - reiksme apsirasanti tarp kabuciu
age = 43; // number - reiksme apsirasanti is skaiciu (10; 10.6)
mySurname = "Ilgaude";
fullName = myName + " " + mySurname; // sudetis - tarp dvieju tokiu paciu tipu "Asta" + "Ilgaude" = "AstaIlagude"
result = age + age;
result = result + result;
average = (8 + 8 + 9 + 10 + 10) / 5;
// is viso surinkta 60 eur, as atnesiau 20eur, kiek bus procentu
percent = (100 * 20) / 60; // 33.33
percentOutput = percent + "%"; //33.33% number + string = string
// uzduotis, kaip 78 paversti i -> 7788 -> "7" + "7" + "8" + "8"

// console.log(age);
// console.log(fullName);
// console.log(result);
// console.log(average);
// console.log(percent + "%");
// console.log(9 + 9);
// console.log("9" + "9");

console.log(myName);

// sukuriam kintamuosius su const

const myDogName = "Mila"; // galima priskirti tik viena reiksme tam adresui
const myDogAge = 7;
const doubleDogName = myDogName + myDogName;
const greetings = "Sveika" + " " + myDogName + "!";

let question = "How are you?";

 
console.log(greetings);

// 1. kada naudoti let kada const?
// naudoti let tik tada, kai reiksme yra kintanti, kitais atvejais naudoti const

// 2.sukurus kintamaji - visada priskiriame pradine reiksme
// 3. visada nuadojame triguba lygybe (tikrina reiksme ir tipa) strict equality
// 4. visos neigiamos reiksmes yra undifined, null, (0 -traktuojama, kaip neigiama reiksme), false, " " (tuscias stringas traktuojamas kaip neig reiksme)

// ismokom string ir number
// boolean (bool) true/false

const yes = true; // teigiama reiksme
const no = false; // neigiama reiksme
let isAdult = true;

// console.log(yes);
// console.log(no);

console.log(10 == 10); // dvi lygybes palygina reiksmes viena su kita 10 yra lygu 10
console.log("Asta"  == "Asta"); // Asta yra lygu Asta
console.log(10 != 9); // != reiskia "nelygu", t.y. ar 10 nelygu 9? TRUE

console.log("5" == 5); // ar stringas 5 yra lygus skaiciui 5? Ats - Lygus. Dviguba lygybe tikrina ar reiksme yra lygi
console.log("5" === 5); // triguba lygybe tikrina ar reiksme yra lygi ir tipas yra toks pats. Triguba lygybe saugesne lyginant dalykus tarpusavyje. Ir dazniau naudosime triguba
console.log("4" != 4); // FALSE
console.log("4" !== 4); // TRUE
console.log(0 == false); // TRUE
console.log(1 == true); // TRUE

