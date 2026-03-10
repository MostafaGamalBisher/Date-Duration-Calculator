import {
  getInputValues,
  calculateDifference,
  calculateDates,
  result,
  displayResult,
} from "../../src/js/script.js";

const calculateDuration = () => {
  const dates = getInputValues();

  const diffrances = calculateDifference(dates);

  const days = calculateDates(diffrances);

  const getResult = result(days);

  displayResult(getResult);
};

const button = document.querySelector(".button");

button.addEventListener("click", calculateDuration);
