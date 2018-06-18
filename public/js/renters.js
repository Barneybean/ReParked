var dataId = sessionStorage.getItem("loggedInRenterId")
var dataName = sessionStorage.getItem("loggedInRenterName")
var dataEmail = sessionStorage.getItem("loggedInRenterEmail")

console.log(dataId);


var nameDisplay = $("#name");
nameDisplay.append(dataName);

var emailDisplay = $("#email");
emailDisplay.append(dataEmail);

// display all reservations of this user
$.ajax("/api/rentersreservation/" + dataId, {
  type: "GET"
}).then(function (data) {
  console.log(data);
  // display result in table
  for (var i = 0; i < data.length; i++) {
    var tableRow = $("<tr>");
    var tableData1 = $("<td>");
    var tableData2 = $("<td>");
    var tableData3 = $("<td>");
    tableData1.text(data[i].listing.city + ", " +data[i].listing.state);
    tableData2.text(data[i].dateStart);
    tableData3.text(data[i].timeStart+":00 - "+data[i].timeEnd+":00");
    tableRow.append(tableData1);
    tableRow.append(tableData2);
    tableRow.append(tableData3);
    $("#tableBody").append(tableRow);
  }
})

