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

const sDay = +start.day.value;
const sMonth = +start.month.value;
const sYear = +start.year.value;

const eDay = +end.day.value;
const eMonth = +end.month.value;
const eYear = +end.year.value;

const startDate = new Date(sYear, sMonth - 1, sDay);
const endDate = new Date(eYear, eMonth - 1, eDay);

document.querySelector(".button").addEventListener("click", calculateDuration);

const calculateDuration = () => {};
