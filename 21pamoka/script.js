const cookie = {
timeSpent: "2h",
loggedIn: "2022/06/01T18:00:00",
theme: "dark",
};

document.cookie = "timeSpent=2h";
document.cookie = "loggedIn=2022/06/01T18:00:00";
document.cookie = "theme=dark";

// localStorage.setItem("name", "Asta")
// localStorage.setItem("surname", "Ilagude")

const result = document.getElementById("full-name");
const fullName = localStorage.getItem("fullName");
result.textContent = fullName;


const button = document.getElementById("save");
button.addEventListener("click", () => {
    const name = document.querySelector("input[name='name']");
    const surname = document.querySelector("input[name='surname']");

    const fullName = `${name.value} ${surname.value}`;
    const result = document.getElementById("full-name");
    result.textContent = fullName;
    localStorage.setItem("fullName", fullName);
});
