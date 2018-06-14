var dataId = sessionStorage.getItem("loggedInRenterId")
var dataName = sessionStorage.getItem("loggedInRenterName")
var dataEmail = sessionStorage.getItem("loggedInRenterEmail")
console.log(dataId)


var nameDisplay =$("#name");
nameDisplay.append(dataName)

var emailDisplay =$("#email");
emailDisplay.append(dataEmail)

$.ajax("/api/renters+reservation/" + dataId , {
    type: "GET"
  }).then(function(data) {
    console.log (data);
  }).catch(function(err) {
    console.log(err);
  });
