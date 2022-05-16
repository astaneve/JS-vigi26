console.log("11 paskaita - objektai");

// Tuscias objektas
const emptyObject = {}
// {} nurodo, kad tai yra objektas, kuris turi savyje kazkokias savybes
const user = {
    name: "asta20",
    password: "astaneve", // passwordas duomenu bazeje turi pasikesti i skaiciu seka, kad nenulauztu
    mail: "asta@gmail.com",
    age: 20,
    gender: "female",
    key: "",
};

// console.log(user.name);
// console.log(user["mail"]); - sitas variantas naudojamas dinamineje
// HTMLFormControlsCollection.log(user.password + user.password);

function getItem(key) {
    return user[key];
}
// console.log(getItem("gender"));

const candle = {
    color: "green",
    taste: "apple",
    height: 8,
    radius: 8,
    turnLight: () => {
        console.log(`${candle.color} candle spreading tasteful ${candle.taste} smell`);
    },
    calculateLightTime: () => {
        const metric = candle.height * candle.radius;
        if(metric > 60) {
            return 180;
        } else if (metric > 30) {
            return 90;
        } else {
            return 45;
        }
    }
}

const minutes = candle.calculateLightTime();
console.log(minutes);
// candle.turnLight();
// function turnLight () { ir ilga parasyta funkcija galima kelti i turnLight: turnLight

// }

const cat = {
    name: "Kleopatras",
    age: 15,
    color: "black",
    weight: 7,
    eat: () => { console.log(`${cat.name} is eating...`);
},
    sleep: () => {console.log("Cat is sleeping");
},
};


// console.log(`${cat.name} is a ${car.colo} cat and ${cat.age} age`);


// 2 pratimas

const codeClass = {
    type: "remote",
    subject: "Front-end + Node.js",
    lecturer: {
        name: "Rokas",
        surname: "Andreikenas",
        age: 23,
        experience: 3,
},
    students: ["Edvinas", "Liudmila", "Rima", "Karolis",
    ]
};

// console.log(codeClass);
console.log(codeClass.lecturer.name);
const lectureFullName = `${codeClass.lecturer.name} ${codeClass.lecturer.surname}`;
// console.log(lecturerFullName);

// console.log(codeClass.students[0]);
const studentsCount = codeClass.students.lengtrh;
// console.log(studentsCount);

console.log(codeClass.type);
codeClass.type = "onsite";

// 3 pratimas

const student = {};

student.name = "Asta";
student.surname = "Neve";

console.log(student);

const names = ["Edvinas", "Liudmila", "Rima", "Karolis"];

names[0] = "Rokas";
console.log(names);

// 4 pratimas

const treeForm = document.getElementById("tree-form");
treeForm.addEventListener("submit", handleSubmitTreeForm);

function handleSubmitTreeForm(event) {
    event.preventDefault();

const treeName = document.querySelector("input[name='tree-name']");
const treeAge = document.querySelector("input[name='tree-age']");
}

// jei <div>, tai rasom value, jei kitas
// console.log(treeName.value);
// console.log(treeAge.value);

// const named = treeName.value
// const age = Number(treeAge.value)

// const tree = {
//     name: named,
//     age: age,
//     isOld: age > 100 ? true : false, // jei age daugiau nei 100 bus true, kitu atveju false
// };

// console.log(tree);

// Namu darbu uzduotis 1
const car = {
    doors: 4,
    brand: "Honda",
    color: "red",
}

console.log(car);
console.log(car.doors);

if(car.doors === 4){
    alert("turi keturias duris");
} else if(car.doors === 3){
    alert("turi tris duris");
} else {
    alert("turi neiprasta skaiciu duru");
}

// Namu darbu uzduotis 2

document.querySelector("form").addEventListener("submmit", e => {
    emptyObject.preventDefault()

    console.log(e);

    // const name = document.querySelector("input").value;
    // const surname = document.querySelector("input:nth-of-type(2)").value;

    const person = {
        name: document.querySelector("input").value,
        surname: document.querySelector("input:nth-of-type(2)").value,
    };
    console.log(person);
});


// Namu darbu uzduotis 3

document.querySelector("form").addEventListener("submmit", (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const age = Number(e.target.elements.age.value);

    const islegalAge = age >+ 18 ? true : false;

    const person = {
        name: name,
        isLegal: islegalAge,
    };
    console.log(person);
});