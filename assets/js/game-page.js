import { useState } from "./modules/useState.js";
import { getComputerChoice } from "./modules/computerChoice.js";
import { getWinner } from "./modules/getWinner.js";
import { getImageSource } from "./modules/getImageSource.js";

// Selection of HTML elements with the DOM
const playerScoreElement = document.querySelector(".player-score");
const computerScoreElement = document.querySelector(".computer-score");
const choiceCardElements = document.querySelectorAll(".choice-card");
const playerChoiceImageElement = document.querySelector("#player-choice-image");
const computerChoiceImageElement = document.querySelector(
  "#computer-choice-image"
);

let [scores, setScores] = useState({
  player: 0,
  computer: 0,
});

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

      // remove class "hidden" from the images elements
      playerChoiceImageElement.classList.remove("hidden");
      computerChoiceImageElement.classList.remove("hidden");

      // set the image source and alt attributes for the player and computer image
      playerChoiceImageElement.src = playerImageSource;
      playerChoiceImageElement.alt = playerImageAlt;

      computerChoiceImageElement.src = computerImageSource;
      computerChoiceImageElement.alt = computerImageAlt;

      // update the player and computer score
      playerScoreElement.innerText = scores.player;
      computerScoreElement.innerText = scores.computer;
    }, 1000);
  });
});
