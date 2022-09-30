export const getImageSource = (choice) => {
  const imagesSources = {
    paper: "/assets/images/paper-sign.png",
    rock: "/assets/images/rock-sign.png",
    scissors: "/assets/images/scissors-sign.png",
  };

  return [imagesSources[choice], `${choice} sign`];
};
