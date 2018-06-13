
// Makes the map set sticky class

window.onscroll = function() {myFunction()};

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
  var neighborhoods = [
    {lat:37.872578,lng: -122.272927},
    {lat:37.873827,lng: -122.270386},
    {lat:37.874790, lng:-122.276636},
    {lat:37.875035,lng:-122.274702},
    {lat:37.873845,lng: -122.276870},
    {lat:37.874537, lng:-122.275694},
    {lat:37.87942,lng:-122.2597241},
    {lat:37.8775201,lng:-122.2592817},
    {lat:37.8683052,lng:-122.2768382},
    {lat:37.8645197,lng:-122.2784767}

  ];

  var markers = [];

  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      mapTypeControl: false,
      center: {lat: 37.875717, lng: -122.232614},
      zoom: 14
    });
    // 37.875717,-122.232614
    var street = "hayward,Ca 94544"
    // test
    var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<div id="bodyContent">'+
    '<p>' + 
    street
    +'</p>' +
    '<p>Berkeley Ca</p>'
    '</div>'+
    '</div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    
    var marker = new google.maps.Marker({
      position: {lat: 37.875717, lng: -122.2713},
      map: map,
    });
    
    marker.addListener('mouseover', function() {
      infowindow.open(map, marker);
  });
  marker.addListener('mouseout', function() {
    infowindow.close();

    // On click marker will put that address inside the destination location inside the google maps. then u can enter your location
marker.addListener('click', function() {
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
    window.setTimeout(function() {
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
        originInput, {placeIdOnly: true});
    var destinationAutocomplete = new google.maps.places.Autocomplete(
        destinationInput, {placeIdOnly: true});

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
  AutocompleteDirectionsHandler.prototype.setupClickListener = function(id, mode) {
    var radioButton = document.getElementById(id);
    var me = this;
    radioButton.addEventListener('click', function() {
      me.travelMode = mode;
      me.route();
    });
  };

  AutocompleteDirectionsHandler.prototype.setupPlaceChangedListener = function(autocomplete, mode) {
    var me = this;
    autocomplete.bindTo('bounds', this.map);
    autocomplete.addListener('place_changed', function() {
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

  AutocompleteDirectionsHandler.prototype.route = function() {
    if (!this.originPlaceId || !this.destinationPlaceId) {
      return;
    }
    var me = this;

    this.directionsService.route({
      origin: {'placeId': this.originPlaceId},
      destination: {'placeId': this.destinationPlaceId},
      travelMode: this.travelMode
    }, function(response, status) {
      if (status === 'OK') {
        me.directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  };





// adding the login 
    //----------Sign up & log in------------------------------
    $("#beHost").on("click", function() {
       //to prevent submission without value
      //  event.preventDefault();
      $("#renterModal").hide();
      $("#logInModal").hide();
      $("#hostModal").show();
    });
  
    $("#beRenter").on("click", function() {
      //to prevent submission without value
      // event.preventDefault();
      $("#hostModal").hide();
      $("#logInModal").hide();
      $("#renterModal").show();
   });
  
   $("#logInBtn").on("click", function() {
    //to prevent submission without value
    // event.preventDefault();
    $("#logInModal").show();
  });
  
   $("#hostLogInBtn").on("click", function() {
     $("#hostLogInModal").show();
   })
  //-------------sign up & log in ends----------------------------------
      
    var loginForm = $("personalModal");
    var usernameInput = $("#comfirmName")
    var emailInput = $("#comfirmEmail");
    var passwordInput = $("#comfirmPw");
  
   $("#userBack").on("click", function(event) {
     event.preventDefault();
    //  window.location.reload();
     $("#logInBtn").css("display", "none");
     $("<div>", {
       id:"renterInfo",
       text:"Welcome back, "
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
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        console.log(err);
      });
    //  window.location.reload()
   }
  
  
  //-------------Create Account---------------------------------
    $("#submit-host").on("click", function() {
       
    })
  
    $("submit-renter").on("click", function() {
  
  
    })

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
}).then(function(result) {
  if(result.city === undefined){
    $("#display").html("API Error, Please Search Again");
  }
  else {
    // $("#display").prepend("success")
    console.log ("from homepage", result.city.address_components[3].long_name);
    var cityName = result.city.address_components[3].long_name;
    // write to session storage
    sessionStorage.cityNameIndex = cityName;
    // console.log("inhere",cityNameIndex)
    indexPageSearch();
  }
});
//-------------------end home page--------------------
//-------------------from listing page--------------------
$("#search").on("submit", function(event) {
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
  }).then(function(result) {
    console.log(result);
    if(result.city === undefined){
      $("#display").prepend("API Error, Please Search Again");
    }
    else {
      $("#display").prepend("success")
      console.log ("from listing", result.city.address_components[3].long_name);
      sessionStorage.cityNameListings = result.city.address_components[3].long_name;
      indexPageSearch();
    }
  });
 
});
//-------------------end listing search-----------------
//use searchString to do search in listing-api-routes and then database 


// console.log("session", cityNameIndex);
function indexPageSearch() {
  var cityNameIndex = sessionStorage.cityNameIndex;
  $.get("/api/listings/"+cityNameIndex, function(data) {
    console.log("front", data);
  });
};

function listingsPageSearch() {
  var cityNameListings = sessionStorage.cityNameListing;
  $.get("/api/listings/"+cityNameListings, function(data) {
    console.log("front", data);
  });
}

//William's code end ********************************nodemon
