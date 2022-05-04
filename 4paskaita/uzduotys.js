Math.cos(0);

Math.floor(Math.random() * 5) + 1;

const randomNumber = Math.floor(Math.random() * 5) +1;
if (randomNumber === 1) {
    alert("You won");
} else {
    alert("try again next time");
}

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
}