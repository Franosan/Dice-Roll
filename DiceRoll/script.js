"use strict";

const btnRoll = document.querySelector(".btn-roll");
const dice = document.querySelector(".dice");
const ul = document.querySelector(".ul");
let diceRoll = 0;
let rollNumber = 1;

btnRoll.addEventListener("click", function () {
  rotateDice();
  const number = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${number}.png`;
  addElement(number);
});

function rotateDice() {
  diceRoll += 360;
  dice.style.rotate = `1 2 1 ${diceRoll}deg`;
  dice.style.transition = "1s ease-in-out";
}

function addElement(number) {
  const listItem = document.createElement("li");
  const listContent = document.createTextNode(`Roll ${rollNumber++}:`);
  const listNumber = document.createElement("img");
  listNumber.src = `dice-${number}.png`;
  listNumber.style.height = "32px";

  ul.appendChild(listItem);
  listItem.append(listContent, listNumber);

  listItem.style.fontSize = "20px";
  listItem.style.backgroundColor = "#47a5c4";
  listItem.style.color = "#fff";
  listItem.style.padding = "10px 20px";
  listItem.style.borderRadius = "10px";
  listItem.style.marginBottom = "10px";
  listItem.style.display = "flex";
  listItem.style.justifyContent = "space-between";
  listItem.style.alignItems = "center";
}
