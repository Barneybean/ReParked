$('#day-1').val(reservation.bookedDate)


for(var i = 0; i < reservations.bookedHour; i++){
  var hour = reservation.bookedHour[i];
    $('#1-'+hour).attr('class', highlight)
}

.highlight {
  background: yellow;
}

