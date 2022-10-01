import { useState } from "./modules/useState.js";
import { getComputerChoice } from "./modules/computerChoice.js";
import { getWinner } from "./modules/getWinner.js";
import { getImageSource } from "./modules/getImageSource.js";
import { updateGameContent } from "./modules/updateGameContent.js";
import { resetGameContent } from "./modules/resetGameContent.js";
import { setValuesToLocalStorage } from "./modules/storage.js";

// Selection of HTML elements with the DOM
const buttonResetElement = document.querySelector(".btn-reset");
const buttonEndElement = document.querySelector(".btn-end");
const choiceCardElements = document.querySelectorAll(".choice-card");

// Initialize the state of the game
let [scores, setScores] = useState({
  player: 0,
  computer: 0,
});

// Iterate through each choice card element and give each value click event
choiceCardElements.forEach((card) => {
  card.addEventListener("click", () => {
    const playerChoice = card.dataset.choiceType;
    const [playerImageSource, playerImageAlt] = getImageSource(playerChoice);
    const computerChoice = getComputerChoice();
    const [computerImageSource, computerImageAlt] =
      getImageSource(computerChoice);
    let winner;

    setTimeout(() => {
      winner = getWinner(playerChoice, computerChoice);
      scores = setScores({
        player: winner === "player" ? scores.player + 1 : scores.player,
        computer: winner === "computer" ? scores.computer + 1 : scores.computer,
      });

      updateGameContent([
        playerImageSource,
        playerImageAlt,
        computerImageSource,
        computerImageAlt,
        scores,
      ]);

      setValuesToLocalStorage(scores);
    }, 1000);
  });
});

// Set event click for buttonResetElement
buttonResetElement.addEventListener("click", () => {
  scores = setScores({
    player: 0,
    computer: 0,
  });

  resetGameContent([scores]);
  setValuesToLocalStorage({ player: 0, computer: 0 });
});

// Set event click for buttonEndElement
buttonEndElement.addEventListener("click", (event) => {
  setValuesToLocalStorage(scores);
});
