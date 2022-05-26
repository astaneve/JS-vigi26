// Sukurkite f-ja, kuri paims stringa ir grazins ji be pirmosios raides ir pakelta pirmaja
//t.y. Petras -> Etras

// const removeFirst = (value) => {
//     const withFirstChar = value.slice(1);
//     return without[0].toUpperCase() + withoutFirst.slice(1).toLowerCase();
// };

// const removed = removeFirst("GRIDAS");
// console.log(removed);


// //
// const startsA = (array) => array.filter(person => person.first.name[0] === "A").length;
// console.log(startsA(data));

// // 
// const hasK = (array) => array.filter((p) => p.first_name.includes("K")).length;
// console.log(hasK(data));

/// Objektinis programavimas
//Susikurkite objektu konstrukcija naudojant new pavadinimu Boook, kuris gakes kurti objektus, kurie tures sias savybes (properties): name, year, author, 
// ir metodus naudojant prototype. Kuriu vienas parasys pavadinima ir autoriu, kitas knygos amziu.

//konstruktoriaus funkcija rasoma is didziosios raides
// function Book(name, author, year) {
// this.name = name;
// this.authorName = author;
// this.year = year;
// this.getInfo = () => {
//     return `${this.name} parase ${this.authorName}`;
// };
// this.getYears = () => {
//     const today = new Date(); // standartizuotas formatas sios dienos datai parasyti
//     // console.log(today.getFullYear());
//     return today.getFullYear() - this.year;
// }
// }

// const harryPotterBook = new Book("Harry Potter", "J.K. Rowling", 1997)
// console.log(harryPotterBook.getInfo());
// console.log(harryPotterBook.getYears());

// class Book {
//     constructor(name, author, year) {
//         this.name = name;
//         this.authorName = author;
//         this.year = year;
//         }
//         getInfo = () => {
//             return `${this.name} parase ${this.authorName}`;
//         };
//         getYears = () => {
//             const today = new Date(); // standartizuotas formatas sios dienos datai parasyti

//             // console.log(today.getFullYear());
//             return today.getFullYear() - this.year;
//         };
// }
    
//     const harryPotterBook = new Book("Harry Potter", "J.K. Rowling", 1997)
//     console.log(harryPotterBook.getInfo());
//     console.log(harryPotterBook.getYears());

//     class Employee {
//         constructor(position, wage, experience) {
//     this.position = position;
//     this.wage = wage;
//     this.experience = experience;
//         }
//     getBonus = () => {
//         if(this.experience < 5) {
//             return this.wage;
//         } else if (this.experience > 10) {
//             return this.wage * 2;
//         } else {
//             return this.wage * 3;
//         }
//     }
//     }

// const softwareDeveloper = new Employee("Front-end engineer", 4000, 2);
// console.log(softwareDeveloper);

// const saleManager = new Employee("Sales Manager", 6000, 7);
// // console.log(salesManager);
// console.log(salesManager.getBonus());


// Namu darbas




class Car {
            constructor(brand, model, engine, price) {
                this.brand = brand;
                this.model = model;
                this.engine = engine;
                this.basePrice = price;
            }
            getTurnOn = () => {
                alert("Vroom!")
            }
        getPrice = () => {
            if(this.engine === "electric") {
                return this.basePrice * 4;
            } else if (this.engine === "diesel") {
                return this.basePrice * 2;
            } else {
                return this.basePrice;
            }
        };
        }
    
    const myCar = new Car("BMW", "X5", "Electric", 40000);
   
    console.log(myCar.brand);
    console.log(myCar.engine);
    console.log(myCar.getPrice);
    
