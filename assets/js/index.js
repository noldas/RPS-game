const aside = document.querySelector("aside");
const menuButton = document.querySelector(".menu-container");
const xMarkButton = document.querySelector(".x-mark-container");

/**
 * * Set event click for menuButton.
 * * When menuButton is clicked, top property aside will be 0.
 */
menuButton.addEventListener("click", () => {
  aside.style.top = 0;
});

/**
 * * Set event click for xMarkButton.
 * * When xMarkButton is clicked, top property aside will be -1000px.
 */
xMarkButton.addEventListener("click", () => (aside.style.top = "-1000px"));
