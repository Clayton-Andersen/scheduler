var currentDayEl = document.querySelector("#currentDay");
var dateTime = moment();
var currentHour = moment().hours();
var time = document.querySelector("#currentDay");

currentDayEl.textContent = dateTime.format("dddd, MMMM Do, h:mm A");


for  (let i = 9; i < 18; i++) {
    document.querySelector(".hour-" + i).textContent = moment().startOf("hour").set("hour", i).format("h A");

    if (i < currentHour) {
        //Before
        $(`div#${ i } textarea`).addClass("past");
        // Select element with id of i
        //give that element "past" class
    } else if (i === currentHour) {
        //Current
        $(`div#${ i } textarea`).addClass("present");
    } else {
        // None of the other cases were true so i must be future 
        $(`div#${ i } textarea`).addClass("future");
    }
};

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