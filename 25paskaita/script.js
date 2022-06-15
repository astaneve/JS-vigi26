const renderTodo = (todo) => {
const {completed, title} = todo;

const todoEl = document.createElement('div');
const todoTitle = document.createElement('p');
const todoStatus = document.createElement('span');

todoEl.className = "todo";
todoTitle.className = completed ? "todo-title done" : "todo-title";
todoStatus.className = completed ? "todo-status done" : "todo-status";

todoTitle.textContent = title;
todoStatus.addEventListener("click", () => {
todoStatus.classList.toggle("done");
todoTitle.classList.toggle("done");
todoStatus.completed = !todoStatus.completed;
});

todoEl.append(todoTitle, todoStatus);
document.querySelector(".todo-container").prepend(todoEl);
};

fetch("https://jsonplaceholder.typicode.com/todos")
.then((resp) => resp.json())
.then((response) => {
    const todos = response.slice(0, 5);
    

    todos.forEach((todo) => renderTodo(todo));
})
.catch((error) => {
    console.error(error);
});

// issitraukti mygtuka
// priskirti addEvenet listener
// issitraukti funkcijos viduje input lauka
// input duomenis append i todo lista


const handleAddTodo = (e) => {
    const todoText = document.querySelector('input[name="todo-text"]')
    // console.log(todoText);
    // console.log("Paspaudziu add mygtuka");
    const newTodo = {title: todoText.value, completed: false };
    renderTodo(newTodo);

    const params = {
    method: "POST",
    body: JSON.stringify(newTodo),
headers: {
    "Content-type": "application.json; charset=UTF-8",
},
    }

    fetch("https://jsonplaceholder.typicode.com/todos", params)
    .then((resp) => resp.json())
.then((response) => {
    console.log(response);
    renderTodo(newTodo);
    todoText.value = "";
    console.log(response);
    
    })
.catch((error) => {
    console.error(error);
})
    };

const addButton = document.querySelector(".add-button");
// console.log(addButton);
addButton.addEventListener("click", handleAddTodo);

