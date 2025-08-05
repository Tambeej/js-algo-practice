/*
Create a function that takes the current day (e.g. "2019-09-30"), an array of date objects and returns the "current streak" (i.e. number of consecutive days in a row).

Examples
currentStreak("2019-09-23", [
 {
 date: "2019-09-18"
 },
 {
 date: "2019-09-19"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 3

currentStreak("2019-09-25", [
 {
 date: "2019-09-16"
 },
 {
 date: "2019-09-17"
 },
 {
 date: "2019-09-21"
 },
 {
 date: "2019-09-22"
 },
 {
 date: "2019-09-23"
 }
]) ➞ 0
Notes
The array of dates is sorted chronologically.
The today parameter will always be greater than or equal to the last date in the array.
An empty array should return 0.
*/

function currentStreak(currentDay, dates) {
  if (dates.length == 0 || currentDay !== dates[dates.length - 1].date) {
    return 0;
  }
  let counter = 1;
  for (let i = dates.length - 1; i > 0; i--) {
    if (getDaysBetweenDates(dates[i - 1].date, dates[i].date) == 1) {
      counter++;
    } else {
      return counter;
    }
  }
  return counter;
}

function getDaysBetweenDates(startDate, endDate) {
  const date1 = new Date(startDate);
  const date2 = new Date(endDate);

  // Calculate the time difference in milliseconds
  const diffInTime = date2.getTime() - date1.getTime();

  // Convert milliseconds to days
  const oneDayInMs = 1000 * 60 * 60 * 24;
  const diffInDays = Math.round(diffInTime / oneDayInMs);

  return diffInDays;
}

// console.log(
//   currentStreak("2019-09-23", [
//     { date: "2019-09-18" },
//     { date: "2019-09-19" },
//     { date: "2019-09-21" },
//     { date: "2019-09-22" },
//     { date: "2019-09-23" },
//   ])
// );

exports.solution = currentStreak;
