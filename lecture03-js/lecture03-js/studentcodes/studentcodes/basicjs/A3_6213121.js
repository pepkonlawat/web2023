// date.html
//   Illustrates the use of the Date object by
//   displaying the parts of a current date and
//   using two Date objects to time a calculation

// Get the current date

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

var today = new Date();

// Fetch the various parts of the date

var dateString = today.toLocaleString();
var day = today.getDay();
//Write your own code here
var time = today.getTime();
var month = today.getMonth();
var year = today.getFullYear();
var hours = today.getHours();
var minutes = today.getMinutes();
var seconds = today.getSeconds();
// Display the parts

document.write("Date: " + dateString + "<br />", "Day: " + day + "<br />");

//Write your own code here Today: Mondday 16 January, 2023 3:40:24 PM
document.write(
  "Today: " +
    days[day] +
    " " +
    months[month] +
    ", " +
    year +
    " " +
    hours +
    ":" +
    minutes +
    ":" +
    seconds
);
document.write("Time: " + time);
