import { getValuesFromLocalStorage } from "./modules/storage.js";

const panelHistory = document.getElementById("panel-history");
const menuContainer = document.querySelector(".menu-container");
const menuIcons = document.querySelectorAll(".menu-icon");
const historyPlayerElement = document.querySelector("#history-player");
const historyComputerElement = document.querySelector("#history-computer");

const { player, computer } = getValuesFromLocalStorage();
/**
 * Set event click for menuContainer
 * When menuContainer is clicked, toggle class active on panelHistory and close on menuIcon
 *
 */
menuContainer.addEventListener("click", () => {
  panelHistory.classList.toggle("active");
  menuIcons.forEach((icon) => {
    icon.classList.toggle("close");
  });
});

historyPlayerElement.innerText = player || 0;
historyComputerElement.innerText = computer || 0;
