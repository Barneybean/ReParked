

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
// var hostId = sessionStorage.getItem("loggedInHostId");
// $.ajax("/api/host/" + hostId, {
//     type: "get"
// }).then(function(data) {
//     console.log("this is :" + data);

// var garagePic = $('<img>');
// garagePic.attr("src", data.Url);
// $("#garagePhoto").append(garagePic);

// $("#garageInfomation").append('<div><strong>Your  Garage location</strong>: ' + data.streetnumber + ' ' + data.streetname + ', ' + data.City + ', ' + data.State + ', ' + data.zipCode + '.<strong><br>Type</strong>: ' + data.Type + '<strong><br>Hourly Rate</strong>: ' + data.hourlyRate + "<hr>");


// });

$("#addListing").on("click", function (event) {
    event.preventDefault();

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

    var searchString = garageInfo.streetnumber + " " + garageInfo.streetname + " " + garageInfo.city;

    var addressString = {
        address: searchString
    };
    //to get alttitude and longitude
    $.ajax("/api/address", {
        type: "post",
        data: addressString
    }).then(function (result) {
        console.log(result);
        if (result.city === undefined) {
            $("#streetName").html("API Error, Please Search Again");
        }
        else {
            // $("#display").prepend("success")
            console.log("from homepage", result.city.geometry.location.lat);
            console.log("from homepage", result.city.geometry.location.lng);
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
            //clear form
            // streetNumber.val("");
            // streetName.val("");
            // city.val("");
            // state.val("");
            // zipCode.val("");
            // url.val("");


            function garageInfoPush(streetnumber, streetname, city, state, zipcode, latitude, longitude, type, hourlyrate, url, hostsprofileid) {
                console.log(hostsprofileid)
                var garages = {
                    streetNumber: streetnumber,
                    streetName: streetname,
                    City: city,
                    State: state,
                    zipCode: zipcode,
                    Latitude: latitude,
                    Longitude: longitude,
                    Type: type,
                    hourlyRate: hourlyrate,
                    Url: url,
                    hostsProfileId: hostsprofileid
                }
                // console.log(garages);
                // write garage info into database -  table
                $.ajax("/api/listinginfo", {
                    type: "POST",
                    data: garages
                }).then(function (data) {
                    console.log("posted", data);
                    createCard(data);
                    $("#notice").text("Congratulations - New Listing Posted!!!");
                })
            }
            // sessionStorage.cityNameIndex = cityName;
            // console.log("inhere",cityNameInde
        };
    });
});

function createCard(data) {
    console.log("createCard Running", data)
    // add new listing to owners listing page
    var newListing = $('<div>');
    newListing.attr({class:"card", height: "8rem", value: data.id,})
    var newImage = $("<img>");
    newImage.attr({
        src: data.url,
        height: "200",
        width: "200"
    });
    var cardBody = $('<div>');
    var type = $("<h>");
    type.text("Type: "+data.type);
    var details = $("<p>");
    details.text(data.streetNumber+" "+data.streetName+" "+data.city+" "+data.state+" "+data.zipCode+" "+"Hourly Rate $"+data.hourlyRate+"/hr");
    cardBody.append(type);
    cardBody.append(details);
    newListing.append(newImage);
    newListing.append(cardBody);
    $("#existingListings").prepend(newListing);
    //end new listing card
}

var hostId = sessionStorage.getItem("loggedInHostId");
var hostName = sessionStorage.getItem("loggedInHostName");
console.log(hostId+hostName);
$("#welcome").append('<h3>Welcome back</h3><h1>' + hostName + "!</h1>")

$.ajax("/api/host/" + hostId, {
    type: "get"
}).then(function (data) {
    console.log(data);
    for(var i = 0; i < data.length; i++) {
        createCard(data[i]);
    }
    
});