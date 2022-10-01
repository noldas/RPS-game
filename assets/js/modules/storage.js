export const setValuesToLocalStorage = (objectValues) => {
  localStorage.setItem("result", JSON.stringify(objectValues));
};

export const getValuesFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("result"));
};
