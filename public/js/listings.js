// $( function() {
//     var dateFormat = "mm/dd/yy",
//       from = $( "#from" )
//         .datepicker({
//           defaultDate: "+1w",
//           changeMonth: true,
//           numberOfMonths: 1
//         })
//         .on( "change", function() {
//           to.datepicker( "option", "minDate", getDate( this ) );
//         }),
//       to = $( "#to" ).datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 1
//       })
//       .on( "change", function() {
//         from.datepicker( "option", "maxDate", getDate( this ) );
//       });
 
//     function getDate( element ) {
//       var date;
//       try {
//         date = $.datepicker.parseDate( dateFormat, element.value );
//       } catch( error ) {
//         date = null;
//       }
 
//       return date;
//     }



// This code makes the card clickable
 function addClick(){
     var card = document.getElementsByClassName("click");
     card.innerHTML = "Hello"
 }




















// geo code begin

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



  

// function initMap() {
//   // The location of Uluru
//   var uluru = [{lat: 37.874537, lng: -122.275694, 
//                 lat:37.872578, lng:-122.272927,
//                 lat: 37.873827, lng:-122.270386 }];
//     for(var i = 0; i < uluru.length; i++){
//         console.log(uluru[1]);
//     }
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 13, center: uluru[1]});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru[1] , map: map});
// }

  
  function geocode(){
          var location = '22 Main st Boston MA';
      axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
          params:{
              address: location,
              key:'AIzaSyA2n1eGuHjUHi0ZhQeolicSpu2RrmhQoCg'
          }
  
      }).then(function(response){
          console.log(response);
          
          var address = response.data.results[0].formatted_address ;
  
      })
      .catch(function(error){
          conosle.log(error)
      })
  
  
  };

//geo code end 

// });

var neighborhoods = [
    {lat: 37.873827, lng: -122.270386},
    {lat: 37.872578, lng: -122.272927},
    {lat: 37.874790, lng: -122.276636 },
    {lat:37.875035, lng: -122.274702},
    {lat:37.873845, lng: -122.276870},
    {lat:37.875035, lng: -122.275694}
  ];

  var markers = [];
  var map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 14,
      center: {lat: 37.8720, lng: -122.2713}
    });
  }

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