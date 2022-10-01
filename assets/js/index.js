import { getValuesFromLocalStorage } from "./modules/storage.js";

const panelHistoryElement = document.querySelector("#panel-history");
const menuContainerElement = document.querySelector(".menu-container");
const closeButtonElement = document.querySelector(".close-container");
const historyPlayerElement = document.querySelector("#history-player");
const historyComputerElement = document.querySelector("#history-computer");

const { player, computer } = getValuesFromLocalStorage();
/**
 * Set event click for menuContainerElement
 * When menuContainerElement is clicked, its top property will be 0
 */
menuContainerElement.addEventListener("click", () => {
  panelHistoryElement.style.top = 0;
});

/**
 * Set event click for closeButtonElement.
 * When closeButtonElement is clicked, top property aside will be -1000px.
 */
closeButtonElement.addEventListener("click", () => {
  panelHistoryElement.style.top = "-1000px";
});

historyPlayerElement.innerText = player || 0;
historyComputerElement.innerText = computer || 0;
