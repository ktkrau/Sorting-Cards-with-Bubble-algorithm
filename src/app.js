/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let suits = ["spades", "heart", "diamond", "clubs"];
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  let objCards = [];

  let drawButton = document.querySelector(".draw-button");
  drawButton.addEventListener("click", myFunctionCards);

  function myFunctionCards() {
    objCards = [];
    let myCard = document.querySelector(".origin-container");
    if (myCard.childNodes.length !== 0) {
      myCard.innerHTML = "";
    }
    let inputCards = parseInt(document.getElementById("numbCards").value);
    if (inputCards === 0) {
      alert("El numero debe ser mayor a 0");
    } else if (inputCards !== 0) {
      for (let i = 0; i < inputCards; i++) {
        let objElementsCard = {
          suits: suits[Math.floor(Math.random() * suits.length)],
          numbers: numbers[Math.floor(Math.random() * numbers.length)]
        };
        objCards.push(objElementsCard);
      }

      if (myCard.childNodes.length === 0) {
        for (let element of objCards) {
          if (element.numbers === 1) {
            element.numbers = "A";
          }
          if (element.numbers === 11) {
            element.numbers = "J";
          }
          if (element.numbers === 12) {
            element.numbers = "Q";
          }
          if (element.numbers === 13) {
            element.numbers = "K";
          }
          let myDiv = document.createElement("div");
          let contentDiv = document.createTextNode(`${element.numbers}`);
          myDiv.className = `card ${element.suits}`;
          myDiv.appendChild(contentDiv);
          myCard.appendChild(myDiv);
        }
      }
    }
  }

  const bubbleSort = () => {
    let myContainerDiv = document.querySelector(".bubble-sort-container");
    if (myContainerDiv.childNodes.length !== 0) {
      myContainerDiv.innerHTML = "";
    }
    let wall = objCards.length - 1;
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        if (objCards[index].numbers === "A") {
          objCards[index].numbers = 1;
        }
        if (objCards[index].numbers === "J") {
          objCards[index].numbers = 11;
        }
        if (objCards[index].numbers === "Q") {
          objCards[index].numbers = 12;
        }
        if (objCards[index].numbers === "K") {
          objCards[index].numbers = 13;
        }

        if (objCards[index].numbers > objCards[index + 1].numbers) {
          let aux = objCards[index].numbers;
          objCards[index].numbers = objCards[index + 1].numbers;
          objCards[index + 1].numbers = aux;
        }
        index++;
      }
      wall--;
      let myUl = document.createElement("ul");
      let liNumber = document.createElement("li");
      liNumber.innerHTML = `${index - 1}:`;
      myUl.appendChild(liNumber);
      myUl.className = "cards-sort-container";
      myContainerDiv.appendChild(myUl);
      for (let element of objCards) {
        if (element.numbers === 1) {
          element.numbers = "A";
        }
        if (element.numbers === 11) {
          element.numbers = "J";
        }
        if (element.numbers === 12) {
          element.numbers = "Q";
        }
        if (element.numbers === 13) {
          element.numbers = "K";
        }
        let myLi = document.createElement("li");
        let contentLi = document.createTextNode(`${element.numbers}`);
        myLi.className = `card ${element.suits}`;
        myLi.appendChild(contentLi);
        myUl.appendChild(myLi);
      }
    }
    return objCards;
  };

  let sortButton = document.querySelector(".sort-button");
  sortButton.addEventListener("click", bubbleSort);
};
