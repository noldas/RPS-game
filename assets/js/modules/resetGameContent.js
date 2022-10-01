export const resetGameContent = (arrayOfRequiredContents) => {
  const playerScoreElement = document.querySelector(".player-score");
  const computerScoreElement = document.querySelector(".computer-score");
  const playerChoiceImageElement = document.querySelector(
    "#player-choice-image"
  );
  const computerChoiceImageElement = document.querySelector(
    "#computer-choice-image"
  );

  // Destructure each required values from arrayOfRequiredContents parameter
  const [scores] = arrayOfRequiredContents;

  // remove class "hidden" from the images elements
  playerChoiceImageElement.classList.add("hidden");
  computerChoiceImageElement.classList.add("hidden");

  // set the image source and alt attributes for the player and computer image
  playerChoiceImageElement.src = "";
  playerChoiceImageElement.alt = "";

  computerChoiceImageElement.src = "";
  computerChoiceImageElement.alt = "";

  // update the player and computer score
  playerScoreElement.innerText = scores.player;
  computerScoreElement.innerText = scores.computer;
};
