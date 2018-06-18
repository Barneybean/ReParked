var dataId = sessionStorage.getItem("loggedInRenterId")
var dataName = sessionStorage.getItem("loggedInRenterName")
var dataEmail = sessionStorage.getItem("loggedInRenterEmail")

console.log(dataId)


var nameDisplay = $("#name");
nameDisplay.append(dataName)

var emailDisplay = $("#email");
emailDisplay.append(dataEmail)


$.ajax("/api/rentersreservation/" + dataId, {
  type: "GET"
}).then(function (data) {
  console.log(data);

  for (var i = 0; i < data.length; i++) {
    var datestart = data[i].dateStart
    var locationDisplay = $("#dateClass");
    locationDisplay.append(datestart + "<br>" + "<hr>");

    var timestart = data[i].timeStart
    var timeEnd = data[i].timeEnd
    var calculation = (timeEnd - timestart)
    var timeDisplay = $("#locationClass")
    timeDisplay.append(timestart + ":00 - " + timeEnd + ":00" + "   You Have " + calculation + " hrs Reserved<br>" + "<hr>")

    var listingId = data[i].listingId
    console.log("this", listingId);

    $.ajax("/api/listings/" + listingId, {
      type: "GET"
    }).then(function (data) {
      console.log(data);
    }).catch(function (err) {
      console.log(err);
    });
  }

}).catch(function (err) {
  console.log(err);
});

