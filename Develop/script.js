var currentDayEl = document.querySelector("#currentDay");
var dateTime = moment();
//header current date and time 
var time = document.querySelector("#currentDay");
currentDayEl.textContent = dateTime.format("dddd, MMMM Do, h:mm A");

//hours of the day
// var hourOfDay = moment().startOf("hour").set("hour", 9).format("h A");
// for (var i = 0; i < hourOfDay.length; i++) {

// }

// console.log(hourOfDay);
// var hour = document.getElementsByClassName("time-block");
// hour.textContent = moment().startOf("hour").set("hour", 9).format("h A");


var hourOfDay = document.querySelector(".hour9");
hourOfDay.textContent = moment().startOf("hour").set("hour", 9).format("h A");

var hourOfDay = document.querySelector(".hour10");
hourOfDay.textContent = moment().startOf("hour").set("hour", 10).format("h A");

var hourOfDay = document.querySelector(".hour11");
hourOfDay.textContent = moment().startOf("hour").set("hour", 11).format("h A");

var hourOfDay = document.querySelector(".hour12");
hourOfDay.textContent = moment().startOf("hour").set("hour", 12).format("h A");

var hourOfDay = document.querySelector(".hour13");
hourOfDay.textContent = moment().startOf("hour").set("hour", 13).format("h A");

var hourOfDay = document.querySelector(".hour14");
hourOfDay.textContent = moment().startOf("hour").set("hour", 14).format("h A");

var hourOfDay = document.querySelector(".hour15");
hourOfDay.textContent = moment().startOf("hour").set("hour", 15).format("h A");

var hourOfDay = document.querySelector(".hour16");
hourOfDay.textContent = moment().startOf("hour").set("hour", 16).format("h A");

var hourOfDay = document.querySelector(".hour17");
hourOfDay.textContent = moment().startOf("hour").set("hour", 17).format("h A");

//time.textContent = moment(date, "L").set("hour", 9)

