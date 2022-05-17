// Namu darbas


document.body.style.background = "#F0F8FF";

// Main block
const main = document.createElement("main");
main.style.background = "#ffffff";
main.style.width = "70%";
main.style.textAlign = "center";
main.style.borderRadius = "0.5rem";
main.style.padding = "1rem";
main.style.margin = "2rem auto 0 auto";
document.body.append(main);


// Image
const img = document.createElement("img");
img.src = "https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=";
img.alt = "Icon";
img.style.width = "10rem";
img.style.height = "10rem";
img.style.objectFit = "cover";
img.style.padding = "0,5rem"
img.style.marginTop = "-6.5rem";
img.style.borderRadius = "50%";
img.style.border = "2px solid #f3f3f3";
main.append(img);


// Info

const title = document.createElement("h1");
title.textContent = "Asta Nevedomskyte";

const speciality = document.createElement("h2");
speciality.textContent = "Fashion Stylist";
speciality.style.color = "#f3f3f3";

const area = document.createElement("p");
area.textContent = "Vilnius, Lithuania";
area.style.color = "#f3f3f3";

main.append(title, speciality, area);

// info.append(title, speciality, area);
// card.append(image, info);
// document.body.append(card);