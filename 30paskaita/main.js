import { facebookBlue, gmailBlue, gmailRed, gmailLightRed, gmailYellow, gmailGreen } from "./modules/colors.js";
import numbers, { zero, nine } from "./modules/numbers.js";
import { addition } from "./modules/math.js"
import renderHeader from "./modules/header"

console.log (facebookBlue, gmailBlue, gmailRed, gmailLightRed, gmailYellow, gmailGreen);
console.log(numbers, zero, nine);
console.log(addition(zero, nine));

renderHeader()