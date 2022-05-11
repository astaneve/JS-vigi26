const painter = document.querySelector("input[name=painter]");

painter.addEventListener("input", (event) => {
    const value = event.target.value;
    const result = document.getElementById("painter-result");

    let paintedI = "";
    for(let i = 0; i < value; i++){
        paintedI += "<div>I</div>";
    }

    result.innerHTML = paintedI;

// result.innerHTML = "<div><h2> Asta </h2><h2> Asta </h2></div>";
console.log(paintedI);
});

const price = document.querySelector("input[name='price']");
const totalResult = document.querySelector("#sum-result");
price.addEventListener("blur", handleBlur);
let total = 0;
function handleBlur(event) {
    const value = event.target.value;
    
    total += Number(value);
    totalResult.textContent = `Total: $(total)`;
}

const fruitButton = document.querySelector("#add");
fruitButton.addEventListener("click", handleAddFruit);

function handleAddFruit(event) {
    event.preventDefault();
    const list = document.querySelector("#fruit-list");
    const fruit = document.querySelector("input[name='fruit']");
    // <li></li>
    const newFruit = document.createElement("li");
    //<ul>
   // <li>fruitvalue<li></li></li>
    //</ul>
    newFruit.textContent = fruit.value;
    
    list.append(newFruit);
    fruit.vale="";
}