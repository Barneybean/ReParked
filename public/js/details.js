
// $('#day1').val(reservation.bookedDate)
var userId = sessionStorage.getItem("loggedInRenterId");
// if (!sessionStorage.getItem("loggedInHostId")) {
//   var hostId = sessionStorage.getItem("loggedInHostId");
// } else {
//   var hostId = 1;
// }
var hostId = sessionStorage.getItem("loggedInHostId");
var listingId = sessionStorage.getItem("clickedListingId");
var imageUrl = sessionStorage.getItem("clickedListingUrl");
var hourRate = sessionStorage.getItem("clickedListingRate");
//show image
var listingImg = $('<img>');
// src="imageUrl", height="400", width="400"
listingImg.attr("src", imageUrl);
listingImg.attr("height", "400");
listingImg.attr("width", "450");
$(".showImage").html(listingImg);
$("#price").html("Hourly Rate: $" + hourRate);

// var userId = 1;
// var hostId = 2;
// var listingId =2; 

var resultFromDB = [
  {
    id: 1,
    bookedDates: "2018-06-12",
    bookedHours: [2, 4, 5]
  },
  {
    id: 2,
    bookedDates: "2018-06-13",
    bookedHours: [2, 3, 5, 6]
  },
  {
    id: 3,
    bookedDates: "2018-06-14",
    bookedHours: [2, 3, 5, 7]
  },
  {
    id: 4,
    bookedDates: "2018-06-15",
    bookedHours: [2, 3, 5, 7]
  }
]


var result = resultFromDB.slice(0, 3);
var today = new Date();
var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var tomorrow = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate() + 1);
var twoDaysFromToday = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + (today.getDate() + 2);

//get function retrieves 
$.get("/api/" + listingId + "/" + date + "/" + twoDaysFromToday, function (data) {
  console.log("Data from get listing ID:::: ", data);
  var allTime = [];
  for (var j = 0; j < data.length; j++) {
    allTime[j] = [];
    for (var i = data[j].timeStart; i < data[j].timeEnd; i++) {
      allTime[j].push(i);
    }
  }

  console.log("All time array::::: ", allTime);

  // create table and highlight reserved
  var resultFromDB = [];
  for (var e = 0; e < data.length; e++) {
    resultFromDB[e] = {
      id: data[e].id,
      bookedDates: data[e].dateStart,
      bookedHours: allTime[e]
    };
  }
  result = resultFromDB.slice(0, 3);
  console.log("Result fromDB::: ", result);

  //to create column name
  for (var i = 0; i < result.length; i++) {
    if (i < 3) {
      var columnName = $("<th>");
      var index = i + 1
      columnName.attr("scope", "col");
      columnName.attr("class", "day" + index)
      columnName.text((today.getFullYear()) + "-" + (today.getMonth() + 1) + "-" + (today.getDate() + i));
      $("#columnName").append(columnName);
    }
    else {
      console.log("display 3 reservations only")
    }
  }

  // create 24 hours tr
  for (var i = 0; i < 24; i++) {
    if (i < 24) {
      var index = i + 1
      var timeSlot = i + ":00-" + (i + 1) + ":00"
      if (result.length === 3) {
        var tableRow = $("<tr>");
        var tableData1 = $("<td>");
        var tableData2 = $("<td>");
        var tableData3 = $("<td>");
        tableData1.text(timeSlot);
        tableData1.attr("id", i + "-" + result[0].bookedDates);
        tableData2.text(timeSlot);
        tableData2.attr("id", i + "-" + result[1].bookedDates);
        tableData3.text(timeSlot);
        tableData3.attr("id", i + "-" + result[2].bookedDates);
        tableRow.append(tableData1);
        tableRow.append(tableData2);
        tableRow.append(tableData3);
        $("#tableBody").append(tableRow);
      } else if (result.length === 2) {
        var tableRow = $("<tr>");
        var tableData1 = $("<td>");
        var tableData2 = $("<td>");
        tableData1.text(timeSlot);
        tableData1.attr("id", i + "-" + result[0].bookedDates);
        tableData2.text(timeSlot);
        tableData2.attr("id", i + "-" + result[1].bookedDates);
        tableRow.append(tableData1);
        tableRow.append(tableData2);
        $("#tableBody").append(tableRow);
      } else if (result.length === 1) {
        var tableRow = $("<tr>");
        var tableData1 = $("<td>");
        tableData1.text(timeSlot);
        tableData1.attr("id", i + "-" + result[0].bookedDates);
        tableRow.append(tableData1);
        // $("#tableBody").append(tableRow);
      }
    }
    else {
      console.log("display 3 reservations only")
    }
  }

  for (var i = 0; i < resultFromDB.length; i++) {
    if (resultFromDB[i].startDate === today) {
      highlight()
      console.log("HIT!!")
    }
    if (resultFromDB[i].startDate === tomorrow) {
      highlight()
    }
    if (resultFromDB[i].startDate === twoDaysFromToday) {
      highlight()
    }
  }

  //hight light reserved 
  //  function highlight(){
  var highlightTimes = [];
  for (var i = 0; i < resultFromDB.length; i++) {
    // console.log(resultFromDB[i].bookedDates)
    for (var j = 0; j < resultFromDB[i].bookedHours.length; j++)
      highlightTimes.push(resultFromDB[i].bookedHours[j] + "-" + resultFromDB[i].bookedDates);
  }
  console.log("Should be highlighted ========> ", highlightTimes)
  for (var i = 0; i < highlightTimes.length; i++) {
    $("#" + highlightTimes[i]).attr("class", "bg-danger text-white")
  }
  // }
});




$(".today").text(date);
$(".tomorrow").text(tomorrow);
$(".twoDaysFromToday").text(twoDaysFromToday);

$("#add-btn").on("click", function (event) {
  event.preventDefault();
  // Make a newBook object
  var newReservation = {
    vehicleMake: $("#vehicleMake").val().trim(),
    vehicleModel: $("#vehicleModel").val().trim(),
    licensePlate: $("#licensePlate").val().trim(),
    startDate: $("#startD").val().trim(),
    startHour: $("#startH").val().trim(),
    endHour: $("#endH").val().trim(),
    note: $("#note").val().trim(),
    listingId: listingId,
    userId: userId,
    hostId: hostId
  };
  console.log(newReservation);

  // Send an AJAX POST-request with jQuery
  $.post("/api/newreservation", newReservation)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
    });

  // Empty each input box by replacing the value with an empty string

  $("#vehicleMake").val("");
  $("#vehicleModel").val("");
  $("#licensePlate").val("");
  $("#startDate").val("");
  $("#endDate").val("");
  $("#startHours").val("");
  $("#endHour").val("");
  $("#note").val("");
});