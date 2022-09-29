const asideElement = document.querySelector("aside");
const menuButtonElement = document.querySelector(".menu-container");
const xMarkButtonElement = document.querySelector(".x-mark-container");

/**
 * * Set event click for menuButtonElement.
 * * When menuButtonElement is clicked, top property aside will be 0.
 */
menuButtonElement.addEventListener("click", () => {
  asideElement.style.top = 0;
});

/**
 * * Set event click for xMarkButtonElement.
 * * When xMarkButtonElement is clicked, top property aside will be -1000px.
 */
xMarkButtonElement.addEventListener(
  "click",
  () => (asideElement.style.top = "-1000px")
);
