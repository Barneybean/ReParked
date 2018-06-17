

//new host information===========================================
var streetNumber = $("#streetNumber");
var streetName = $("#streetName");
var city = $("#city");
var state = $("#state");
var zipCode = $("#zipcode");
var type = $("#type");
var hourlyRate = $("#hourlyRate");
var url = $("#url"); 
var garageInfo = "";
//=================================future develop======
// var hostListingsId = sessionStorage.getItem("loggedInHostId");
// $.ajax("/api/hostlistings/" + hostListingsId, {
//     type: "get"
// }).then(function(data) {
//     console.log("this is :" + data);

    // var garagePic = $('<img>');
    // garagePic.attr("src", data.Url);
    // $("#garagePhoto").append(garagePic);

    // $("#garageInfomation").append('<div><strong>Your  Garage location</strong>: ' + data.streetnumber + ' ' + data.streetname + ', ' + data.City + ', ' + data.State + ', ' + data.zipCode + '.<strong><br>Type</strong>: ' + data.Type + '<strong><br>Hourly Rate</strong>: ' + data.hourlyRate + "<hr>");


// });


$("#submitBtn").on("click", function(event) {
    event.preventDefault();

    alert("congratulations!!!");
    garageInfo = {
        streetnumber: streetNumber.val().trim(),
        streetname: streetName.val().trim(),
        city: city.val().trim(),
        state: state.val().trim(),
        zipcode: parseInt(zipCode.val().trim()),
        hourlyrate: hourlyRate.val().trim(),
        type: type.val(),
        url: url.val().trim(),
    }
    console.log(garageInfo.url);
    
    var garagePic = $('<img>');
    garagePic.attr("src", garageInfo.url);
    garagePic.attr("height", "250");
    garagePic.attr("width", "250");
    $("#garagePhoto").append(garagePic);

    $("#garageInfomation").append('<div><strong>Your  Garage location</strong>: ' + garageInfo.streetnumber + ' ' + garageInfo.streetname + ', ' + garageInfo.city + ', ' + garageInfo.state + ', ' + garageInfo.zipcode + '.<strong><br>Type</strong>: ' + garageInfo.type + '<strong><br>Hourly Rate</strong>: ' + garageInfo.hourlyrate + "<hr>");


    var searchString = garageInfo.streetnumber + " " + garageInfo.streetname + " " + garageInfo.city;
    
    var addressString = {
        address: searchString
      };
      $.ajax("/api/address", {
        type: "post",
        data: addressString
      }).then(function(result) {
          console.log(result);
        if(result.city === undefined){
          $("#streetName").html("API Error, Please Search Again");
        }
        else {
          // $("#display").prepend("success")
          console.log ("from homepage", result.city.geometry.location.lat);
          console.log ("from homepage", result.city.geometry.location.lng);
          var locationLat = result.city.geometry.location.lat;
          var locationLng = result.city.geometry.location.lng;
          // write to session storage
          sessionStorage.setItem("hostLat", locationLat);
          sessionStorage.setItem("hostLng", locationLng);

          var latitude = sessionStorage.getItem("hostLat");
          var longitude = sessionStorage.getItem("hostLng");
       
        var profileId = sessionStorage.getItem("loggedInHostId");
        console.log("first: " + profileId);
    
        garageInfoPush(garageInfo.streetnumber, garageInfo.streetname, garageInfo.city, garageInfo.state, garageInfo.zipcode, latitude, longitude, garageInfo.type, garageInfo.hourlyrate, garageInfo.url, profileId);

        streetNumber.val("");
        streetName.val("");
        city.val("");
        state.val("");
        zipCode.val("");
        
        url.val("");
        

      function garageInfoPush(streetnumber, streetname, city, state, zipcode, latitude, longitude, type, hourlyrate, url, hostsprofileid) {
        console.log(hostsprofileid)
          var garages = {
              streetNumber: streetnumber,
              streetName: streetname,
              City: city,
              State: state,
              zipCode: zipcode,
              Latitude: latitude,
              Longitude:longitude,
              Type: type,
              hourlyRate: hourlyrate,
              Url: url,
              hostsProfileId: hostsprofileid 
          }
          console.log(garages);
          $.ajax("/api/garagesinfo", {
              type:"POST",
              data: garages
          }).then(function(data) {
            console.log("posted");
        



        //       var renterProfile=$('<a type="button" id="renterProfile" class="btn btn-outline-secondary" href="/renters">');
        // renterProfile.text("Renter Profile");
        // $("#navButton").prepend(renterProfile);
          }).catch(function(err) {
              console.log(err);
          });
      }
            // sessionStorage.cityNameIndex = cityName;
            // console.log("inhere",cityNameInde
      };
    });
});

var hostListingsId = sessionStorage.getItem("loggedInHostId");
var hostListingsName = sessionStorage.getItem("loggedInHostName");
console.log(hostListingsName);
$("#welcome").append('<h3>Nice to Meet You, Dear</h3><h1>' + hostListingsName + "!</h1>")

$.ajax("/api/hostlistings/" + hostListingsId, {
   type: "get"
}).then(function(data) {
   console.log(data);
   console.log(data[0].type);
 
   var garagePic = $('<img>');
   garagePic.attr('width: 250px; height: 250px;')
   garagePic.attr("src", data[0].url);
   $("#garagePhoto").append(garagePic);

   $("#garageInfomation").append('<div><strong>Your  Garage location</strong>: ' + data[0].streetNumber + ' ' + data[0].streetName + ', ' + data[0].city + ', ' + data[0].state + ', ' + data[0].zipcode + '.<strong><br>Type</strong>: ' + data[0].type + '<strong><br>Hourly Rate</strong>: ' + data[0].hourlyRate + "<hr>");
});