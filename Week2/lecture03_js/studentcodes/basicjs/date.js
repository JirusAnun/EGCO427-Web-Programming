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

// Display the parts

// document.write("Date: " + dateString + "<br />", "Day: " + day + "<br />");

let hours = today.getHours() > 12 ? today.getHours() - 12 : today.getHours();
let unit = today.getHours() > 12 ? "PM" : "AM";
//Write your own code here
document.write(
  "Today: " +
    days[day] +
    " " +
    today.getDate() +
    " " +
    months[today.getMonth()] +
    " " +
    today.getFullYear() +
    "<br />"
);
document.write(
  "Time: " +
    hours +
    ":" +
    today.getMinutes().toString().padStart(2, "0") +
    ":" +
    today.getSeconds().toString().padStart(2, "0") +
    " " +
    unit +
    "<br />"
);
