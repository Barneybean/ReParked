$( function() {
    var dateFormat = "mm/dd/yy",
      from = $( "#from" )
        .datepicker({
          defaultDate: "+1w",
          changeMonth: true,
          numberOfMonths: 1
        })
        .on( "change", function() {
          to.datepicker( "option", "minDate", getDate( this ) );
        }),
      to = $( "#to" ).datepicker({
        defaultDate: "+1w",
        changeMonth: true,
        numberOfMonths: 1
      })
      .on( "change", function() {
        from.datepicker( "option", "maxDate", getDate( this ) );
      });
 
    function getDate( element ) {
      var date;
      try {
        date = $.datepicker.parseDate( dateFormat, element.value );
      } catch( error ) {
        date = null;
      }
 
      return date;
    }



    //apicalls
    $.ajax("/api/citysearched", {
      type: "get"
    }).then(function(result) {
      console.log(result);
    });


//geo code begin
 //  var mapsApi = "AIzaSyA2n1eGuHjUHi0ZhQeolicSpu2RrmhQoCg";
//  function initMap() {
//     // The location of Uluru
//     var uluru = {lat: 37.6688, lng: 122.0808};
//     // The map, centered at Uluru
//     var map = new google.maps.Map(
//         document.getElementById('map'), {zoom: 4, center: uluru});
//     // The marker, positioned at Uluru
//     var marker = new google.maps.Marker({position: uluru, map: map});
//   } 
  
//   geocode();
//   function geocode(){
//           var location = '22 Main st Boston MA';
//       axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
//           params:{
//               address: location,
//               key:'AIzaSyA2n1eGuHjUHi0ZhQeolicSpu2RrmhQoCg'
//           }
  
//       }).then(function(response){
//           console.log(response);
          
//           var address = response.data.results[0].formatted_address ;
  
//           // var addressOutput = document.getElementById('#text');
//         //   document.getElementById('#formatted-address').innerHTML = address;
//         //   document.getElementById('#formatted-address').innerHTML
  
//       })
//       .catch(function(error){
//           conosle.log(error)
//       })
  
  
//   };

//geo code end 

});

