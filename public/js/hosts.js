

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
$("#submitBtn").on("click", function(event) {
    event.preventDefault();

    garageInfo = {
        streetnumber: streetNumber.val().trim(),
        streetname: streetName.val().trim(),
        city: city.val().trim(),
        state: state.val().trim(),
        zipcode: parseInt(zipCode.val().trim()),
        hourlyrate: hourlyRate.val().trim(),
        type: type.val().trim(),
        url: url.val().trim(),
    }
    console.log(garageInfo.url);



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
        type.val("");
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
          }).catch(function(err) {
              console.log(err);
          });
      }
            // sessionStorage.cityNameIndex = cityName;
            // console.log("inhere",cityNameIndex)
      };
    });
});
