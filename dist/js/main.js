/* caclulation */

import { getInputValues, result, displayResult } from "../../src/js/script.js";
import { isFormValid, validateDay } from "../../src/js/validation.js";

const button = document.querySelector(".button");

const calculateDuration = () => {
  if (!isFormValid()) return;

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

const currentDateCheckbox = document.querySelector("#current-date");
const endDay = document.querySelector("#endDay");
const endMonth = document.querySelector("#endMonth");
const endYear = document.querySelector("#endYear");

currentDateCheckbox.addEventListener("change", () => {
  if (currentDateCheckbox.checked) {
    const today = new Date();

    endDay.value = today.getDate();
    endMonth.value = today.getMonth() + 1;
    endYear.value = today.getFullYear();

    endDay.disabled = true;
    endMonth.disabled = true;
    endYear.disabled = true;

    validateDay(endDay);
  } else {
    endDay.value = "";
    endMonth.value = "";
    endYear.value = "";

    endDay.disabled = false;
    endMonth.disabled = false;
    endYear.disabled = false;

    validateDay(endDay);
  }
});
