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


// geo code begin

//   var mapsApi = "AIzaSyA2n1eGuHjUHi0ZhQeolicSpu2RrmhQoCg";

//  function initMap() {
//     // The location of Uluru
//     var uluru = {lat: 37.6688, lng: 122.0808};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('#map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
//   } 
// initMap();
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



  

function initMap() {
  // The location of Uluru
  var uluru = {lat: 37.874537, lng: -122.275694,
  //             lat: 37.873845, lng: -122.276870,
  //             lat: 37.875035, lng: -122.274702  
  };
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 13, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru , map: map});
}

  
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
