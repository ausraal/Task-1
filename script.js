/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */
const output = document.querySelector("#output");
let myForm = document.querySelector ('form');
myForm.addEventListener('submit', (event) => {
event.preventDefault(); 
let weight = document.querySelector("#search"); 
let weightValue = Number(weight.value);
let poundsValue = document.createElement("h1");
poundsValue.innerText =  `Jūsų įvestas svoris svarais: ${weightValue * 2.2046} lb`;
let gramsValue = document.createElement("h1");
gramsValue.innerText =  `Jūsų įvestas svoris gramais: ${weightValue / 0.0010000} g`;
let untiaValue = document.createElement("h1");untiaValue.innerText =  `Jūsų įvestas svoris uncijomis: ${weightValue * 35.274} oz`;
output.append(poundsValue, gramsValue,untiaValue);
output.style.marginLeft = "400px";
})
