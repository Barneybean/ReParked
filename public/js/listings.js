$(document).ready(function () {

  $("#logout").on("click", function () {
    $("#hostLogInBtn").text("Host Login");
    $("#logInBtn").text("Renter Login");
    sessionStorage.clear();
  })

  //----------Sign up & log in------------------------------
  $("#beHost").on("click", function () {
    //to prevent submission without value
    //  event.preventDefault();
    $("#renterModal").hide();
    $("#logInModal").hide();
    $("#hostModal").show();
  });

  $("#beRenter").on("click", function () {
    //to prevent submission without value
    // event.preventDefault();
    $("#hostModal").hide();
    $("#logInModal").hide();
    $("#renterModal").show();
  });

  $("#logInBtn").on("click", function () {
    //to prevent submission without value
    // event.preventDefault();
    $("#logInModal").show();
  });

  $("#hostLogInBtn").on("click", function () {
    $("#hostLogInModal").show();
  })

  //---------------------New user sign up-----------------------------
  //see who is logged in
  var lastLoggedIn = sessionStorage.getItem("lastLoggedIn");
  if (lastLoggedIn == "renter") {
    $("#logInBtn").text("logged in as Renter: " + sessionStorage.getItem("loggedInRenterEmail"));
    $("#hostLogInBtn").text("Host Login");
  }
  else if (lastLoggedIn == "host") {
    $("#hostLogInBtn").text("logged in as Host: " + sessionStorage.getItem("loggedInHostEmail"));
    $("#logInBtn").text("Renter Login");
  }
  else {
  }
  //-------------sign up for host---------------------
  function showPW() {
    // var x = document.getElementByClass("psw");
    var x = document.getElementById("newHostPw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  var hostSignUp = $("#submit-host");
  var newHostName = $("#newHostName");
  var newHostEmail = $("#newHostEmail");
  var newHostPw = $("#newHostPw");
  //  console.log(newHostEmail);
  hostSignUp.on("click", function (event) {

    event.preventDefault();

    var newHost = {
      name: newHostName.val().trim(),
      email: newHostEmail.val().trim(),
      password: newHostPw.val().trim()
    };


    if (!newHost.name || !newHost.email || !newHost.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpHost(newHost.name, newHost.email, newHost.password);
    newHostName.val("");
    newHostEmail.val("");
    newHostPw.val("");
  });

  function signUpHost(name, email, password) {

    var hostInfo = {
      hostName: name,
      hostEmail: email,
      hostPassword: password
    }

    $.ajax("/api/hostSignUp", {
      type: "post",
      data: hostInfo
    }).then(function (data) {
      console.log("posted");
    }).catch(function (err) {
      console.log(err);
    });
  }
  //----------------------------------------------------
  //---------------------------Sign Up for Renter----------
  var renterSignUp = $("#submit-renter");
  var newRenterName = $("#newRenterName");
  var newRenterEmail = $("#newRenterEmail");
  var newRenterPw = $("#newRenterPw");

  renterSignUp.on("click", function (event) {

    event.preventDefault();
    var newRenter = {
      name: newRenterName.val().trim(),
      email: newRenterEmail.val().trim(),
      password: newRenterPw.val().trim()
    };

    if (!newRenter.name || !newRenter.email || !newRenter.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpRenter(newRenter.name, newRenter.email, newRenter.password);
    newRenterName.val("");
    newRenterEmail.val("");
    newRenterPw.val("");
  });

  function signUpRenter(name, email, password) {

    var renterInfo = {
      renterName: name,
      renterEmail: email,
      renterPassword: password
    }
    $.ajax("/api/rentersignup", {
      type: "post",
      data: renterInfo
    }).then(function (data) {
      console.log("posted");
    }).catch(function (err) {
      console.log(err);
    });
  }

  //----------Renter login---------------------------------
  var renterBack = $("#renterBack");
  var comfirmEmail = $("#comfirmEmail");
  var comfirmPw = $("#comfirmPw");

  renterBack.on("click", function (event) {
    console.log("clicked")
    event.preventDefault();


    var renterLogin = {
      email: comfirmEmail.val().trim(),
      password: comfirmPw.val().trim()
    };

    if (!renterLogin.email || !renterLogin.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    loginRenter(renterLogin.email, renterLogin.password);
    comfirmEmail.val("");
    comfirmPw.val("");


  });

  function loginRenter(email, password) {

    var renterMember = {
      Email: email,
      Password: password
    }

    console.log(renterMember);

    $.ajax("/api/renterlogin", {
      type: "POST",
      data: renterMember
    }).then(function (data) {
      // console.log (data);
      //write sucessfull login into session
      if (data === "Fail Login") {
        $("#logInBtn").text("Login failed, click me to try again");
      }
      else {
        sessionStorage.setItem("loggedInRenterId", data.successId);
        sessionStorage.setItem("loggedInRenterName", data.successName);
        sessionStorage.setItem("loggedInRenterEmail", data.successEmail);
        sessionStorage.setItem("lastLoggedIn", "renter");
        $("#logInBtn").text("logged in as Renter: " + data.successEmail);
        $("#hostLogInBtn").text("Host Login");

        // after login, user can see profile
        var renterProfile = $('<a type="button" id="renterProfile" class="btn btn-outline-secondary" href="/renters">');
        renterProfile.text("Renter Profile");
        $("#navButton").prepend(renterProfile);
      }

    }).catch(function (err) {
      console.log(err);
    });

  }

  //----------Host login---------------------------------
  var hostBack = $("#hostBack");
  var comfirmHostEmail = $("#comfirmHostEmail");
  var comfirmHostPw = $("#comfirmHostPw");

  hostBack.on("click", function (event) {
    console.log("host clicked")
    event.preventDefault();
    var hostLogin = {
      email: comfirmHostEmail.val().trim(),
      password: comfirmHostPw.val().trim()
    };


    if (!hostLogin.email || !hostLogin.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    loginHost(hostLogin.email, hostLogin.password);
    comfirmHostEmail.val("");
    comfirmHostPw.val("");

  });

  function loginHost(email, password) {

    var hostMember = {
      Email: email,
      Password: password
    }

    $.ajax("/api/hostlogin", {
      type: "POST",
      data: hostMember
    }).then(function (data) {
      // console.log (data);
      //write sucessfull login into session
      if (data === "Fail Login") {
        $("#hostLogInBtn").text("Login failed, click me to try again");
      }
      else {
        sessionStorage.setItem("loggedInHostId", data.successId);
        sessionStorage.setItem("loggedInHostName", data.successName);
        sessionStorage.setItem("loggedInHostEmail", data.successEmail);
        sessionStorage.setItem("lastLoggedIn", "host");
        $("#hostLogInBtn").text("logged in as Host: " + data.successEmail);
        $("#logInBtn").text("Renter Login");

        // after login, user can see profile
        var hostProfile = $('<a type="button" id="hostProfile" class="btn btn-outline-secondary" href="/hosts">');
        hostProfile.text("Host Profile");
        $("#navButton").prepend(hostProfile);

      };
    }).catch(function (err) {
      console.log(err);
    });

    lastLoggedIn = "host";
  }



  var neighbor = [
    //coordinates goes here
  ];


  //william's code start******************
  //-------------------from home page--------------------
  //retrieve session storage - search string *******************
  var searchString = sessionStorage.search; //full address - user input
  // console.log(searchString);
  // send it back to get city name
  var addressString = {
    address: searchString
  };
  $.ajax("/api/address", {
    type: "post",
    data: addressString
  }).then(function (result) {
    if (result.city === undefined) {
      $("#display").html("API Error, Please refresh couple times! I will fix this issue as soon as the other MERN stack project is completed. Thanks for your patient");
    }
    else {
      // $("#display").prepend("success")
      console.log("from homepage", result.city.address_components[3].long_name);
      var cityName = result.city.address_components[3].long_name;
      // write to session storage
      sessionStorage.setItem("cityNameIndex", cityName);
      // sessionStorage.cityNameIndex = cityName;
      // console.log("inhere",cityNameIndex)
      indexPageSearch();
    }
  });
  //-------------------end home page--------------------
  //-------------------from listing page--------------------
  $("#search").on("submit", function (event) {
    //to prevent submission without value
    event.preventDefault();
    console.log("clicked");
    // get the searched string
    var searchString = $("#listingsAddress").val().trim();
    // send it back to get city name
    var addressString = {
      address: searchString
    }
    console.log(addressString);

    $.ajax("/api/listingsaddress", {
      type: "post",
      data: addressString
    }).then(function (result) {
      console.log(result);
      if (result.city === undefined) {
        $("#display").html("API Error, Please Refresh");
      }
      else {
        console.log("from listing", result.city.address_components[3].long_name);
        var cityNameListing = result.city.address_components[3].long_name;
        sessionStorage.setItem("cityNameListing", cityNameListing);
        // sessionStorage.cityNameListings = result.city.address_components[3].long_name;
        listingsPageSearch();
      }
    });

  });
  //-------------------end listing search-----------------
  //use searchString to do search in listing-api-routes and then database 

  // console.log("session", cityNameIndex);
  function indexPageSearch() {

    var cityNameIndex = sessionStorage.cityNameIndex;
    $.get("/api/listings/" + cityNameIndex, function (data) {
      console.log("front index", data[0].latitude);
      sessionStorage.removeItem("coordinates");
      $("#display").empty();
      displayImage(data);
      //show in googlemap
      neighbor = [];
      for (var j = 0; j < data.length; j++) {
        var coordinates = {
          lat: data[j].latitude,
          lng: data[j].longitude
        };
        neighbor.push(coordinates);
      }
      // console.log(neighbor);
      sessionStorage.setItem("coordinates", JSON.stringify(neighbor));
    });
  };

  function listingsPageSearch() {
    var cityNameListings = sessionStorage.getItem("cityNameListing");
    $.get("/api/listings/" + cityNameListings, function (data) {
      console.log("front listing", data);
      $("#display").empty();
      displayImage(data);
      //show in googlemap
      neighbor = [];
      for (var j = 0; j < data.length; j++) {
        var coordinates = {
          lat: data[j].latitude,
          lng: data[j].longitude
        };
        neighbor.push(coordinates);
      };
      sessionStorage.setItem("coordinates", JSON.stringify(neighbor));

    });
  }

  function displayImage(data) {
    for (var i = 0; i < data.length; i++) {
      var cardShow = $("<div>");
      cardShow.addClass("col-sm-6");
      var cardSm = $("<div>");
      cardSm.addClass("col-sm");
      cardSm.addClass("listing");
      cardShow.append(cardSm);

      var clickSm = $("<a>");
      clickSm.attr("href", "/details");
      var image = $('<img>');
      image.addClass("card-img-top clickMe");
      image.attr("src", data[i].url);
      clickSm.append(image);
      cardSm.append(clickSm);

      var bottomLeft = $("<div>");
      bottomLeft.addClass("bottom-left");
      var addressBoth = data[i].streetNumber + " " + data[i].streetName
      bottomLeft.text(addressBoth)
      cardSm.append(bottomLeft)

      var bottomRight = $("<div>");
      bottomRight.addClass("bottom-right");
      var addressCity = data[i].city + " " + "$" + data[i].hourlyRate + "/hr";
      bottomRight.text(addressCity);
      cardSm.append(bottomRight)

      var topP = $("<p>");
      topP.addClass("card-title");
      var bottomP = $("<p>");
      bottomP.addClass("card-text");
      cardSm.append(topP);
      cardSm.append(bottomP);
      //assign lisitng id to cardSm
      image.attr("listingId", parseInt(data[i].id));
      image.attr("hostId", parseInt(data[i].hostsprofileId));
      image.attr("valueRate", parseInt(data[i].hourlyRate));
      $("#display").prepend(cardSm);
    };
  };


  //store listing id to session storage for details page to load this listing
  $(document).on("click", ".clickMe", function () {
    var listingId = $(this).attr("listingId");
    var hostId = $(this).attr("hostId");
    var rate = $(this).attr("valueRate");
    var imageUrl = $(this).attr("src");
    console.log(listingId)
    //write clicked rate image id and url into sessionstorage for detail page
    sessionStorage.setItem("clickedListingId", listingId);
    sessionStorage.setItem("clickedhostId", hostId);
    sessionStorage.setItem("clickedListingUrl", imageUrl);
    sessionStorage.setItem("clickedListingRate", rate);
  })
  //William's code end ********************************nodemon



  // adding the login 
  //----------Sign up & log in------------------------------
  $("#beHost").on("click", function () {
    //to prevent submission without value
    //  event.preventDefault();
    $("#renterModal").hide();
    $("#logInModal").hide();
    $("#hostModal").show();
  });

  $("#beRenter").on("click", function () {
    //to prevent submission without value
    // event.preventDefault();
    $("#hostModal").hide();
    $("#logInModal").hide();
    $("#renterModal").show();
  });

  $("#logInBtn").on("click", function () {
    //to prevent submission without value
    // event.preventDefault();
    $("#logInModal").show();
  });

  $("#hostLogInBtn").on("click", function () {
    $("#hostLogInModal").show();
  })
  //-------------sign up & log in ends----------------------------------

  var loginForm = $("personalModal");
  var usernameInput = $("#comfirmName")
  var emailInput = $("#comfirmEmail");
  var passwordInput = $("#comfirmPw");

  $("#userBack").on("click", function (event) {
    event.preventDefault();
    //  window.location.reload();
    $("#logInBtn").css("display", "none");
    $("<div>", {
      id: "renterInfo",
      text: "Welcome back, "
    }).css({

    })
    var userData = {
      username: usernameInput.val().trim(),
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.username || !userData.email || !userData.password) {
      return;
    }

    loginUser(userData.username, userData.email, userData.password);
    emailInput.val("");
    emailInput.val("");
    passwordInput.val("");
    // window.location.reload();
  });
  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(username, email, password) {
    $.post("/api/login", {
      username: username,
      email: email,
      password: password
    }).then(function (data) {
      window.location.replace(data);
      // If there's an error, log the error
    }).catch(function (err) {
      console.log(err);
    });
    //  window.location.reload()
  }


});
// Makes the map set sticky class

window.onscroll = function () { myFunction() };

var header = document.getElementById('map');
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

//geo code end 
var neighborhoods = JSON.parse(sessionStorage.getItem("coordinates"));
console.log(neighborhoods);

var markers = [];

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    mapTypeControl: false,
    center: { lat: 37.6624, lng: -121.8747 },
    zoom: 10
  });
  // 37.875717,-122.232614
  var street = ""
  // test


  var contentString = '<div id="content">' +
    '<div id="siteNotice">' +
    '</div>' +
    '<div id="bodyContent">' +
    '<p>' +
    street
    + '</p>' +
    '<p>Berkeley Ca</p>'
  '</div>' +
    '</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: { lat: 37.875717, lng: -122.2713 },
    map: map,
  });

  marker.addListener('mouseover', function () {
    infowindow.open(map, marker);
  });
  marker.addListener('mouseout', function () {
    infowindow.close();

    // On click marker will put that address inside the destination location inside the google maps. then u can enter your location
    marker.addListener('click', function () {
      document.getElementById('destination-input').value = street;
    });


  });


  function drop() {
    clearMarkers();
    for (var i = 0; i < neighborhoods.length; i++) {
      addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
  }


  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function () {
      markers.push(new google.maps.Marker({
        position: position,
        map: map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }

  function clearMarkers() {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
    markers = [];
  }
  drop();
  new AutocompleteDirectionsHandler(map);
}


/**
 * @constructor
*/
function AutocompleteDirectionsHandler(map) {
  this.map = map;
  this.originPlaceId = null;
  this.destinationPlaceId = null;
  this.travelMode = 'WALKING';
  var originInput = document.getElementById('origin-input');
  var destinationInput = document.getElementById('destination-input');
  var modeSelector = document.getElementById('mode-selector');
  this.directionsService = new google.maps.DirectionsService;
  this.directionsDisplay = new google.maps.DirectionsRenderer;
  this.directionsDisplay.setMap(map);

  var originAutocomplete = new google.maps.places.Autocomplete(
    originInput, { placeIdOnly: true });
  var destinationAutocomplete = new google.maps.places.Autocomplete(
    destinationInput, { placeIdOnly: true });

  this.setupClickListener('changemode-walking', 'WALKING');
  this.setupClickListener('changemode-transit', 'TRANSIT');
  this.setupClickListener('changemode-driving', 'DRIVING');

  this.setupPlaceChangedListener(originAutocomplete, 'ORIG');
  this.setupPlaceChangedListener(destinationAutocomplete, 'DEST');

  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(originInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(destinationInput);
  this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(modeSelector);
}

// Sets a listener on a radio button to change the filter type on Places
// Autocomplete.
AutocompleteDirectionsHandler.prototype.setupClickListener = function (id, mode) {
  var radioButton = document.getElementById(id);
  var me = this;
  radioButton.addEventListener('click', function () {
    me.travelMode = mode;
    me.route();
  });
};

AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function (autocomplete, mode) {
  var me = this;
  autocomplete.bindTo('bounds', this.map);
  autocomplete.addListener('place_changed', function () {
    var place = autocomplete.getPlace();
    if (!place.place_id) {
      window.alert("Please select an option from the dropdown list.");
      return;
    }
    if (mode === 'ORIG') {
      me.originPlaceId = place.place_id;
    } else {
      me.destinationPlaceId = place.place_id;
    }
    me.route();
  });

};

AutocompleteDirectionsHandler.prototype.route = function () {
  if (!this.originPlaceId || !this.destinationPlaceId) {
    return;
  }
  var me = this;

  this.directionsService.route({
    origin: { 'placeId': this.originPlaceId },
    destination: { 'placeId': this.destinationPlaceId },
    travelMode: this.travelMode
  }, function (response, status) {
    if (status === 'OK') {
      me.directionsDisplay.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
};
