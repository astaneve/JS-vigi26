// GET - guana esamus irasus
// POST sukuria nauja irasa
// PUT  -modifikuoja esanti irasa
// DELETE - istrina esama irasa

// const url = 'https://jsonplaceholder.typicode.com/comments';

// fetch('https://jsonplaceholder.typicode.com/comments') - galima rinktis arba 1 arba sita varianta. reiskia ta pati

fetch(url).then(resp => resp.json()).then(response => {
    console.log(response);
}).catch(error => {
    // atvaizduoti pirmo elemento duomenis
    console.error(error, ":Failed toload comments");
});



fetch("https://jsonplaceholder.typicode.com/comments")
.then(resp => resp.json())
.then(response => {
     // atvaizduoti pirmo elemento duomenis
    console.log("comments: ", response);
}).catch(error => {
    console.error(error, ":Failed toload comments");
});

fetch("https://jsonplaceholder.typicode.com/users")
.then(resp => resp.json())
.then(response => {
    // atvaizduoti pirmo objekto  adress company and name, juos sudeti i atskirus kintamuosius
    console.log("users: ", response)
})
.catch((error) => {
    console.error(error, ": Failed to load users");
});

fetch("https://jsonplaceholder.typicode.com/users/1")
.then(resp => resp.json())
.then(response => {
    // atvaizduoti userio name, username, email ir city ekrane
    console.log("users: ", response)
})
.catch((error) => {
    console.error(error, ": Failed to load users");
});

// // //

