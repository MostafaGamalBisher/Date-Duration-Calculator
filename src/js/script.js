const start = {
  day: document.querySelector("#startDay"),
  month: document.querySelector("#startMonth"),
  year: document.querySelector("#startYear"),
};

const end = {
  day: document.querySelector("#endDay"),
  month: document.querySelector("#endMonth"),
  year: document.querySelector("#endYear"),
};

const currentDate = document.querySelector("#current-date");
const workingDate = document.querySelector("#working-date");

/* calculating start/end dates in miliseconds */

export const getInputValues = () => {
  const sDay = +start.day.value;
  const sMonth = +start.month.value;
  const sYear = +start.year.value;

  const eDay = +end.day.value;
  const eMonth = +end.month.value;
  const eYear = +end.year.value;

  const startDate = new Date(sYear, sMonth - 1, sDay).setHours(0, 0, 0, 0);
  let endDate = new Date(eYear, eMonth - 1, eDay).setHours(0, 0, 0, 0);

  if (currentDate.checked) {
    endDate = new Date().setHours(0, 0, 0, 0);
  }

  return { startDate, endDate };
};

/* calculating the deffrance between the 2 dates in miliseconds */

export const calculateDifference = ({ startDate, endDate }) => {
  const diff = endDate - startDate;

  return { diff };
};

/* claculating total days  */
export const calculateDates = ({ diff }) => {
  let totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (workingDate.checked) {
    totalDays += 1;
  }

  return { totalDays };
};

/* geting the end-results */

export const result = ({ totalDays }) => {
  const years = Math.floor(totalDays / 365);
  const months = Math.floor((totalDays % 365) / 30);
  const days = Math.floor((totalDays % 365) % 30);

  const inYears = totalDays / 365;
  const inMonths = totalDays / 30;
  const inDays = totalDays;

  return { years, months, days, inYears, inMonths, inDays };
};

const resultOutput = document.querySelectorAll(".result");

export const displayResult = ({
  years,
  months,
  days,
  inYears,
  inMonths,
  inDays,
}) => {
  resultOutput[0].textContent = years;
  resultOutput[1].textContent = months;
  resultOutput[2].textContent = days;
  resultOutput[3].textContent = inYears;
  resultOutput[4].textContent = inMonths;
  resultOutput[5].textContent = inDays;
};
