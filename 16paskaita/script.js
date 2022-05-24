// const person = {
//     name: "Rokas",
//     surname: "Andreikenas",
//     age: 23,
// };

// // const ageProperty = "age";
// // console.log(person.age);
// // console.log(person.name)
// // console.log(person["age"]);

// const people = [{
// id: 1,
// name: "Rokas",
// surname: "Andreikenas",
// age: 23,
// },
// {id: 2,
// name: "Tomas",
// surname: "Tomaitis",
// age: 17,
// },
// {
// id: 3,
// name: "Simas",
// surname: "Simaitis",
// age: 32,
// },
// {
// id: 4,
// name: "Gokas",
// surname: "Sangokas",
// age: 99,
// },
// ];


// // const firstItem = people[0]; // pirmas elementas is masyvo
// // console.log(firstItem.name);
// // const lastItem = people[people.length - 1]; // paskutinis elementas is masyvo
// // console.log(lastItem);

// people.push({id: 4, name: "Gokas", surname: "Sangokas", age: 99});
// people.shift();
// // console.log(people);

// people.forEach( (person) => {
//     const fullName = `${person.name} ${person.surname}`;
// console.log(fullName);
// });

// const peopleWithFullName = people.map((person) => {
//     const fullName = `${person.name} ${person.surname}`;
//     return {...person, fullName: fullName, canDrive: person.age >= 18};
// });


// console.log(peopleWithFullName);

// function capitalize(value) {
//     return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
// }

// 1 pratimas

const veggies = [
    {name: "Apple", category: "tree", price: 1},
    {name: "Pear", category: "tree", price: 2},
    {name: "Blackberries", category: "bush", price: 5},
    {name: "Blueberries", category: "bush", price: 7},
    {name: "Carrot", category: "dirt", price: 0.25},
    {name: "Potato", category: "dirt", price: 0.3},
];

// const cheapVeggies = veggies.filter((veggie) => veggie.price <= 1);
// const expensiveVeggies = veggies.filter((veggie) => veggie.price >= 6);

// const expensiveVeggiesNames = expensiveVeggies.map((veggie) => veggie.name);
// console.log(cheapVeggies);
// console.log(expensiveVeggies);
// console.log(expensiveVeggiesNames);

// 2 pratimas

// veggies.sort((a, b) => (b.name > a.name ? 1 : 1)); // nuo a iki z sortina
// console.log(sorted);

function prices(array) {
const sorted = array.sort((a, b) => a.price - b.price)
const cheapest = sorted[0];
const expensive = sorted[sorted.length - 1];
return { cheapest: cheapest, expensive: expensive};

}

const veggiesPrice = prices(veggies);
console.log(veggiesPrice.cheapest);
console.log(veggiesPrice.expensive);