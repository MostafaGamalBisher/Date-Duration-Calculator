// import { getInputValues } from "../../src/js/script.js";

// getInputValues();

const validDay = document.querySelectorAll("[name='day']");
const validMonth = document.querySelectorAll("[name='month']");
const validYear = document.querySelectorAll("[name='year']");


const vlaidateDay = (validDay) => {
  const dayValue = Number(validDay.value);

  if (dayValue >= 1 && dayValue <= 31 )
};
