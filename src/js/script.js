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

/* calculating start/end dates in miliseconds */
const getInputValues = () => {
  const sDay = +start.day.value;
  const sMonth = +start.month.value;
  const sYear = +start.year.value;

  const eDay = +end.day.value;
  const eMonth = +end.month.value;
  const eYear = +end.year.value;

  const startDate = new Date(sYear, sMonth - 1, sDay);
  const endDate = new Date(eYear, eMonth - 1, eDay);

  return { startDate, endDate };
};

/* calculating the deffrance between the 2 dates in miliseconds */

const calculateDifference = ({ startDate, endDate }) => {
  const diff = endDate - startDate;

  return { diff };
};
const claculateDates = ({ diff }) => {
  const totalDays = diff / (1000 * 60 * 60 * 24);

  return { totalDays };
};
