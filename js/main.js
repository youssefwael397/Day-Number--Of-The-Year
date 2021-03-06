const form = document.getElementById("form");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const error = document.getElementById("error");
const result = document.getElementById("result");

const getDayOfTheYearFromDate = (day, month, year) => {
    const monthDaysList = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let dayNumber = 0;
    if (month == 1) {
        return +dayNumber + +day
    } else {
        for (let i = 0; i < month; i++) {
            if (i == 1 && +year % 4 == 0) {
                monthDaysList[1] = 29;
            }
            if (i == month - 1) {
                dayNumber = +dayNumber + +day
            } else {
                dayNumber = +dayNumber + +monthDaysList[i];
            }
        }
    }

    return dayNumber
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    error.innerHTML = ""
    result.innerHTML = ""
    let pattern = /^(4|6|9|11)$/
    let hasThirtyDays = pattern.test(month.value)
    if (hasThirtyDays && day.value > 30) {
        error.innerHTML = `Days in month ${month.value} must be less than 31.`
    } else {
        if (month.value == 2 && day.value > 29 && year.value % 4 == 0) {
            error.innerHTML = "Days in February must be less than 30 in leap year."
        } else if (month.value == 2 && day.value > 28 && year.value % 4 !== 0) {
            error.innerHTML = "Days in February must be less than 29."
        } else {
            result.innerHTML = "This day is " + getDayOfTheYearFromDate(day.value, month.value, year.value) + " of " + year.value
        }
    }


});
