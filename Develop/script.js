var currentDayEl = document.querySelector("#currentDay");
var dateTime = moment();
//header current date and time 
var time = document.querySelector("#hourOfDay");
currentDayEl.textContent = dateTime.format("dddd, MMMM Do, h:mm A");
//main hour of day
var hourOfDay = document.querySelector("#hourOfDay9");
hourOfDay.textContent = moment().startOf("hour").set("hour", 9).format("h A");



//time.textContent = moment(date, "L").set("hour", 9)

