export const updateGameContent = (arrayOfRequContents) => {
  const playerScoreElement = document.querySelector(".player-score");
  const computerScoreElement = document.querySelector(".computer-score");
  const playerChoiceImageElement = document.querySelector(
    "#player-choice-image"
  );
  const computerChoiceImageElement = document.querySelector(
    "#computer-choice-image"
  );

  // Destructure each required values from arrayOfRequContents parameter
  const [
    playerImageSource,
    playerImageAlt,
    computerImageSource,
    computerImageAlt,
    scores,
  ] = arrayOfRequContents;

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
};
