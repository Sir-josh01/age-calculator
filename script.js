const dayInput = document.querySelector(".day-input");
const monthInput = document.querySelector(".month-input");
const yearInput = document.querySelector(".year-input");
const checker = document.querySelector(".icon-box");

let yearDisplay = document.querySelector(".years");
let monthDisplay = document.querySelector(".months");
let dayDisplay = document.querySelector(".days");

// input Length check
dayInput.addEventListener("input", (event) => {
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0, 2);
  }
});

monthInput.addEventListener("input", (event) => {
  if (event.target.value.length > 2) {
    event.target.value = event.target.value.slice(0, 2);
  }
});

yearInput.addEventListener("input", (event) => {
  if (event.target.value.length > 4) {
    event.target.value = event.target.value.slice(0, 4);
  }
});

// Checking for Age
checker.addEventListener("click", () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const currentMonth = date.getMonth();
  const currentDay = date.getDate();

  const yearValue = Number(yearInput.value);
  const monthValue = Number(monthInput.value);
  const dayValue = Number(dayInput.value);

  // Error Checking and Reset
  document
    .querySelector(".day-input + .error-msg")
    .classList.remove("error-msg-active");
  document
    .querySelector(".month-input + .error-msg")
    .classList.remove("error-msg-active");
  document
    .querySelector(".year-input + .error-msg")
    .classList.remove("error-msg-active");

  //reset labels
  dayInput.parentElement.querySelector("label").classList.remove("error-label");
  monthInput.parentElement
    .querySelector("label")
    .classList.remove("error-label");
  yearInput.parentElement
    .querySelector("label")
    .classList.remove("error-label");
  let hasErrors = false;

  if (dayValue < 1 || dayValue > 31) {
    dayInput.parentElement.querySelector("label").classList.add("error-label");
    document
      .querySelector(".day-input + .error-msg")
      .classList.add("error-msg-active");
    dayInput.classList.add("error-border");
    hasErrors = true;
  }

  if (monthValue < 1 || monthValue > 12) {
    monthInput.parentElement
      .querySelector("label")
      .classList.add("error-label");
    monthInput.classList.add("error-border");
    document
      .querySelector(".month-input + .error-msg")
      .classList.add("error-msg-active");
    hasErrors = true;
  }

  if (yearValue > currentYear) {
    yearInput.classList.add("error-border");
    document
      .querySelector(".year-input + .error-msg")
      .classList.add("error-msg-active");
    yearInput.parentElement.querySelector("label").classList.add("error-label");
    hasErrors = true;
  }

  if (hasErrors) {
    return;
  }

  let yearAge;
  let monthAge;
  let dayAge;
  yearAge = currentYear - yearValue;
  monthAge = currentMonth - monthValue;
  dayAge = currentDay - dayValue;

  // validate and balance the negative days and months
  if (monthAge < 0) {
    yearAge--;
    monthAge += 12;
  }

  if (dayAge < 0) {
    monthAge--;
    if (monthAge < 0) {
      yearAge--;
      monthAge += 12;
    }

    const prevMonthDate = new Date(currentYear, currentMonth, 0); // Last day of previous month
    dayAge += prevMonthDate.getDate();
  }

  animateNumbers(yearAge, monthAge, dayAge);

  yearDisplay.innerHTML = yearAge;
  monthDisplay.innerHTML = monthAge;
  dayDisplay.innerHTML = dayAge;
});

function animateNumbers(yearAge, monthAge, dayAge) {
  const yearsSpan = document.querySelector(".years");
  const monthsSpan = document.querySelector(".months");
  const daysSpan = document.querySelector(".days");

  let currentYears = 0;
  let currentMonths = 0;
  let currentDays = 0;

  const animationDuration = 1500; // Animation duration in milliseconds
  const frameRate = 30; // Frames per second

  const yearIncrement = yearAge / (animationDuration / frameRate);
  const monthIncrement = monthAge / (animationDuration / frameRate);
  const dayIncrement = dayAge / (animationDuration / frameRate);

  const animationInterval = setInterval(() => {
    if (currentYears < yearAge) {
      currentYears += yearIncrement;
      yearsSpan.textContent = Math.round(currentYears);
    }

    if (currentMonths < monthAge) {
      currentMonths += monthIncrement;
      monthsSpan.textContent = Math.round(currentMonths);
    }

    if (currentDays < dayAge) {
      currentDays += dayIncrement;
      daysSpan.textContent = Math.round(currentDays);
    }

    if (
      currentYears >= yearAge &&
      currentMonths >= monthAge &&
      currentDays >= dayAge
    ) {
      clearInterval(animationInterval);
      yearsSpan.textContent = yearAge;
      monthsSpan.textContent = monthAge;
      daysSpan.textContent = dayAge;
    }
  }, 1500 / frameRate); // Update every frame
}
