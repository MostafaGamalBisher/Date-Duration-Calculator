/* caclulation */

import { getInputValues, result, displayResult } from "../../src/js/script.js";
import { validateDay } from "../../src/js/validation.js";

const button = document.querySelector(".button");

const calculateDuration = () => {
  const dates = getInputValues();

  const getResult = result(dates);

  displayResult(getResult);
};

button.addEventListener("click", calculateDuration);

/* validation days */

const inputs = document.querySelectorAll(".date-input");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    validateDay(e.target);
  });
});
