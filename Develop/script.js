var currentDayEl = document.querySelector("#currentDay");
var dateTime = moment();
//header current date and time 
var time = document.querySelector("#currentDay");
currentDayEl.textContent = dateTime.format("dddd, MMMM Do, h:mm A");

//hour block
var hourOfDay = document.querySelector(".hour-9");
hourOfDay.textContent = moment().startOf("hour").set("hour", 9).format("h A");

var hourOfDay = document.querySelector(".hour-10");
hourOfDay.textContent = moment().startOf("hour").set("hour", 10).format("h A");

var hourOfDay = document.querySelector(".hour-11");
hourOfDay.textContent = moment().startOf("hour").set("hour", 11).format("h A");

var hourOfDay = document.querySelector(".hour-12");
hourOfDay.textContent = moment().startOf("hour").set("hour", 12).format("h A");

var hourOfDay = document.querySelector(".hour-13");
hourOfDay.textContent = moment().startOf("hour").set("hour", 13).format("h A");

var hourOfDay = document.querySelector(".hour-14");
hourOfDay.textContent = moment().startOf("hour").set("hour", 14).format("h A");

var hourOfDay = document.querySelector(".hour-15");
hourOfDay.textContent = moment().startOf("hour").set("hour", 15).format("h A");

var hourOfDay = document.querySelector(".hour-16");
hourOfDay.textContent = moment().startOf("hour").set("hour", 16).format("h A");

var hourOfDay = document.querySelector(".hour-17");
hourOfDay.textContent = moment().startOf("hour").set("hour", 17).format("h A");

//save function
$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var reminder = $(this).siblings(".text-area").val()
        var time = $(this).parent().attr("id")
        localStorage.setItem(time, reminder)
    })

    $("#9 .text-area").val(localStorage.getItem("9"));
    $("#10 .text-area").val(localStorage.getItem("10"));
    $("#11 .text-area").val(localStorage.getItem("11"));
    $("#12 .text-area").val(localStorage.getItem("12"));
    $("#13 .text-area").val(localStorage.getItem("13"));
    $("#14 .text-area").val(localStorage.getItem("14"));
    $("#15 .text-area").val(localStorage.getItem("15"));
    $("#16 .text-area").val(localStorage.getItem("16"));
    $("#17 .text-area").val(localStorage.getItem("17"));
    

});

// //audit task background color
// var auditTask = function(textAreaEl) {
//     $()
// }



//if currentDayEl dateTime  >,=, < hourOfDay, background color for text-area grey, red or green.
// if (currentDayEl < hourOfDay) {change}

//time.textContent = moment(date, "L").set("hour", 9)

//hours of the day
// var hourOfDay = moment().startOf("hour").set("hour", 9).format("h A");
// for (var i = 0; i < hourOfDay.length; i++) {

// }

// console.log(hourOfDay);
// var hour = document.getElementsByClassName("time-block");
// hour.textContent = moment().startOf("hour").set("hour", 9).format("h A");

