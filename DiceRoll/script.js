"use strict";

const dice = document.querySelector(".dice");
const roll = document.querySelector(".btn-roll");
const list = document.querySelector(".ul");

const object = {
  diceAnimation: 0,
  number: 0,
  rollNumber: 1,

  rollDice() {
    this.number = Math.trunc(Math.random() * 6) + 1;
    dice.src = `dice-${this.number}.png`;

    this.diceAnimation += 360;
    dice.style.rotate = `1 2 1 ${this.diceAnimation}deg`;
    dice.style.transition = "1s ease-in-out";

    this.addElement();
  },

  addElement() {
    const listItem = document.createElement("li");
    const listContent = document.createTextNode(`Roll ${this.rollNumber++}:`);
    const listNumber = document.createElement("img");

    list.appendChild(listItem);
    listItem.append(listContent, listNumber);

    listNumber.src = `dice-${this.number}.png`;
    listNumber.style.height = "32px";

    listItem.style.fontSize = "20px";
    listItem.style.backgroundColor = "#47a5c4";
    listItem.style.color = "#fff";
    listItem.style.padding = "10px 20px";
    listItem.style.borderRadius = "10px";
    listItem.style.marginBottom = "10px";
    listItem.style.display = "flex";
    listItem.style.justifyContent = "space-between";
    listItem.style.alignItems = "center";
  },
};

roll.addEventListener("click", function () {
  object.rollDice();
});
